import { useState } from 'react';
import { Search, MapPin, DollarSign, ArrowRight } from 'lucide-react';

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
        const propertiesSection = document.getElementById('properties');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-3 border border-border-light shadow-card group/search">
                <div className="flex flex-col md:flex-row items-stretch gap-2">
                    {/* Listing Type Toggle - Minimalist */}
                    <div className="flex p-1 bg-background-subtle rounded-2xl md:w-48">
                        <button
                            onClick={() => setListingType('rent')}
                            className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                                listingType === 'rent' ? 'bg-white text-primary shadow-minimal' : 'text-text-secondary hover:text-primary'
                            }`}
                        >
                            Rent
                        </button>
                        <button
                            onClick={() => setListingType('buy')}
                            className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                                listingType === 'buy' ? 'bg-white text-primary shadow-minimal' : 'text-text-secondary hover:text-primary'
                            }`}
                        >
                            Buy
                        </button>
                    </div>

                    {/* Horizontal Divider - Desktop Only */}
                    <div className="hidden md:block w-px bg-border-light my-2"></div>

                    {/* Location Selection */}
                    <div className="flex-1 px-4 py-2 flex flex-col justify-center gap-1 group/input">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent opacity-70">Location</span>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-primary opacity-40 group-hover/input:opacity-100 transition-opacity" strokeWidth={1.5} />
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Where in Bangkok?"
                                className="w-full bg-transparent text-sm font-medium text-text-primary placeholder:text-text-muted outline-none"
                            />
                        </div>
                    </div>

                    {/* Horizontal Divider - Desktop Only */}
                    <div className="hidden md:block w-px bg-border-light my-2"></div>

                    {/* Price Range Selection */}
                    <div className="flex-1 px-4 py-2 flex flex-col justify-center gap-1 group/input">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent opacity-70">Price Range</span>
                        <div className="flex items-center gap-3">
                            <DollarSign className="w-4 h-4 text-primary opacity-60 group-hover/input:opacity-100 transition-opacity" strokeWidth={1.5} />
                            <select
                                value={`${priceRange.min}-${priceRange.max}`}
                                onChange={(e) => {
                                    const [min, max] = e.target.value.split('-').map(Number);
                                    setPriceRange({ min, max });
                                }}
                                className="w-full bg-transparent text-sm font-semibold text-text-primary outline-none cursor-pointer appearance-none"
                            >
                                {listingType === 'rent' ? (
                                    <>
                                        <option value="0-20000">Under ฿20k/mo</option>
                                        <option value="20000-40000">฿20k - ฿40k/mo</option>
                                        <option value="40000-60000">฿40k - ฿60k/mo</option>
                                        <option value="60000-999999">฿60k+/mo</option>
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
                        </div>
                    </div>

                    {/* Search Action */}
                    <button
                        onClick={handleSearch}
                        className="bg-primary text-white p-4 md:px-8 rounded-2xl font-bold text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-primary-light transition-all shadow-button active:scale-[0.98]"
                    >
                        <Search className="w-4 h-4" strokeWidth={2.5} />
                        <span className="md:hidden lg:inline">Find Property</span>
                        <ArrowRight className="hidden lg:block w-4 h-4 opacity-40 group-hover/search:opacity-100 transition-all group-hover:translate-x-1" />
                    </button>
                </div>
            </div>

            {/* Subtle Trust Line */}
            <div className="flex items-center justify-center gap-10 mt-6 animate-fade-in [animation-delay:800ms]">
                {[
                    { label: 'Properties', value: '200+' },
                    { label: 'Happy Clients', value: '1.2k' },
                    { label: 'Experience', value: '15 Yrs' }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <span className="text-xs font-display italic text-primary">{stat.value}</span>
                        <span className="text-[7px] font-sans font-bold uppercase tracking-[0.3em] text-accent-rich opacity-60 leading-none mt-1">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickSearch;
