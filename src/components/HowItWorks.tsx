import { Search, Calendar, Key } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            number: '01',
            title: 'Browse Properties',
            description: 'Search our curated collection of luxury condominiums tailored to your preferences and budget.',
        },
        {
            icon: Calendar,
            number: '02',
            title: 'Schedule a Viewing',
            description: 'Book in-person or virtual tours at your convenience with our expert agents.',
        },
        {
            icon: Key,
            number: '03',
            title: 'Move In or Close',
            description: 'Our team handles all the details to ensure a smooth rental or purchase process.',
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-background-subtle">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-center mb-12 text-text-primary">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-background-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 -right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-minimal">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-200">
                                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-3 text-text-primary">{step.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{step.description}</p>

                                {/* Connector Line (except last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border-light" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
