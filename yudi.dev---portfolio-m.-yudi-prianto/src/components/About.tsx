import React from 'react';
import { User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with layered blue background effect as shown in reference */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Layered Cyan Card Backing */}
            <div className="absolute inset-0 bg-[#e0f2fe] rounded-3xl transform -rotate-3 scale-[1.03] transition-transform hover:rotate-0 duration-300"></div>
            
            {/* Image Container */}
            <div className="relative bg-white p-3 rounded-3xl border border-[#e5e7eb] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                alt="Workspace Yudi - Computer, Mechanical Keyboard and Coffee"
                className="w-full h-[380px] md:h-[420px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
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
          </div>
        </div>
      </div>
    </section>
  );
};
