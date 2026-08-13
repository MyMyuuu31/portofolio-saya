import React from 'react';
import { Code2, Database, Wrench, GitFork, Code, Figma, LayoutGrid } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">
          KEAHLIAN
        </span>
        <h2 
          id="skills-title"
          className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight"
        >
          Technical Arsenal.
        </h2>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Frontend */}
        <div className="bg-white border border-[#e5e7eb] rounded-3xl p-7 shadow-xs hover:border-[#38bdf8]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
              <Code2 size={22} />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Frontend</h3>
          </div>

          <div className="space-y-5">
            {SKILL_CATEGORIES[0].skills?.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-[#1a1c1c]">{skill.name}</span>
                  <span className="text-[#38bdf8] font-mono text-xs font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#38bdf8] h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Backend */}
        <div className="bg-white border border-[#e5e7eb] rounded-3xl p-7 shadow-xs hover:border-[#38bdf8]/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
              <Database size={22} />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Backend</h3>
          </div>

          <div className="space-y-5">
            {SKILL_CATEGORIES[1].skills?.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-[#1a1c1c]">{skill.name}</span>
                  <span className="text-[#38bdf8] font-mono text-xs font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#38bdf8] h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Tools (2x2 Grid) */}
        <div className="bg-white border border-[#e5e7eb] rounded-3xl p-7 shadow-xs hover:border-[#38bdf8]/40 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
                <Wrench size={22} />
              </div>
              <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Tools</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-transparent hover:border-gray-200">
                <GitFork size={20} className="text-[#1a1c1c]" />
                <span className="text-xs font-medium text-[#1a1c1c]">Git/GitHub</span>
              </div>

              <div className="bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-transparent hover:border-gray-200">
                <Code size={20} className="text-[#1a1c1c]" />
                <span className="text-xs font-medium text-[#1a1c1c]">VS Code</span>
              </div>

              <div className="bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-transparent hover:border-gray-200">
                <Figma size={20} className="text-[#1a1c1c]" />
                <span className="text-xs font-medium text-[#1a1c1c]">Figma</span>
              </div>

              <div className="bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-transparent hover:border-gray-200">
                <LayoutGrid size={20} className="text-[#1a1c1c]" />
                <span className="text-xs font-medium text-[#1a1c1c]">Chrome Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
