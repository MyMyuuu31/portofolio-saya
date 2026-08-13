import React from 'react';
import { User, MapPin, GraduationCap, Calendar, Sprout } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About: React.FC = () => {
  const left = useScrollAnimation();
  const right = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left: Foto */}
        <div ref={left.ref} className={`lg:col-span-5 relative flex justify-center fade-up ${left.visible ? 'visible' : ''}`}>
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#0052ff]/10 rounded-3xl rotate-3 transition-transform duration-500 hover:rotate-1" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#38bdf8]/15 rounded-3xl -rotate-2 transition-transform duration-500 hover:rotate-0" />
            <div className="relative bg-white p-3 rounded-3xl border-2 border-[#e5e7eb] shadow-lg z-10 card-hover">
              <img
                src={PERSONAL_INFO.aboutPhoto}
                alt="M. Yudi Prianto"
                className="w-full h-[400px] object-cover object-top rounded-2xl"
                loading="lazy"
              />
              <div className="mt-3 px-4 py-2.5 bg-[#f0f7ff] rounded-2xl border border-[#e0edff] text-center">
                <p className="font-sora font-bold text-[#1a1c1c] text-sm">{PERSONAL_INFO.fullName}</p>
                <p className="text-[#0052ff] text-xs font-medium mt-0.5">{PERSONAL_INFO.role} · {PERSONAL_INFO.school}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div ref={right.ref} className={`lg:col-span-7 space-y-6 fade-up delay-200 ${right.visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f7ff] text-[#0052ff] font-semibold text-xs tracking-wider uppercase border border-[#e0edff]">
            <User size={14} /> TENTANG SAYA
          </div>

          <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
            {PERSONAL_INFO.aboutHeadline}
          </h2>

          <div className="space-y-4 text-[#434656] text-base md:text-lg leading-relaxed">
            {PERSONAL_INFO.aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="pt-4 grid grid-cols-2 gap-3">
            {[
              { icon: <MapPin size={13} />, text: 'Bintan Timur, Kep. Riau' },
              { icon: <GraduationCap size={13} />, text: 'RPL @ SMKN 1 Bintan Timur' },
              { icon: <Calendar size={13} />, text: '31 Maret 2008 · 18 Tahun' },
              { icon: <Sprout size={13} />, text: 'Still Learning & Growing' },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1c1c] text-xs font-medium transition-all duration-300 hover:border-[#0052ff] hover:bg-[#f0f7ff] hover:text-[#0052ff] fade-up delay-${(i + 2) * 100} ${right.visible ? 'visible' : ''}`}
              >
                <span className="text-[#0052ff]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
