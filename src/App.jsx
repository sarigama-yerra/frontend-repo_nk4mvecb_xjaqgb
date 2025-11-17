import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Markets from './components/Markets';
import Features from './components/Features';
import Security from './components/Security';
import Fees from './components/Fees';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AnchorProvider from './components/AnchorProvider';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <AnchorProvider>
        <Navbar />
        <main>
          <Hero />
          <Markets />
          <Features />
          <Security />
          <Fees />
          <CTA />
          <Footer />
        </main>
      </AnchorProvider>
    </div>
  );
}

export default App;
