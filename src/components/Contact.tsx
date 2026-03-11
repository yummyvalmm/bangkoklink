import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-display font-semibold mb-4 text-text-primary uppercase tracking-tight">Get In Touch</h2>
                    <p className="text-text-secondary text-lg font-light italic">
                        Ready to find your dream property? Contact us today.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-background-card rounded-xl p-8 border border-border-light shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-text-primary">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-text-primary">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-text-primary">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full bg-white border border-border-light rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell us about your requirements..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-button hover:shadow-button-hover hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-6">
                        <div className="bg-background-card rounded-3xl p-8 shadow-card space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-text-primary">Phone</h3>
                                    <p className="text-text-secondary">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-text-primary">Email</h3>
                                    <p className="text-text-secondary">info@bangkoklink.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1 text-text-primary">Address</h3>
                                    <p className="text-text-secondary">
                                        123 Luxury Avenue<br />
                                        Beverly Hills, CA 90210
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-background-card rounded-xl overflow-hidden border border-border-light shadow-sm h-64">
                            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-background flex items-center justify-center">
                                <MapPin className="w-16 h-16 text-primary/30" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
