import { features } from '../data/mockData';
import { FeatureCard } from './FeatureCard';
import { Zap } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Electron + React
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features that make desktop application development seamless and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
