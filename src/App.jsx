import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer className="py-10 border-t border-white/10 text-white/60 text-sm text-center">
          © {new Date().getFullYear()} Flux Exchange. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
