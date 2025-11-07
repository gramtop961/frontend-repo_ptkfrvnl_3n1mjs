import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Ruler, Trees, Paintbrush, Gamepad2, Music, Fish, Utensils, Wine, User, MapPin, Mail, Phone } from 'lucide-react';

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`rounded-2xl backdrop-blur-xl bg-white/60 border border-white/70 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-[linear-gradient(120deg,#f8fafc_0%,#f1f5f9_100%)]">
      <div className="container mx-auto px-6">
        <GlassCard className="p-8">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800">About Us</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            At St George’s House, retirement is about living life fully. We value individuality and provide attentive staff who care about the small details. We maintain privacy, independence, and dignity while offering as much choice as possible in lifestyle and care. With over 35 years of experience, we pride ourselves on personal, high-quality care. Both long-term and respite residents are welcome.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="h-28 rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 border border-white/60 shadow-inner" />
            <div className="h-28 rounded-xl bg-gradient-to-br from-amber-50 to-rose-50 border border-white/60 shadow-inner" />
            <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-white/60 shadow-inner" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export function RoomsSection() {
  const features = [
    { icon: Bed, title: '16 Bedrooms', desc: '12 with en-suite bathrooms' },
    { icon: Ruler, title: 'Floor Layout', desc: 'Ground & second floor with accessible design' },
    { icon: User, title: 'Twin Rooms', desc: 'Comfortable options for companionship' },
    { icon: Trees, title: 'Secure Storage', desc: 'Locked cupboards for personal belongings' },
  ];
  return (
    <section id="rooms" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6">Rooms & Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <GlassCard key={i} className="p-6 hover:-translate-y-1 hover:shadow-2xl transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <f.icon />
              </div>
              <p className="font-semibold text-slate-800">{f.title}</p>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group relative h-40 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="group relative h-40 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="group relative h-40 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ActivitiesSection() {
  const acts = [
    { icon: Paintbrush, title: 'Arts & Crafts' },
    { icon: Trees, title: 'Gardening' },
    { icon: Gamepad2, title: 'Games' },
    { icon: Music, title: 'Musical Events' },
    { icon: Fish, title: 'Fish & Chip Supper' },
  ];
  return (
    <section id="activities" className="relative py-20 bg-[radial-gradient(60%_60%_at_50%_0%,#eef2ff,transparent_70%)]">
      <div className="container mx-auto px-6">
        <GlassCard className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800">Activities</h2>
              <p className="text-slate-700 mt-2 max-w-2xl">
                Outings, arts & crafts, gardening, games, musical events, buffet parties, and a classic fish & chip supper. We encourage resident suggestions and host meetings every six weeks. Religious services are included and pets are welcome.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {acts.map((a, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className="rounded-xl bg-white/70 border border-white/60 p-4 shadow">
                  <a.icon className="text-emerald-700" />
                  <p className="text-slate-700 text-sm mt-2">{a.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-28 rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 border border-white/60 shadow-inner" />
            <div className="h-28 rounded-xl bg-gradient-to-br from-amber-50 to-rose-50 border border-white/60 shadow-inner" />
            <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-white/60 shadow-inner" />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export function CateringSection() {
  const items = [
    'Homemade meals',
    'Dietary options',
    'Hot lunch',
    'Hot/cold supper',
    'Tea, coffee & cakes',
    'Sherry, mulled wine, Pimms, Bucks Fizz, wine, cava',
  ];
  return (
    <section id="catering" className="relative py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6">Catering & Dietary Needs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <GlassCard key={i} className="p-6 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                  {i === 0 ? <Utensils /> : <Wine />}
                </div>
                <p className="text-slate-700">{it}</p>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-40 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-white/60 shadow-inner" />
          <div className="h-40 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border border-white/60 shadow-inner" />
        </div>
      </div>
    </section>
  );
}

export function StaffSection() {
  const people = [
    { name: 'Sarah King', role: 'Manager', quote: 'Leading with empathy and excellence.', img: '' },
    { name: 'Matthew Lindley', role: 'Provider', quote: 'Committed to personal, high-quality care.', img: '' },
  ];
  return (
    <section id="staff" className="relative py-20 bg-[linear-gradient(180deg,#f8fafc,#fff)]">
      <div className="container mx-auto px-6">
        <GlassCard className="p-8">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800">Our Staff</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {people.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="rounded-2xl bg-white/70 border border-white/60 p-6 shadow">
                <div className="h-40 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50" />
                <p className="mt-4 text-lg font-semibold text-slate-800">{p.name}</p>
                <p className="text-slate-600">{p.role}</p>
                <p className="mt-2 text-slate-700 italic">“{p.quote}”</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-6">
        <GlassCard className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800">Contact / Locate Us</h2>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input className="rounded-xl border border-white/70 bg-white/70 backdrop-blur px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="First name" />
                  <input className="rounded-xl border border-white/70 bg-white/70 backdrop-blur px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Last name" />
                </div>
                <input className="rounded-xl border border-white/70 bg-white/70 backdrop-blur px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Email" type="email" />
                <textarea className="rounded-xl border border-white/70 bg-white/70 backdrop-blur px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-amber-300" rows={4} placeholder="Your message" />
                <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-200 to-yellow-100 text-slate-800 px-6 py-3 font-medium shadow hover:shadow-lg">
                  Send Message
                </button>
              </form>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-700">
                <span className="inline-flex items-center gap-2"><Phone size={18} /> 01884 000000</span>
                <span className="inline-flex items-center gap-2"><Mail size={18} /> info@stgeorgeshouse.co.uk</span>
                <a href="#contact" className="inline-flex items-center gap-2 underline decoration-amber-300 underline-offset-4"><MapPin size={18} /> Tiverton, near the park, seasonal events and canal walks.</a>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="#contact" className="rounded-xl backdrop-blur bg-white/70 border border-white/60 px-4 py-2">Book a Tour</a>
                <a href="mailto:info@stgeorgeshouse.co.uk" className="rounded-xl bg-amber-200/80 px-4 py-2">Email Us</a>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
              <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-700 shadow">
                <MapPin size={16} /> Map placeholder with pins
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
