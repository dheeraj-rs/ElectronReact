import { Code2, Cpu, Layers2, Package } from 'lucide-react';

const techCategories = [
  {
    id: '1',
    title: 'Frontend Framework',
    icon: Code2,
    technologies: [
      { name: 'React 18', description: 'Modern UI library with hooks and concurrent features' },
      { name: 'TypeScript', description: 'Type-safe development experience' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' }
    ]
  },
  {
    id: '2',
    title: 'Desktop Framework',
    icon: Cpu,
    technologies: [
      { name: 'Electron', description: 'Build cross-platform desktop apps with web tech' },
      { name: 'Node.js', description: 'Access to native APIs and system resources' },
      { name: 'Chromium', description: 'Modern web rendering engine' }
    ]
  },
  {
    id: '3',
    title: 'State & Data',
    icon: Layers2,
    technologies: [
      { name: 'IndexedDB', description: 'Client-side storage for offline support' },
      { name: 'SQLite', description: 'Embedded database for complex data' },
      { name: 'React Query', description: 'Powerful data synchronization' }
    ]
  },
  {
    id: '4',
    title: 'Build & Deploy',
    icon: Package,
    technologies: [
      { name: 'Electron Builder', description: 'Package and distribute applications' },
      { name: 'Vite', description: 'Lightning-fast build tooling' },
      { name: 'Auto Updater', description: 'Seamless application updates' }
    ]
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
            <Layers2 className="w-4 h-4" />
            Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Modern Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Built with the latest and most reliable technologies for desktop development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map(category => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-white mb-1">{tech.name}</div>
                        <div className="text-sm text-gray-400">{tech.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">100+</div>
              <div className="text-sm text-gray-400">Libraries Available</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">3</div>
              <div className="text-sm text-gray-400">Platforms Supported</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">Native</div>
              <div className="text-sm text-gray-400">API Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
