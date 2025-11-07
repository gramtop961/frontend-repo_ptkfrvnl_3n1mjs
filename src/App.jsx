import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import Footer from './components/Footer.jsx';
import { AboutSection, RoomsSection, ActivitiesSection, CateringSection, StaffSection, ContactSection } from './components/Sections.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(120%_120%_at_50%_-10%,#e6eef4,transparent_60%)] text-slate-800">
      {/* Sticky right sidebar */}
      <RightSidebar />

      {/* Hero */}
      <HeroSection />

      {/* Main sections */}
      <AboutSection />
      <RoomsSection />
      <ActivitiesSection />
      <CateringSection />
      <StaffSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
