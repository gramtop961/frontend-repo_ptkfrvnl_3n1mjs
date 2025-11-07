import React from 'react';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl backdrop-blur-xl bg-white/70 border border-white/60 shadow-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-slate-900 text-amber-300 grid place-items-center font-bold">CQC</div>
            <div>
              <p className="text-slate-800 font-semibold">Overall Rating: Outstanding</p>
              <div className="flex items-center gap-2 text-amber-500">
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
              </div>
              <p className="text-slate-600 text-sm mt-1">Safe • Effective • Caring • Responsive • Well-led</p>
            </div>
          </div>
          <a href="#" className="underline decoration-amber-300 underline-offset-4 hover:text-amber-700">See the report</a>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} St George’s House Residential Care Home</p>
        </div>
      </div>
    </footer>
  );
}
