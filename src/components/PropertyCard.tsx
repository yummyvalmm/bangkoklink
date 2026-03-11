import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, Heart, MapPin } from 'lucide-react';
import type { Property } from '../types';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent Link navigation
        setIsSaved(!isSaved);
    };

    return (
        <Link
            to={`/properties/${property.id}`}
            className={`group block bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-card lg:hover:shadow-card-hover border border-border-light/50 lg:hover:border-accent/20 relative ${property.status === 'New Release'
                ? 'ring-1 ring-accent/10 lg:hover:ring-accent/30'
                : ''
                }`}
        >
            {/* Image Container */}
            <div className="relative h-60 md:h-72 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Status Badge & Save Button */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md backdrop-blur-md ${property.status === 'For Sale' ? 'bg-white/90 text-text-primary' :
                        property.status === 'New Release' ? 'bg-primary text-white' :
                            'bg-accent text-secondary'
                        }`}>
                        {property.status}
                    </span>

                    <button
                        onClick={handleSave}
                        className={`p-2.5 rounded-full backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${isSaved
                            ? 'bg-white text-rose-500'
                            : 'bg-white/70 text-text-primary lg:hover:bg-white active:bg-white'
                            }`}
                        aria-label={isSaved ? "Remove from saved properties" : "Save property"}
                    >
                        <Heart className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} strokeWidth={2} />
                    </button>
                </div>

                {/* Hover Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-primary/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-end lg:items-center justify-center pb-6 lg:pb-0 pointer-events-none">
                    <span className="bg-white/95 backdrop-blur-md text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-xl lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 border border-white/20">
                        View Details
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-8 space-y-5">
                {/* Title & Location */}
                <div>
                    <h3 className="text-2xl font-sans font-bold tracking-tight mb-2 text-text-primary lg:group-hover:text-primary transition-colors">
                        {property.title}
                    </h3>
                    <p className="text-text-secondary text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 opacity-60">
                        <MapPin className="w-3 h-3" strokeWidth={2.5} />
                        {property.location}
                    </p>
                </div>

                {/* Price */}
                <div className="text-3xl font-black text-primary font-sans tracking-[-0.03em]">{property.price}</div>

                {/* Features */}
                <div className="flex items-center gap-6 pt-6 border-t border-border-light/60">
                    <div className="flex items-center gap-2.5 text-xs font-medium text-text-secondary">
                        <Bed className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        <span className="tracking-wide">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-text-secondary">
                        <Bath className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        <span className="tracking-wide">{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-medium text-text-secondary">
                        <Maximize className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        <span className="tracking-wide">{property.sqft.toLocaleString()} Sqft</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
