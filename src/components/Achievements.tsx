import React from 'react';
import { Trophy, Calculator, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={20} />,
  Calculator: <Calculator size={20} />,
};

const colorMap = [
  { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'bg-amber-100 text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  { bg: 'bg-blue-50',  border: 'border-blue-200',  icon: 'bg-blue-100 text-blue-600',   badge: 'bg-blue-100 text-blue-700'   },
  { bg: 'bg-purple-50',border: 'border-purple-200',icon: 'bg-purple-100 text-purple-600',badge: 'bg-purple-100 text-purple-700'},
];

export const Achievements: React.FC = () => {
  const header = useScrollAnimation();
  const list   = useScrollAnimation(0.05);

  return (
    <section id="achievements" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">

      {/* Header */}
      <div ref={header.ref} className={`mb-14 space-y-3 fade-up ${header.visible ? 'visible' : ''}`}>
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">PENCAPAIAN</span>
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
          Penghargaan & Prestasi.
        </h2>
        <p className="text-[#434656] text-base max-w-xl">
          Perjalanan akademik yang konsisten — dari bangku SD hingga SMK.
        </p>
      </div>

      {/* Cards */}
      <div ref={list.ref} className="space-y-5">
        {ACHIEVEMENTS.map((item, i) => {
          const c = colorMap[i % colorMap.length];
          return (
            <div
              key={item.id}
              className={`fade-up delay-${i * 150} ${list.visible ? 'visible' : ''} group flex flex-col sm:flex-row sm:items-center gap-5 bg-white border ${c.border} rounded-2xl p-6 md:p-8 card-hover`}
            >
              {/* Icon */}
              <div className={`shrink-0 w-14 h-14 rounded-2xl ${c.icon} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                {iconMap[item.icon] ?? <Star size={20} />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-sora text-lg md:text-xl font-bold text-[#1a1c1c]">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${c.badge}`}>
                    {item.year}
                  </span>
                </div>
                <p className="text-[#434656] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Right accent line */}
              <div className={`hidden sm:block w-1 self-stretch rounded-full ${c.icon.split(' ')[0]}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
