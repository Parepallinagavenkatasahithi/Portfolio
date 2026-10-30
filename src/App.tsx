import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory-100 text-ink-900 selection:bg-earth-500 selection:text-white flex flex-col font-sans">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <CertificationsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
