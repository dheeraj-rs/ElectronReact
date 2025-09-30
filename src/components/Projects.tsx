import { projects } from '../data/mockData';
import { ProjectCard } from './ProjectCard';
import { Boxes } from 'lucide-react';

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Boxes className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of production-ready desktop applications built with Electron and React
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">More Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
