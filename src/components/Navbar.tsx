import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
    { label: 'Properties', id: 'properties' },
    { label: 'About', id: 'about' },
    { label: 'Agents', id: 'agents' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/80 backdrop-blur-2xl border-b border-border/40 shadow-minimal py-3'
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group relative z-[60]">
                            <div className={`w-9 h-9 border rounded-lg flex items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'border-white/30 bg-white/10' : 'border-accent/20 group-hover:border-accent group-hover:bg-accent/5'}`}>
                                <Building2 className={`w-5 h-5 transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : 'text-accent'}`} strokeWidth={1} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-lg md:text-xl font-sans font-black tracking-[-0.02em] leading-none uppercase transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : 'text-text-primary'}`}>
                                    Bangkok Link
                                </span>
                                <span className={`text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.3em] mt-0.5 opacity-80 transition-colors duration-300 ${isMobileMenuOpen ? 'text-white/70' : 'text-accent'}`}>
                                    Luxury Real Estate
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-12">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`#${item.id}`}
                                    className="group/nav relative text-[11px] font-sans font-black uppercase tracking-[0.3em] text-text-primary hover:text-primary transition-colors duration-300"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-accent transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group relative px-7 py-3 overflow-hidden rounded-full border border-primary text-primary transition-all duration-500 hover:text-white"
                            >
                                <span className="absolute inset-0 bg-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>
                                <span className="relative flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em]">
                                    Contact Us
                                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                                </span>
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden relative z-[60] p-2 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen
                                ? <X className="w-6 h-6 text-white" strokeWidth={2} />
                                : <Menu className="w-6 h-6 text-text-primary" strokeWidth={1.5} />
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[55] md:hidden flex flex-col transition-all duration-300 ease-out ${
                    isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
                style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #0d0d1a 60%, #0f1629 100%)' }}
            >
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[80px] -ml-10 -mb-10 pointer-events-none" />

                {/* Nav Links */}
                <div className="flex flex-col justify-center flex-1 px-8 pt-24 pb-10 relative z-10">
                    <div className="flex flex-col gap-2">
                        {NAV_ITEMS.map((item, i) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`group text-left transition-all duration-300 ${
                                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${80 + i * 60}ms` : '0ms' }}
                            >
                                <span className="block text-5xl font-black uppercase tracking-[-0.03em] text-white/70 group-hover:text-white active:text-white transition-colors duration-200 leading-tight py-4 border-b border-white/20 group-hover:border-white/50">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Bottom Action */}
                    <div
                        className={`mt-12 transition-all duration-300 ${
                            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                        style={{ transitionDelay: isMobileMenuOpen ? '360ms' : '0ms' }}
                    >
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full bg-primary text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-2.5 active:scale-[0.98] transition-transform"
                        >
                            Get In Touch
                            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>

                        <p className="text-center text-white/30 text-[9px] font-bold uppercase tracking-[0.3em] mt-6">
                            Bangkok Link · Luxury Real Estate
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
