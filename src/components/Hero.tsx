import QuickSearch from './QuickSearch';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-background">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Main Heading Content */}
                        <div className="max-w-4xl pt-[10vh]">
                            <span className="inline-block text-accent-rich text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in [animation-delay:200ms]">
                                Premium Real Estate
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-text-primary leading-tight tracking-tight mb-8 animate-fade-in [animation-delay:400ms]">
                                Find Your <br />
                                <span className="italic font-light">Perfect Home</span> <br />
                                In Bangkok
                            </h1>
                            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl font-light leading-relaxed mb-12 animate-fade-in [animation-delay:600ms]">
                                Discover exceptional properties in Bangkok that match your lifestyle and exceed your expectations.
                            </p>
                        </div>
                        {/* Quick Search Component */}
                        <div className="pt-6">
                            <QuickSearch />
                        </div>
                    </div>

                    {/* Right Image Grid */}
                    <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-6 relative">
                        <div className="space-y-6">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group shadow-card">
                                <img
                                    src="/properties/hero-1.jpg"
                                    alt="Luxury Property"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-md text-text-primary px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm border border-border-light">
                                        For Sale
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-12">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-card">
                                <img
                                    src="/properties/hero-2.jpg"
                                    alt="Modern Residence"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 right-6">
                                    <span className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                                        New Release
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>

                {/* Category Slider - Refined */}
                <div className="mt-16 bg-white rounded-2xl p-10 border border-border-light shadow-card relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl transition-colors group-hover:bg-accent/10"></div>

                    <div className="relative flex items-center justify-between">
                        <div>
                            <h3 className="text-4xl font-display font-semibold mb-3 text-text-primary">Luxury Residences</h3>
                            <p className="text-text-secondary text-lg font-light">Premium properties in exclusive locations</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 rounded-full bg-background-subtle text-text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center border border-border-light shadow-minimal">
                                ←
                            </button>
                            <button className="w-14 h-14 rounded-full bg-background-subtle text-text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center border border-border-light shadow-minimal">
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
