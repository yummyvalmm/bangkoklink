import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, Heart, MapPin, ArrowUpRight } from 'lucide-react';
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
            className="group flex gap-4 bg-white rounded-2xl overflow-hidden border border-border-light/60 lg:hover:border-primary/20 lg:hover:shadow-card transition-all duration-300 p-3 items-center active:scale-[0.99]"
        >
            {/* Thumbnail */}
            <div className="relative w-28 h-24 md:w-36 md:h-28 rounded-xl overflow-hidden shrink-0">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-700"
                />
                {/* Status badge */}
                <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider ${
                    property.status === 'For Sale' ? 'bg-white/90 text-text-primary' :
                    property.status === 'New Release' ? 'bg-primary text-white' :
                    'bg-accent text-white'
                }`}>
                    {property.status}
                </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 py-1">
                <h3 className="text-sm font-black text-text-primary tracking-tight truncate lg:group-hover:text-primary transition-colors">
                    {property.title}
                </h3>
                <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted mt-0.5">
                    <MapPin className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                    <span className="truncate">{property.location}</span>
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
                        <Bed className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                        {property.bedrooms}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
                        <Bath className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                        {property.bathrooms}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-text-secondary">
                        <Maximize className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                        {property.sqft.toLocaleString()} sqft
                    </span>
                </div>
            </div>

            {/* Price + Actions */}
            <div className="shrink-0 flex flex-col items-end gap-2 pr-1">
                <span className="text-base font-black text-primary tracking-tight leading-none">{property.price}</span>
                <div className="flex items-center gap-1.5">
                    <button
                        onClick={handleSave}
                        className={`p-1.5 rounded-full transition-all duration-200 active:scale-90 ${
                            isSaved ? 'bg-rose-50 text-rose-500' : 'text-text-muted lg:hover:text-rose-400'
                        }`}
                        aria-label={isSaved ? 'Remove from saved' : 'Save property'}
                    >
                        <Heart className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} strokeWidth={2} />
                    </button>
                    <span className="w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center lg:group-hover:bg-primary lg:group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-primary lg:group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
