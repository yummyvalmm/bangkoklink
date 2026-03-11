import { TrendingUp, Home as HomeIcon, Settings } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

const iconMap = {
    TrendingUp: TrendingUp,
    Home: HomeIcon,
    Settings: Settings,
};

const ServiceCard = ({ service }: ServiceCardProps) => {
    const Icon = iconMap[service.icon as keyof typeof iconMap];

    return (
        <div className="group bg-background-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-4 text-text-primary">
                {service.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
                {service.description}
            </p>
        </div>
    );
};

export default ServiceCard;
