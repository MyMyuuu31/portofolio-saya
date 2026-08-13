import React from 'react';
import { Trophy, Calculator } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Achievements: React.FC = () => {
  const header = useScrollAnimation();
  const grid = useScrollAnimation(0.1);

  return (
    <section id="achievements" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div ref={header.ref} className={`text-center max-w-xl mx-auto mb-16 space-y-3 fade-up ${header.visible ? 'visible' : ''}`}>
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">PENCAPAIAN</span>
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
          Penghargaan & Prestasi.
        </h2>
      </div>

      <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, i) => (
          <div
            key={item.id}
            className={`bg-white border border-[#e5e7eb] rounded-3xl p-8 card-hover fade-up delay-${i * 200} ${grid.visible ? 'visible' : ''} flex items-start gap-5`}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
              {item.icon === 'Trophy' ? <Trophy size={24} /> : <Calculator size={24} />}
            </div>
            <div className="space-y-2">
              <h3 className="font-sora text-lg font-bold text-[#1a1c1c] leading-snug">{item.title}</h3>
              <span className="text-[#0052ff] font-mono text-xs font-bold block">{item.year}</span>
              <p className="text-[#434656] text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
