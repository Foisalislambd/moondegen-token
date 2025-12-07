import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { HowToBuy } from './components/HowToBuy';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-space text-white font-sans selection:bg-neon-green selection:text-black">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;