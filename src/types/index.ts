export interface Property {
    id: string;
    title: string;
    price: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    image: string;
    images?: string[];
    status: 'For Sale' | 'For Rent' | 'New Release';
    description?: string;
    amenities?: string[];
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Agent {
    id: string;
    name: string;
    title: string;
    image?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    image?: string;
    rating: number;
    text: string;
    propertyType: string;
}
