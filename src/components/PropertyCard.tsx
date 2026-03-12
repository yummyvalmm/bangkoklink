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
        e.preventDefault();
        setIsSaved(!isSaved);
    };

    return (
        <Link
            to={`/properties/${property.id}`}
            className="group block bg-white rounded-xl overflow-hidden border border-border-light/60 lg:hover:border-primary/20 lg:hover:shadow-card transition-all duration-300 active:scale-[0.99]"
        >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-700"
                />
                {/* Status badge */}
                <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider shadow-sm ${
                    property.status === 'For Sale' ? 'bg-white text-text-primary' :
                    property.status === 'New Release' ? 'bg-primary text-white' :
                    'bg-accent text-white'
                }`}>
                    {property.status}
                </span>
                {/* Save button */}
                <button
                    onClick={handleSave}
                    className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md shadow transition-all duration-200 active:scale-90 ${
                        isSaved ? 'bg-white text-rose-500' : 'bg-white/70 text-text-secondary'
                    }`}
                    aria-label={isSaved ? 'Remove from saved' : 'Save property'}
                >
                    <Heart className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} strokeWidth={2} />
                </button>
            </div>

            {/* Info */}
            <div className="p-3.5">
                {/* Price */}
                <div className="text-base font-black text-primary tracking-tight mb-1">{property.price}</div>
                {/* Title */}
                <h3 className="text-xs font-bold text-text-primary tracking-tight truncate mb-0.5 lg:group-hover:text-primary transition-colors">
                    {property.title}
                </h3>
                {/* Location */}
                <p className="text-[10px] text-text-muted font-semibold uppercase tracking-[0.12em] truncate mb-2.5">{property.location}</p>

                {/* Stats */}
                <div className="flex items-center gap-3 pt-2.5 border-t border-border-light/50">
                    <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
                        <Bed className="w-3 h-3 text-accent" strokeWidth={1.5} />
                        {property.bedrooms}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
                        <Bath className="w-3 h-3 text-accent" strokeWidth={1.5} />
                        {property.bathrooms}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
                        <Maximize className="w-3 h-3 text-accent" strokeWidth={1.5} />
                        {property.sqft.toLocaleString()}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
