import React from 'react';
import { Gamepad2, BookOpen } from 'lucide-react';
import { HOBBIES } from '../data/portfolioData';

export const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 space-y-3">
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">
          DI LUAR KODE
        </span>
        <h2 
          id="hobbies-title"
          className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight"
        >
          Minat & Hobi.
        </h2>
      </div>

      {/* Grid of 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HOBBIES.map((hobby) => (
          <div 
            key={hobby.id}
            className="bg-white border border-[#e5e7eb] rounded-3xl p-8 shadow-xs hover:border-[#38bdf8]/40 transition-all duration-300 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center">
                {hobby.icon === 'Gamepad2' ? (
                  <Gamepad2 size={22} />
                ) : (
                  <BookOpen size={22} />
                )}
              </div>
              <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">
                {hobby.title}
              </h3>
            </div>

            <p className="text-[#434656] text-sm md:text-base leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
