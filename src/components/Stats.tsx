import { TrendingUp, Users, Award, Rocket } from 'lucide-react';

const stats = [
  {
    id: '1',
    icon: TrendingUp,
    value: '500K+',
    label: 'Active Users',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2',
    icon: Rocket,
    value: '50+',
    label: 'Apps Deployed',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    id: '3',
    icon: Award,
    value: '99.9%',
    label: 'Uptime',
    color: 'from-teal-500 to-green-500'
  },
  {
    id: '4',
    icon: Users,
    value: '50+',
    label: 'Enterprise Clients',
    color: 'from-green-500 to-emerald-500'
  }
];

export function Stats() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
