import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[64vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-md">Welcome to St George’s House</h1>
          <p className="mt-4 text-white/80 text-lg">Warm, modern care in a homely setting—comfort, dignity, and joyful living.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 transition shadow">
              Book a tour
            </a>
            <a href="#about" className="px-5 py-2.5 rounded-xl bg-white/20 text-white hover:bg-white/30 border border-white/30 transition">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
