import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bed, Paintbrush, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const IconBadge = ({ Icon, label }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.04 }}
    className="flex items-center gap-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white px-3 py-1 shadow-lg"
  >
    <Icon size={16} />
    <span className="text-xs font-medium tracking-wide">{label}</span>
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[640px] w-full overflow-hidden">
      {/* Animated 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      {/* Floating pastel bubbles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-gradient-to-br from-sky-200/30 to-emerald-200/20 blur-2xl animate-float-slow" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-gradient-to-br from-amber-200/30 to-rose-200/20 blur-2xl animate-float-slower" />
        <div className="absolute left-1/3 top-10 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-200/30 to-sky-200/20 blur-xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl rounded-2xl backdrop-blur-xl bg-white/15 border border-white/25 p-8 md:p-10 shadow-2xl"
          >
            <p className="text-sm tracking-widest text-white/80 mb-2">St George’s House Residential Care Home</p>
            <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              A Home with Heart – St George’s House
            </h1>
            <p className="mt-4 text-white/90 md:text-lg">
              Warm, dignified living with attentive, personal care in a calm, premium setting.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <IconBadge Icon={Bed} label="Rooms & Facilities" />
              <IconBadge Icon={Paintbrush} label="Activities" />
              <IconBadge Icon={Utensils} label="Catering" />
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a
                href="#rooms"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-xl backdrop-blur-xl bg-white/20 border border-white/30 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="relative z-10">Explore Rooms & Facilities</span>
                <span className="block h-px w-0 group-hover:w-full transition-all duration-300 bg-white/80 mt-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gradient-to-r from-amber-200/70 to-yellow-100/60 text-slate-800 px-6 py-3 font-medium shadow-[0_10px_30px_-10px_rgba(250,204,21,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(250,204,21,0.7)] backdrop-blur-xl border border-white/40"
              >
                Book a Tour
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Local keyframes for floating
const styles = `
@keyframes float { 0%, 100% { transform: translateY(0px) } 50% { transform: translateY(-8px) } }
@keyframes float-slow { 0%, 100% { transform: translateY(0px) } 50% { transform: translateY(-14px) } }
@keyframes float-slower { 0%, 100% { transform: translateY(0px) } 50% { transform: translateY(-20px) } }
.animate-float { animation: float 8s ease-in-out infinite }
.animate-float-slow { animation: float-slow 12s ease-in-out infinite }
.animate-float-slower { animation: float-slower 16s ease-in-out infinite }
`;

if (typeof document !== 'undefined' && !document.getElementById('hero-float-styles')) {
  const style = document.createElement('style');
  style.id = 'hero-float-styles';
  style.innerHTML = styles;
  document.head.appendChild(style);
}
