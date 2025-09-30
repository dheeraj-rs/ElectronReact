import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Your Desktop App?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Get started with modern desktop application development. We'll help you build fast, secure, and cross-platform applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
              <MessageSquare className="w-5 h-5" />
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white/10 transition-all">
              <Mail className="w-5 h-5" />
              Contact Us
            </button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </div>
            <div>Response within 24 hours</div>
          </div>
        </div>
      </div>
    </section>
  );
}
