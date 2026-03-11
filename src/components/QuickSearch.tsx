import { useState } from 'react';
import { Search, MapPin, DollarSign } from 'lucide-react';

interface QuickSearchProps {
    onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
    location: string;
    listingType: 'rent' | 'buy';
    priceRange: { min: number; max: number };
}

const QuickSearch = ({ onSearch }: QuickSearchProps) => {
    const [listingType, setListingType] = useState<'rent' | 'buy'>('rent');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

    const handleSearch = () => {
        if (onSearch) {
            onSearch({ location, listingType, priceRange });
        }
        // Scroll to properties section
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-background-card rounded-3xl p-8 shadow-card">
            {/* Rent/Buy Toggle */}
            <div className="flex gap-2 mb-6" role="tablist" aria-label="Listing Type">
                <button
                    role="tab"
                    aria-selected={listingType === 'rent'}
                    onClick={() => setListingType('rent')}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white ${listingType === 'rent'
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-background-subtle'
                        }`}
                >
                    For Rent
                </button>
                <button
                    role="tab"
                    aria-selected={listingType === 'buy'}
                    onClick={() => setListingType('buy')}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white ${listingType === 'buy'
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-background-subtle'
                        }`}
                >
                    For Sale
                </button>
            </div>

            {/* Search Inputs */}
            <div className="space-y-4 mb-8">
                {/* Location Input */}
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                        Location
                    </label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" strokeWidth={1.5} />
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Sukhumvit, Silom, Sathorn..."
                            className="w-full pl-12 pr-4 py-3.5 bg-background-subtle border border-transparent rounded-xl text-text-primary placeholder:text-text-muted outline-none focus:bg-white focus:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                {/* Price Range Input */}
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                        Price Range
                    </label>
                    <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" strokeWidth={1.5} />
                        <select
                            value={`${priceRange.min}-${priceRange.max}`}
                            onChange={(e) => {
                                const [min, max] = e.target.value.split('-').map(Number);
                                setPriceRange({ min, max });
                            }}
                            className="w-full pl-12 pr-10 py-3.5 bg-background-subtle border border-transparent rounded-xl text-text-primary outline-none focus:bg-white focus:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all appearance-none cursor-pointer"
                        >
                            {listingType === 'rent' ? (
                                <>
                                    <option value="0-20000">Under ฿20,000/mo</option>
                                    <option value="20000-40000">฿20,000 - ฿40,000/mo</option>
                                    <option value="40000-60000">฿40,000 - ฿60,000/mo</option>
                                    <option value="60000-999999">฿60,000+/mo</option>
                                </>
                            ) : (
                                <>
                                    <option value="0-3000000">Under ฿3M</option>
                                    <option value="3000000-8000000">฿3M - ฿8M</option>
                                    <option value="8000000-15000000">฿8M - ฿15M</option>
                                    <option value="15000000-999999999">฿15M+</option>
                                </>
                            )}
                        </select>
                        {/* Custom dropdown arrow */}
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl shadow-button hover:shadow-button-hover hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
                <Search className="w-5 h-5" strokeWidth={2} />
                Search Properties
            </button>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-6 mt-6 border-t border-border-light text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">200+</span>
                    <span>Properties</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">70+</span>
                    <span>Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">10+</span>
                    <span>Years Experience</span>
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
