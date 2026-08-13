import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onProjectsClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-4xl">
        <div 
          id="hero-card"
          className="bg-white border border-[#e5e7eb] rounded-3xl p-8 md:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f0f7ff] text-[#0052ff] font-mono text-xs font-semibold mb-6 border border-[#e0edff]">
            <span>&lt;Hello World /&gt;</span>
          </div>

          {/* Headline */}
          <h1 
            id="hero-title"
            className="font-sora text-4xl md:text-6xl font-extrabold text-[#1a1c1c] tracking-tight leading-[1.15] mb-2"
          >
            {PERSONAL_INFO.title}
          </h1>
          <p className="font-sora text-lg md:text-2xl font-semibold text-[#0052ff] mb-5 tracking-tight">
            {PERSONAL_INFO.fullName}
          </p>

          {/* Subtitle */}
          <p 
            id="hero-subtitle"
            className="text-[#434656] text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
          >
            {PERSONAL_INFO.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              id="hero-btn-experience"
              href="#experience"
              onClick={onProjectsClick}
              className="bg-[#38bdf8] hover:bg-[#0284c7] text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 cursor-pointer"
            >
              Lihat Pengalaman <ArrowRight size={16} />
            </a>

            <a
              id="hero-btn-about"
              href="#about"
              className="bg-white hover:bg-gray-50 border border-[#e5e7eb] text-[#1a1c1c] font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center text-center cursor-pointer min-w-[130px]"
            >
              Tentang Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
