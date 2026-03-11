import { User } from 'lucide-react';
import type { Agent } from '../types';

interface AgentCardProps {
    agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
    return (
        <div className="group bg-background-card rounded-xl overflow-hidden border border-border-light hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-md">
            {/* Image / Skeleton */}
            <div className="relative h-80 overflow-hidden bg-background-subtle">
                {agent.image ? (
                    <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-text-muted/50 group-hover:bg-background-muted transition-colors duration-500">
                        <User className="w-24 h-24 mb-4 stroke-1" />
                        <span className="text-sm font-medium tracking-widest uppercase">Placeholder</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
                    {agent.name}
                </h3>
                <p className="text-text-secondary text-sm">{agent.title}</p>
            </div>
        </div>
    );
};

export default AgentCard;
