import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, Heart } from 'lucide-react';
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
            className={`group block bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-card hover:shadow-card-hover border border-border-light/50 hover:border-accent/20 relative ${property.status === 'New Release'
                ? 'ring-1 ring-accent/10 hover:ring-accent/30'
                : ''
                }`}
        >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
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
                            : 'bg-white/70 text-text-primary hover:bg-white'
                            }`}
                        aria-label={isSaved ? "Remove from saved properties" : "Save property"}
                    >
                        <Heart className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} strokeWidth={2} />
                    </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Details
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-8 space-y-5">
                {/* Title & Location */}
                <div>
                    <h3 className="text-2xl font-display font-medium tracking-tight mb-2 text-text-primary group-hover:text-primary transition-colors">
                        {property.title}
                    </h3>
                    <p className="text-text-secondary text-sm font-light flex items-center gap-1.5 tracking-wide">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {property.location}
                    </p>
                </div>

                {/* Price */}
                <div className="text-3xl font-light text-primary font-sans tracking-tight">{property.price}</div>

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
