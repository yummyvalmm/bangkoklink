import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowUpRight, Menu, X } from 'lucide-react';

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

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-2xl border-b border-border-light/50 shadow-minimal py-3' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo - Refined Architectural Branding */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 border border-accent/20 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:bg-accent/5">
                            <Building2 className="w-5 h-5 text-accent" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col -space-y-1">
                            <span className="text-xl md:text-2xl font-display font-light tracking-[0.05em] text-primary">
                                BANGKOK <span className="italic">LINK</span>
                            </span>
                            <span className="text-[7px] md:text-[8px] font-sans font-bold tracking-[0.4em] text-accent-rich uppercase ml-0.5 opacity-80">
                                Luxury Real Estate
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Elegant Spacing */}
                    <div className="hidden md:flex items-center gap-10">
                        {['home', 'properties', 'about', 'agents'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-text-secondary hover:text-primary transition-all font-medium text-[10px] uppercase tracking-[0.25em] relative group/nav outline-none"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-accent transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0"></span>
                            </button>
                        ))}
                    </div>

                    {/* Secondary Desktop Action - Sophisticated Minimal */}
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

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-2 text-primary hover:bg-black/5 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Refined Transition */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border-light transition-all duration-500 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-6 py-10 flex flex-col gap-8">
                    {['home', 'properties', 'about', 'agents'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-text-secondary hover:text-primary text-[10px] font-bold uppercase tracking-[0.3em] text-left transition-colors border-l border-transparent hover:border-accent pl-4"
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-primary text-white p-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-2"
                    >
                        Contact Us
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
