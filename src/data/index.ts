import type { Property, Service, Agent, Testimonial } from '../types';

export const properties: Property[] = [
    {
        id: '1',
        title: 'Billionaire Mansion',
        price: '$125,000,000',
        location: 'Beverly Hills, CA',
        bedrooms: 6,
        bathrooms: 7,
        sqft: 12500,
        image: '/properties/mansion-1.jpg',
        images: [
            '/properties/mansion-1.jpg',
            '/properties/mansion-2.jpg',
            '/properties/mansion-3.jpg',
        ],
        status: 'For Sale',
        description: 'Experience unparalleled luxury in this stunning architectural masterpiece. This extraordinary estate features floor-to-ceiling windows, designer finishes, and breathtaking views. With its infinity pool, modern design, and premium amenities, this property represents the pinnacle of sophisticated living.',
        amenities: ['WiFi', 'Parking', 'Pool', 'Security', 'Gym', 'Garden', 'Smart Home', 'Theater'],
    },
    {
        id: '2',
        title: 'Modern Urban Residence',
        price: '$8,500,000',
        location: 'Manhattan, NY',
        bedrooms: 4,
        bathrooms: 5,
        sqft: 5200,
        image: '/properties/urban-1.jpg',
        status: 'New Release',
    },
    {
        id: '3',
        title: 'Eco Green Villa',
        price: '$4,200,000',
        location: 'Austin, TX',
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4800,
        image: '/properties/eco-1.jpg',
        status: 'For Sale',
    },
    {
        id: '4',
        title: 'Lakeside Contemporary',
        price: '$6,750,000',
        location: 'Seattle, WA',
        bedrooms: 4,
        bathrooms: 4,
        sqft: 5500,
        image: '/properties/lakeside-1.jpg',
        status: 'For Sale',
    },
    {
        id: '5',
        title: 'Desert Oasis Estate',
        price: '$9,200,000',
        location: 'Scottsdale, AZ',
        bedrooms: 5,
        bathrooms: 6,
        sqft: 7200,
        image: '/properties/desert-1.jpg',
        status: 'For Rent',
    },
    {
        id: '6',
        title: 'Coastal Paradise',
        price: '$15,500,000',
        location: 'Malibu, CA',
        bedrooms: 6,
        bathrooms: 7,
        sqft: 8900,
        image: '/properties/coastal-1.jpg',
        status: 'For Sale',
    },
];

export const services: Service[] = [
    {
        id: '1',
        title: 'Investment Consulting',
        description: 'Expert guidance to maximize your real estate investment returns with strategic market insights.',
        icon: 'TrendingUp',
    },
    {
        id: '2',
        title: 'Property Valuation',
        description: 'Accurate and comprehensive property assessments to ensure fair market pricing.',
        icon: 'Home',
    },
    {
        id: '3',
        title: 'Property Management',
        description: 'Full-service management solutions to maintain and optimize your property portfolio.',
        icon: 'Settings',
    },
];

export const agents: Agent[] = [
    {
        id: '1',
        name: 'Real Estate Agent 1',
        title: 'Senior Real Estate Agent',
    },
    {
        id: '2',
        name: 'Real Estate Agent 2',
        title: 'Luxury Property Specialist',
    },
    {
        id: '3',
        name: 'Real Estate Agent 3',
        title: 'Investment Advisor',
    },
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Client A',
        role: 'Buyer',
        rating: 5,
        text: 'Bangkok Link made buying my first condo incredibly smooth. Their team was professional, knowledgeable, and always available to answer my questions. I found my dream home in just 3 weeks!',
        propertyType: '2BR Condo in Manhattan',
    },
    {
        id: '2',
        name: 'Client B',
        role: 'Renter',
        rating: 5,
        text: 'The virtual tour feature saved me so much time. I was relocating from another state and was able to view multiple properties online before scheduling in-person visits. Highly recommend!',
        propertyType: '1BR Luxury Apartment',
    },
    {
        id: '3',
        name: 'Client C',
        role: 'Buyer',
        rating: 5,
        text: 'Outstanding service from start to finish. The mortgage calculator helped me understand my budget, and my agent was fantastic throughout the entire purchase process.',
        propertyType: '3BR Penthouse Suite',
    },
];
