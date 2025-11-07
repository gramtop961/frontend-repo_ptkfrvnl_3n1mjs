import React, { useState } from 'react';
import NavbarTabs from './components/NavbarTabs';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import HeroCover from './components/HeroCover';

function PageShell({ children }) {
  return (
    <div className="relative min-h-screen bg-[#0b0b10] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,0,92,0.20),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,140,0,0.18),transparent_55%)]" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <main id="about" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-white/70 mt-3">We provide a warm, safe, and independent environment where residents feel valued and cared for. Our home embraces family, dignity, and meaningful daily routines.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1400&auto=format&fit=crop" alt="Lounge" className="w-full h-56 object-cover" />
            <div className="p-4">Bright lounge with comfy seating and activities.</div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" alt="Garden" className="w-full h-56 object-cover" />
            <div className="p-4">Sunny garden with accessible paths and a summer house.</div>
          </div>
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}

function RoomsPage() {
  return (
    <main id="rooms" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Rooms & Facilities</h2>
          <p className="text-white/70 mt-3">Comfortable bedrooms with en-suite options, accessible bathrooms, and homely shared spaces for dining and relaxation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Bedroom','En-suite','Lounge'].map((label, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={`https://source.unsplash.com/collection/1137003/400x30${idx}`} alt={label} className="w-full h-40 object-cover" />
              <div className="p-4">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}

function ActivitiesPage() {
  return (
    <main id="activities" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Activities</h2>
          <p className="text-white/70 mt-3">Outings, arts & crafts, gardening, quizzes and games, live music, themed buffets and more—designed to engage and bring joy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {['Arts & Crafts','Gardening','Music'].map((label, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={`https://source.unsplash.com/collection/190727/400x30${idx}`} alt={label} className="w-full h-40 object-cover" />
              <div className="p-4">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}

function CateringPage() {
  return (
    <main id="catering" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Catering & Dietary Needs</h2>
          <p className="text-white/70 mt-3">Homemade meals, flexible dietary options, daily tea and cake, and seasonal treats for celebrations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {['Homemade Meals','Dietary Options','Tea & Cakes','Celebration Drinks'].map((label, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={`https://source.unsplash.com/collection/1424340/600x40${idx}`} alt={label} className="w-full h-44 object-cover" />
              <div className="p-4">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}

function StaffPage() {
  return (
    <main id="staff" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-white/70 mt-3">Led by a committed registered manager and an experienced provider, our team is compassionate, qualified, and dedicated to person‑centred care.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[{name:'Sarah King', role:'Manager'}, {name:'Matthew Lindley', role:'Provider'}].map((p, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={`https://source.unsplash.com/collection/888146/600x40${idx}`} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="font-medium">{p.name}</p>
                <p className="text-white/70 text-sm">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}

function ContactPage() {
  return (
    <main id="contact" className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-6">
        <div className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Contact / Locate Us</h2>
          <p className="text-white/70 mt-3">Call 01234 567890 • Email info@stgeorgeshouse.co.uk • Book a visit anytime.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl space-y-4">
            <input className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 placeholder-white/50" placeholder="Your name" />
            <input className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 placeholder-white/50" placeholder="Email" />
            <textarea className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 placeholder-white/50" rows="4" placeholder="Message" />
            <button className="px-4 py-2.5 rounded-lg bg-white text-black hover:bg-white/90">Send</button>
          </form>
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop" alt="Map" className="w-full h-64 object-cover" />
            <div className="p-4">123 Care Lane, Townsville, TS1 2AB</div>
          </div>
        </div>
      </div>
      <RightSidebar />
    </main>
  );
}

export default function App() {
  const [active, setActive] = useState('home');

  return (
    <PageShell>
      <NavbarTabs activeTab={active} onChange={setActive} />
      {active === 'home' && <HeroCover />}
      {active === 'about' && <AboutPage />}
      {active === 'rooms' && <RoomsPage />}
      {active === 'activities' && <ActivitiesPage />}
      {active === 'catering' && <CateringPage />}
      {active === 'staff' && <StaffPage />}
      {active === 'contact' && <ContactPage />}
      <Footer />
    </PageShell>
  );
}
