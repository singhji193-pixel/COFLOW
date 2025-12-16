import { useEffect } from 'react';
import './App.css';
import { initLenis } from './lib/lenis';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';

import {
  Header,
  Hero,
  Problems,
  Solution,
  HowItWorks,
  Industries,
  Ecosystem,
  Pricing,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from './components/landing';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = initLenis();
    
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <HowItWorks />
        <Industries />
        <Ecosystem />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
