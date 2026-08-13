import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onProjectsClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation setelah mount
    const t = setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => { clearTimeout(t); window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 flex justify-center overflow-hidden">
        <div className="w-full max-w-4xl">
          <div className={`bg-white border border-[#e5e7eb] rounded-3xl p-8 md:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

              {/* Foto Profil */}
              <div className={`shrink-0 flex flex-col items-center gap-3 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="relative pulse-ring">
                  <div className="absolute inset-0 rounded-full bg-[#0052ff]/15 scale-110 blur-lg animate-float" />
                  <img
                    src={PERSONAL_INFO.profilePhoto}
                    alt="M. Yudi Prianto"
                    className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover object-top border-4 border-white shadow-xl"
                  />
                  <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full" />
                </div>
                <span className="font-mono text-[10px] text-[#737688] bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                  @myuu_d1
                </span>
              </div>

              {/* Teks */}
              <div className="flex-1 text-center md:text-left">
                {/* Tag */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f0f7ff] text-[#0052ff] font-mono text-xs font-semibold mb-4 border border-[#e0edff] transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  &lt;Hello World /&gt;
                </div>

                {/* Headline */}
                <h1 className={`font-sora text-4xl md:text-6xl font-extrabold text-[#1a1c1c] tracking-tight leading-[1.15] mb-2 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {PERSONAL_INFO.title}
                </h1>

                <p className={`font-sora text-lg md:text-2xl font-semibold gradient-text mb-4 tracking-tight transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {PERSONAL_INFO.fullName}
                </p>

                {/* Subtitle */}
                <p className={`text-[#434656] text-base md:text-lg leading-relaxed max-w-2xl mb-8 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Software Engineering Student @ SMKN 1 Bintan Timur. Masih belajar, tapi semangat tidak pernah berhenti.
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-wrap items-center justify-center md:justify-start gap-4 transition-all duration-700 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <a
                    href="#experience"
                    onClick={onProjectsClick}
                    className="bg-[#0052ff] hover:bg-[#003ec7] text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-2"
                  >
                    Lihat Pengalaman <ArrowRight size={16} />
                  </a>
                  <a
                    href="#about"
                    className="bg-white hover:bg-gray-50 border border-[#e5e7eb] text-[#1a1c1c] font-medium text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-2"
                  >
                    Tentang Saya
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`flex justify-center mt-10 transition-all duration-700 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#about" className="flex flex-col items-center gap-1 text-[#737688] hover:text-[#0052ff] transition-colors group">
              <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
