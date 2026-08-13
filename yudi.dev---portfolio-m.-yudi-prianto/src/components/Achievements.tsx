import React from 'react';
import { Trophy, Calculator } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">
          PENCAPAIAN
        </span>
        <h2 
          id="achievements-title"
          className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight"
        >
          Penghargaan & Sertifikasi.
        </h2>
      </div>

      {/* Grid of 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-[#e5e7eb] rounded-3xl p-8 shadow-xs hover:border-[#38bdf8]/40 transition-all duration-300 flex items-start gap-5"
          >
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
              {item.icon === 'Trophy' ? (
                <Trophy size={24} />
              ) : (
                <Calculator size={24} />
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">
                  {item.title}
                </h3>
              </div>
              <span className="text-[#0052ff] font-mono text-xs font-bold block">
                {item.year}
              </span>
              <p className="text-[#434656] text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
