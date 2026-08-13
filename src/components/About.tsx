import React from 'react';
import { User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Foto Profil */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Dekorasi background */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#0052ff]/10 rounded-3xl rotate-3"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#38bdf8]/15 rounded-3xl -rotate-2"></div>

            {/* Frame foto */}
            <div className="relative bg-white p-3 rounded-3xl border-2 border-[#e5e7eb] shadow-lg z-10">
              <img
                src={PERSONAL_INFO.profilePhoto}
                alt="Foto Profil M. Yudi Prianto"
                className="w-full h-[400px] object-cover object-top rounded-2xl"
                loading="lazy"
              />
              {/* Badge nama di bawah foto */}
              <div className="mt-3 px-4 py-2.5 bg-[#f0f7ff] rounded-2xl border border-[#e0edff] text-center">
                <p className="font-sora font-bold text-[#1a1c1c] text-sm">{PERSONAL_INFO.fullName}</p>
                <p className="text-[#0052ff] text-xs font-medium mt-0.5">{PERSONAL_INFO.role} · {PERSONAL_INFO.school}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f7ff] text-[#0052ff] font-semibold text-xs tracking-wider uppercase border border-[#e0edff]">
            <User size={14} className="text-[#0052ff]" />
            <span>TENTANG SAYA</span>
          </div>

          {/* Heading */}
          <h2
            id="about-title"
            className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight"
          >
            {PERSONAL_INFO.aboutHeadline}
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-[#434656] text-base md:text-lg leading-relaxed">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Facts Pills */}
          <div className="pt-4 flex flex-wrap gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-gray-100 text-[#1a1c1c] font-mono text-xs border border-gray-200">
              📍 Bintan Timur, Kep. Riau
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-gray-100 text-[#1a1c1c] font-mono text-xs border border-gray-200">
              🎓 RPL @ SMKN 1 Bintan Timur
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-gray-100 text-[#1a1c1c] font-mono text-xs border border-gray-200">
              🎂 31 Maret 2008 (18 Tahun)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#f0f7ff] text-[#0052ff] font-mono text-xs border border-[#e0edff]">
              🌱 Still Learning & Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
