"use client";

import { AboutSection } from '@/components/component/about-section';
import { HeroSection } from '@/components/component/hero-section';
import Preloader from '@/components/component/preloader';
import { Projects } from '@/components/component/projects';
import { ServicesSection } from '@/components/component/services-section';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 5400); // 5.2 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main >
      <HeroSection />
      <ServicesSection />
      <Projects />
      <AboutSection />
    </main>
  );
}
