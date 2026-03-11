import { ArrowRight, Phone, Mail } from 'lucide-react';

const FinalCTA = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl lg:text-7xl font-sans font-black mb-8 text-text-primary tracking-[-0.04em] leading-[0.95] uppercase">
                    Ready to Find Your <span className="text-primary">Dream Home?</span>
                </h2>
                <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto font-medium tracking-wide">
                    Schedule a free consultation today and let our expert agents help you discover the perfect property that matches your lifestyle and budget.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={() => scrollToSection('properties')}
                        className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                    >
                        Browse Properties
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-background-card text-text-primary px-8 py-4 rounded-lg font-bold text-lg border-2 border-border-light hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                    >
                        Talk to an Agent
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border-light">
                    <a
                        href="tel:+15551234567"
                        className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-text-muted">Call us</div>
                            <div className="font-semibold">+1 (555) 123-4567</div>
                        </div>
                    </a>
                    <a
                        href="mailto:info@bangkoklink.com"
                        className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors group"
                    >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-text-muted">Email us</div>
                            <div className="font-semibold">info@bangkoklink.com</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
