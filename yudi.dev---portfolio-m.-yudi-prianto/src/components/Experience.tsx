import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  onViewDetails?: (id: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onViewDetails }) => {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 space-y-3">
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">
          JEJAK KARIR
        </span>
        <h2 
          id="experience-title"
          className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight"
        >
          Pengalaman Profesional.
        </h2>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-[#38bdf8]/40 space-y-8">
        {/* Active Dot */}
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#38bdf8] shadow-xs" />

        {EXPERIENCES.map((exp) => (
          <div 
            key={exp.id}
            className="bg-white border border-[#e5e7eb] rounded-3xl p-6 md:p-10 shadow-xs hover:border-[#38bdf8]/40 transition-all duration-300"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="font-sora text-xl md:text-2xl font-bold text-[#1a1c1c]">
                  {exp.role}
                </h3>
                <p className="text-[#0052ff] font-semibold text-sm md:text-base mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="self-start sm:self-center">
                <span className="bg-[#e0f2fe] text-[#0284c7] font-semibold text-xs px-4 py-1.5 rounded-full border border-[#bae6fd] inline-block">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bullet description */}
            <ul className="space-y-2 mb-6 text-[#434656] text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#0052ff] font-bold select-none">•</span>
                <span>{exp.description}</span>
              </li>
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-[#f0f7ff] hover:bg-[#e0edff] text-[#0052ff] font-medium text-xs px-3.5 py-1.5 rounded-xl border border-[#d0e3ff] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
