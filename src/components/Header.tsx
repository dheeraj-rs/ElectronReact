import { Code2, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ElectronReact</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#tech-stack" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Tech Stack
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
