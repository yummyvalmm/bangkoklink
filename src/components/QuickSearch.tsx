import { useState } from 'react';
import { Search, MapPin, BedDouble, Banknote, ChevronDown } from 'lucide-react';

interface QuickSearchProps {
    onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
    location: string;
    listingType: 'rent' | 'buy';
    propertyType: string;
    priceRange: string;
}

const LOCATIONS = [
    'Sukhumvit', 'Silom', 'Sathorn', 'Thonglor', 'Ekkamai',
    'Asoke', 'Phrom Phong', 'Ratchada', 'Lumpini', 'Riverside'
];

const PROPERTY_TYPES = ['Any Type', 'Condo', 'Villa', 'Apartment', 'Townhouse', 'Penthouse'];

const PRICE_OPTIONS = {
    rent: [
        { label: 'Any Budget', value: 'any' },
        { label: 'Under ฿20k/mo', value: '0-20000' },
        { label: '฿20k – ฿40k/mo', value: '20000-40000' },
        { label: '฿40k – ฿80k/mo', value: '40000-80000' },
        { label: '฿80k+/mo', value: '80000-999999' },
    ],
    buy: [
        { label: 'Any Budget', value: 'any' },
        { label: 'Under ฿3M', value: '0-3000000' },
        { label: '฿3M – ฿8M', value: '3000000-8000000' },
        { label: '฿8M – ฿20M', value: '8000000-20000000' },
        { label: '฿20M+', value: '20000000-999999999' },
    ],
};

const QuickSearch = ({ onSearch }: QuickSearchProps) => {
    const [listingType, setListingType] = useState<'rent' | 'buy'>('rent');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('Any Type');
    const [priceRange, setPriceRange] = useState('any');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredLocations = LOCATIONS.filter(l =>
        l.toLowerCase().includes(location.toLowerCase()) && location.length > 0
    );

    const handleSearch = () => {
        if (onSearch) {
            onSearch({ location, listingType, propertyType, priceRange });
        }
        setShowSuggestions(false);
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-border shadow-card overflow-visible">

                {/* Tab Bar */}
                <div className="flex border-b border-border">
                    {(['rent', 'buy'] as const).map((type) => (
                        <button
                            key={type}
                            onClick={() => { setListingType(type); setPriceRange('any'); }}
                            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all border-b-2 -mb-px ${
                                listingType === type
                                    ? 'border-primary text-primary bg-primary/5'
                                    : 'border-transparent text-text-secondary lg:hover:text-text-primary bg-transparent lg:hover:bg-background-subtle'
                            }`}
                        >
                            {type === 'rent' ? 'For Rent' : 'For Sale'}
                        </button>
                    ))}
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">

                    {/* Location */}
                    <div className="relative">
                        <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-text-secondary mb-2">
                            <MapPin className="w-3 h-3 text-primary" strokeWidth={2.5} />
                            Location
                        </label>
                        <div className="relative group">
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => { setLocation(e.target.value); setShowSuggestions(true); }}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                                placeholder="Search Bangkok area…"
                                className="w-full bg-background-subtle border border-border rounded-xl px-4 py-3 text-sm font-semibold text-text-primary placeholder:text-text-muted placeholder:font-normal outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all cursor-text"
                            />
                        </div>

                        {/* Autocomplete Dropdown */}
                        {showSuggestions && filteredLocations.length > 0 && (
                            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-border rounded-xl shadow-card-hover z-50 overflow-hidden">
                                {filteredLocations.map((loc) => (
                                    <button
                                        key={loc}
                                        onMouseDown={() => { setLocation(loc); setShowSuggestions(false); }}
                                        className="w-full text-left px-5 py-4 text-sm font-medium text-text-secondary lg:hover:bg-background-subtle lg:hover:text-primary transition-colors flex items-center gap-2.5 active:bg-background-subtle"
                                    >
                                        <MapPin className="w-3.5 h-3.5 text-accent opacity-60 shrink-0" strokeWidth={2} />
                                        {loc}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Property Type */}
                    <div>
                        <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-text-secondary mb-2">
                            <BedDouble className="w-3 h-3 text-primary" strokeWidth={2.5} />
                            Property Type
                        </label>
                        <div className="relative">
                            <select
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                                className="w-full bg-background-subtle border border-border rounded-xl px-4 py-3.5 md:py-3 pr-10 text-sm font-semibold text-text-primary outline-none cursor-pointer appearance-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all lg:hover:border-primary/40 active:border-primary/40"
                            >
                                {PROPERTY_TYPES.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-text-secondary mb-2">
                            <Banknote className="w-3 h-3 text-primary" strokeWidth={2.5} />
                            Budget
                        </label>
                        <div className="relative">
                            <select
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full bg-background-subtle border border-border rounded-xl px-4 py-3.5 md:py-3 pr-10 text-sm font-semibold text-text-primary outline-none cursor-pointer appearance-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all lg:hover:border-primary/40 active:border-primary/40"
                            >
                                {PRICE_OPTIONS[listingType].map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Footer / Search Button */}
                <div className="px-6 pb-6 flex items-center justify-between">
                    <p className="text-[10px] text-text-muted font-medium hidden sm:block">
                        <span className="font-bold text-text-secondary">200+</span> properties available in Bangkok
                    </p>
                    <button
                        onClick={handleSearch}
                        className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2.5 lg:hover:bg-primary/90 active:scale-[0.98] transition-all shadow-button"
                    >
                        <Search className="w-3.5 h-3.5" strokeWidth={3} />
                        Search Properties
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickSearch;
