import React from 'react';
import HeroSlider from '../components/HeroSlider';
import NewsMarquee from '../components/NewsMarquee';
import ProgramFinder from '../components/ProgramFinder';
import StatsSection from '../components/StatsSection';
import BentoGrid from '../components/BentoGrid';

export default function Home() {
  return (
    <main>
      {/* Hero Fading Carousel */}
      <HeroSlider />
      
      {/* Scrolling News updates */}
      <NewsMarquee />
      
      {/* Interactive Program search / finder */}
      <ProgramFinder />
      
      {/* Animated stats count */}
      <StatsSection />
      
      {/* Bento Grid tiles */}
      <BentoGrid />
    </main>
  );
}
