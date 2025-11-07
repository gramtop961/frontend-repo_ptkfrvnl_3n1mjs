import React, { useEffect, useState } from 'react';
import { ShieldCheck, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The staff are incredibly kind and attentive. My mum has never been happier. – Emma W.',
  },
  {
    quote:
      'Warm, homely atmosphere with wonderful activities every week. – David R.',
  },
  { quote: 'Beautiful gardens and delicious homemade meals. – Priya S.' },
];

export default function RightSidebar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start w-full max-w-sm">
      <div className="space-y-6">
        <div className="rounded-2xl p-5 bg-white/10 border border-white/15 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-emerald-300" />
            <h3 className="text-white font-medium">COVID-19 Safety</h3>
          </div>
          <p className="text-white/70 text-sm mt-2">
            We follow enhanced cleaning, ventilation, and testing to keep residents and visitors safe.
          </p>
        </div>

        <div className="rounded-2xl p-5 bg-white/10 border border-white/15 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-3">
            <Quote className="size-5 text-rose-300" />
            <h3 className="text-white font-medium">What families say</h3>
          </div>
          <p className="text-white/80 mt-3 transition-all min-h-[64px]">
            {testimonials[index].quote}
          </p>
          <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              key={index}
              className="h-full bg-gradient-to-r from-rose-400 to-orange-400 rounded-full animate-[grow_4s_linear_1]"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes grow { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>
    </aside>
  );
}
