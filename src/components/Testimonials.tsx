import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <span className="text-accent-rich text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Client Stories</span>
                    <h2 className="text-5xl lg:text-6xl font-display font-semibold mb-6 text-text-primary">What Our Clients Say</h2>
                    <p className="text-text-secondary text-lg font-light leading-relaxed">
                        Real experiences from real people who found their dream homes in Bangkok with our dedicated team.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-background-card rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-md transition-all duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                <Quote className="w-6 h-6 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-text-secondary leading-relaxed mb-6">
                                "{testimonial.text}"
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center gap-4 pt-6 border-t border-border-light">
                                {testimonial.image ? (
                                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-primary font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <div className="font-bold text-text-primary">{testimonial.name}</div>
                                    <div className="text-sm text-text-secondary">{testimonial.role}</div>
                                    <div className="text-xs text-text-muted">{testimonial.propertyType}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
