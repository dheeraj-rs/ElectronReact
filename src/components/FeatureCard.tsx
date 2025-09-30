import * as Icons from 'lucide-react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="space-y-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          {Icon && <Icon className="w-7 h-7 text-white" />}
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {feature.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
