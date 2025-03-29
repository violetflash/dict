'use client';

import { Header } from './header';
import { Features } from './features';
import { ProjectGoalsModal } from './project-goals-modal';
import { Hero } from './hero';
import { Description } from './description';
import { CTA } from './cta';
import { Background } from './background';

export function Welcome() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <Background />
      <Header />

      <div className="container mx-auto px-4 relative">
        <main className="pt-24">
          <Hero onLearnMore={scrollToFeatures} />
          <Description />
          <Features />
          <CTA />
        </main>
      </div>

      <ProjectGoalsModal />
    </div>
  );
}
