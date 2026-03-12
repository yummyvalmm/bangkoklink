import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import { properties } from '../data';

const Home = () => {
    return (
        <div>
            {/* Hero Section with Quick Search */}
            <Hero />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Featured Properties Section */}
            <section id="properties" className="py-12 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-sans font-black text-text-primary uppercase tracking-[-0.02em] mb-1">Featured Properties</h2>
                        <p className="text-text-secondary text-sm font-medium">Handpicked luxury properties across Bangkok</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* About Section */}
            <section id="about" className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-background-subtle flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary/5 pattern-dots" />
                            <div className="relative z-10 flex flex-col items-center justify-center text-text-muted/50">
                                <span className="text-2xl font-bold tracking-widest uppercase mb-4">Placeholder</span>
                                <span className="text-sm">Team Photo</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-display font-light text-text-primary tracking-tight">
                                Why Choose <span className="text-primary italic font-light">Bangkok Link</span>
                            </h2>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                With over a decade of experience in luxury real estate, Bangkok Link has established itself as the premier choice for discerning clients seeking exceptional properties in Bangkok.
                            </p>
                            <p className="text-text-secondary text-lg leading-relaxed font-light">
                                Our team of expert agents combines local market knowledge with global connections to deliver unparalleled service and results. We don't just sell properties—we help you find your perfect home.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="bg-background-card rounded-2xl p-6 border border-border-light shadow-sm">
                                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                                    <div className="text-text-secondary">Years Experience</div>
                                </div>
                                <div className="bg-background-card rounded-2xl p-6 border border-border-light shadow-sm">
                                    <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                                    <div className="text-text-secondary">Property Value</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <FinalCTA />

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default Home;
