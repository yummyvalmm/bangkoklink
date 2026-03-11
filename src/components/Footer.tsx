import { Building2, Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        setEmail('');
        // Handle newsletter signup
    };

    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="py-16 border-b border-white/10">
                    <div className="grid md:grid-cols-12 gap-8">
                        {/* Logo & Description - Wider column */}
                        <div className="md:col-span-4">
                            <div className="flex items-center gap-2 mb-6">
                                <Building2 className="w-7 h-7 text-accent" strokeWidth={1.5} />
                                <span className="text-xl font-bold tracking-wide">
                                    <span className="text-white">BANGKOK</span>
                                    <span className="text-accent"> LINK</span>
                                </span>
                            </div>
                            <p className="text-text-muted leading-relaxed mb-4">
                                Your trusted partner in finding exceptional properties in Bangkok.
                            </p>
                            <p className="text-text-muted text-sm font-medium mb-8">
                                BY LINK CO.,LTD
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-200 group"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" strokeWidth={1.5} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-200 group"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-secondary transition-all duration-200 group"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="md:col-span-2">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-6">Services</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#properties" className="text-text-muted hover:text-accent transition-colors duration-200 text-sm">
                                        Buy Property
                                    </a>
                                </li>
                                <li>
                                    <a href="#properties" className="text-text-muted hover:text-accent transition-colors duration-200 text-sm">
                                        Rent Property
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="md:col-span-2">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-6">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#about" className="text-text-muted hover:text-accent transition-colors duration-200 text-sm">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#agents" className="text-text-muted hover:text-accent transition-colors duration-200 text-sm">
                                        Our Agents
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-text-muted hover:text-accent transition-colors duration-200 text-sm">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-muted hover:text-accent transition-colors duration-200 text-sm">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="md:col-span-4">
                            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-6">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-text-muted text-sm">
                                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-accent" strokeWidth={1.5} />
                                    </div>
                                    <span>+66 (0) 2-XXX-XXXX</span>
                                </li>
                                <li className="flex items-center gap-3 text-text-muted text-sm">
                                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-accent" strokeWidth={1.5} />
                                    </div>
                                    <span>info@bangkoklink.com</span>
                                </li>
                                <li className="flex items-start gap-3 text-text-muted text-sm">
                                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-accent" strokeWidth={1.5} />
                                    </div>
                                    <span>Bangkok<br />Thailand</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="py-12 border-b border-white/10">
                    <div className="max-w-xl">
                        <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                        <p className="text-text-muted text-sm mb-6">
                            Subscribe to our newsletter for the latest property listings and market insights
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:bg-white/10 focus:border-accent/50 transition-all text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-accent text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-200 flex items-center gap-2 shadow-button hover:shadow-button-hover"
                            >
                                <Send className="w-4 h-4" strokeWidth={2} />
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright & Legal */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-xs">
                        <div>
                            © {new Date().getFullYear()} Bangkok Link by THE LINK MD CO., LTD. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-accent transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-accent transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-accent transition-colors duration-200">
                                Accessibility
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
