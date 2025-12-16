import { useEffect } from 'react';
import './App.css';
import { initLenis } from './lib/lenis';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

import {
  Header,
  Hero,
  Marquee,
  Problems,
  Solution,
  HowItWorks,
  Industries,
  Stats,
  Pricing,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from './components/landing';

function App() {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis?.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white noise">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Solution />
        <Stats />
        <HowItWorks />
        <Industries />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
