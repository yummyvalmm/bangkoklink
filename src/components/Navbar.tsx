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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-lg border-b border-border-light shadow-minimal py-4' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-sm">
                            <Building2 className="w-6 h-6 text-accent" strokeWidth={1.5} />
                        </div>
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-primary font-sans transition-colors group-hover:text-primary-light">
                            BANGKOK <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">LINK</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {['home', 'properties', 'about', 'agents'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-text-secondary hover:text-primary transition-all font-semibold text-xs uppercase tracking-[0.15em] relative group/nav outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-sm"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/nav:w-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Secondary Desktop Action */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-primary text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2.5 hover:bg-primary-light transition-all duration-300 shadow-button hover:shadow-button-hover outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                        >
                            Contact Us
                            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden p-2 text-primary hover:bg-black/5 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-border-light transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-6 py-8 flex flex-col gap-6">
                    {['home', 'properties', 'about', 'agents'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-text-secondary hover:text-primary text-sm font-bold uppercase tracking-[0.2em] text-left transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-primary text-white p-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
                    >
                        Contact Us
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
