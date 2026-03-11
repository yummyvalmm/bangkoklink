import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Maximize, Wifi, Car, Waves, Shield, Dumbbell, Trees, Home as HomeIcon, Monitor } from 'lucide-react';
import { properties } from '../data';

const amenityIcons: { [key: string]: any } = {
    WiFi: Wifi,
    Parking: Car,
    Pool: Waves,
    Security: Shield,
    Gym: Dumbbell,
    Garden: Trees,
    'Smart Home': HomeIcon,
    Theater: Monitor,
};

const PropertyDetail = () => {
    const { id } = useParams();
    const property = properties.find((p) => p.id === id);

    if (!property) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
                    <Link to="/" className="text-accent hover:underline">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-text-muted hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Properties
                </Link>

                {/* Image Gallery */}
                <div className="grid lg:grid-cols-2 gap-4 mb-8"> clinics.
                    <div className="relative h-[500px] rounded-3xl overflow-hidden">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6">
                            <span className="bg-white text-text-primary px-6 py-3 rounded-full font-medium">
                                {property.status}
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-4">
                        <div className="relative h-full rounded-3xl overflow-hidden">
                            <img
                                src={property.images?.[1] || property.image}
                                alt={property.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative h-full rounded-3xl overflow-hidden">
                            <img
                                src={property.images?.[2] || property.image}
                                alt={property.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <div>
                            <div className="text-5xl font-bold text-accent mb-4">{property.price}</div>
                            <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
                            <p className="text-text-muted text-lg">{property.location}</p>
                        </div>

                        {/* Features */}
                        <div className="flex gap-8 p-6 bg-background-card rounded-2xl border border-border-light">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Bed className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{property.bedrooms}</div>
                                    <div className="text-sm text-text-muted">Bedrooms</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Bath className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{property.bathrooms}</div>
                                    <div className="text-sm text-text-muted">Bathrooms</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Maximize className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{property.sqft.toLocaleString()}</div>
                                    <div className="text-sm text-text-muted">Sqft</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Description</h2>
                            <p className="text-text-muted text-lg leading-relaxed">
                                {property.description || 'A stunning property that offers the perfect blend of luxury and comfort.'}
                            </p>
                        </div>

                        {/* Amenities */}
                        {property.amenities && property.amenities.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Amenities</h2>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    {property.amenities.map((amenity) => {
                                        const Icon = amenityIcons[amenity] || HomeIcon;
                                        return (
                                            <div
                                                key={amenity}
                                                className="flex items-center gap-3 bg-background-card rounded-xl p-4 border border-border-light"
                                            >
                                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-accent" />
                                                </div>
                                                <span className="font-medium">{amenity}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-background-card rounded-3xl p-8 border border-border-light sticky top-24">
                            <h3 className="text-2xl font-bold mb-2">Property For {property.status.replace('For ', '')}</h3>
                            <p className="text-text-muted mb-6">Interested in this property? Get in touch with us.</p>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-background-subtle border border-border-light rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-background-subtle border border-border-light rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-background-subtle border border-border-light rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Message"
                                    className="w-full bg-background-subtle border border-border-light rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all duration-300"
                                >
                                    Request Information
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
