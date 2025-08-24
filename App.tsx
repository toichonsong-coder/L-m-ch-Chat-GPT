
import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ExpertSection from './components/ExpertSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f172a] text-[#F1F1F1] overflow-x-hidden">
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ExpertSection />
        <BonusSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;