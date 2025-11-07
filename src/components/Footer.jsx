import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-lg bg-gradient-to-br from-rose-400 to-orange-400" />
            <div>
              <p className="text-white font-medium">Care Quality Commission (CQC)</p>
              <p className="text-white/70 text-sm">Overall rating: Good • Safe • Caring • Effective • Well-led</p>
            </div>
          </div>
          <a
            href="#"
            className="px-4 py-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition"
          >
            See the report
          </a>
        </div>
        <p className="text-center text-white/60 text-sm mt-6">© {new Date().getFullYear()} St George’s House Residential Care Home</p>
      </div>
    </footer>
  );
}
