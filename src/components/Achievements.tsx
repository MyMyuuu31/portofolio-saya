import React from 'react';
import { Trophy, Calculator, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={28} />,
  Calculator: <Calculator size={28} />,
};

const banners = [
  {
    bg: 'bg-[#0052ff]',
    text: 'text-white',
    sub: 'text-blue-200',
    badge: 'bg-white/20 text-white',
    icon: 'bg-white/20 text-white',
    accent: 'bg-white/5',
  },
  {
    bg: 'bg-[#1a1c1c]',
    text: 'text-white',
    sub: 'text-gray-400',
    badge: 'bg-white/10 text-gray-200',
    icon: 'bg-white/10 text-white',
    accent: 'bg-white/5',
  },
  {
    bg: 'bg-[#f0f7ff]',
    text: 'text-[#1a1c1c]',
    sub: 'text-[#434656]',
    badge: 'bg-[#0052ff]/10 text-[#0052ff]',
    icon: 'bg-[#0052ff]/10 text-[#0052ff]',
    accent: 'bg-[#0052ff]/5',
  },
];

export const Achievements: React.FC = () => {
  const header = useScrollAnimation();
  const list = useScrollAnimation(0.05);

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

      {/* Banner List */}
      <div ref={list.ref} className="space-y-4">
        {ACHIEVEMENTS.map((item, i) => {
          const b = banners[i % banners.length];
          return (
            <div
              key={item.id}
              className={`fade-up ${list.visible ? 'visible' : ''} relative overflow-hidden rounded-2xl ${b.bg} px-8 py-7 md:px-12 md:py-9 flex flex-col sm:flex-row sm:items-center gap-6 group card-hover`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Background dekorasi bulat */}
              <div className={`absolute -right-10 -top-10 w-48 h-48 rounded-full ${b.accent} pointer-events-none`} />
              <div className={`absolute -right-4 -bottom-8 w-32 h-32 rounded-full ${b.accent} pointer-events-none`} />

              {/* Nomor urut */}
              <div className="absolute top-4 right-6 font-sora font-extrabold text-6xl md:text-8xl opacity-[0.06] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className={`shrink-0 w-16 h-16 rounded-2xl ${b.icon} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {iconMap[item.icon] ?? <Star size={28} />}
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${b.badge} uppercase tracking-wider`}>
                    {item.year}
                  </span>
                </div>
                <h3 className={`font-sora text-xl md:text-2xl font-extrabold ${b.text} leading-snug mb-2`}>
                  {item.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${b.sub} max-w-2xl`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
