import { ArrowRight, Download, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Cross-Platform Desktop Applications
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Build Desktop Apps
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              With Electron & React
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create powerful, native desktop applications that run on Windows, macOS, and Linux.
            Combine the flexibility of web technologies with the power of native APIs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all">
              <Download className="w-5 h-5" />
              Get Started
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Platforms</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Cross-Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
