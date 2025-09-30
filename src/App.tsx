import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { TechStack } from './components/TechStack';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Projects />
        <Stats />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
