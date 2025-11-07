import React from 'react';
import { ShieldCheck, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The staff are so caring and attentive. Mum feels truly at home.",
    author: "Anna, Daughter of Resident",
  },
  {
    quote: "Beautiful rooms and a warm, friendly atmosphere.",
    author: "Robert, Visitor",
  },
  {
    quote: "Activities are varied and fun – there's always something to do!",
    author: "Elaine, Resident",
  },
];

export default function RightSidebar() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <aside className="hidden lg:block fixed right-6 top-28 z-30 w-80 space-y-4">
      {/* COVID info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl backdrop-blur-xl bg-white/70 border border-white/60 shadow-xl p-5"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="font-semibold text-slate-800">COVID-19 Safety</p>
            <p className="text-slate-600 text-sm">Enhanced cleaning, regular testing, safe visiting guidance.</p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="rounded-2xl backdrop-blur-xl bg-white/70 border border-white/60 shadow-xl p-5"
      >
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-inner">
            <Quote size={20} />
          </div>
          <div>
            <p className="text-slate-700 italic">“{t.quote}”</p>
            <p className="text-slate-500 text-sm mt-2">— {t.author}</p>
          </div>
        </div>
        <div className="mt-3 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-amber-300"
          />
        </div>
      </motion.div>
    </aside>
  );
}
