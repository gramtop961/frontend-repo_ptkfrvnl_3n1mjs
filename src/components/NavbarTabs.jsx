import React from 'react';
import { Home, Info, Bed, Utensils, Users, Phone, MapPin } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Us', icon: Info },
  { id: 'rooms', label: 'Rooms & Facilities', icon: Bed },
  { id: 'activities', label: 'Activities', icon: Users },
  { id: 'catering', label: 'Catering & Dietary', icon: Utensils },
  { id: 'staff', label: 'Staff', icon: Users },
  { id: 'contact', label: 'Contact / Locate Us', icon: MapPin },
];

export default function NavbarTabs({ activeTab, onChange }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/10 border-b border-white/15">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 shadow-lg"></div>
          <div className="text-white/90">
            <p className="text-sm leading-none">St George’s House</p>
            <p className="text-xs text-white/60 leading-none mt-1">Residential Care Home</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`group inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all border ${
                activeTab === id
                  ? 'bg-white/20 border-white/30 text-white shadow-inner'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="size-4" />
              <span className="text-sm whitespace-nowrap">{label}</span>
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <select
            value={activeTab}
            onChange={(e) => onChange(e.target.value)}
            className="bg-white/10 text-white/90 border border-white/20 rounded-lg px-3 py-2"
          >
            {tabs.map(({ id, label }) => (
              <option key={id} value={id} className="text-black">{label}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
