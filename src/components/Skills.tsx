import React from 'react';
import { Code2, Database, Wrench, GitFork, Code, Figma, LayoutGrid } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills: React.FC = () => {
  const header = useScrollAnimation();
  const cards = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div ref={header.ref} className={`text-center max-w-xl mx-auto mb-16 space-y-3 fade-up ${header.visible ? 'visible' : ''}`}>
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">KEAHLIAN</span>
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
          Technical Arsenal.
        </h2>
        <p className="text-[#434656] text-sm">Masih dalam proses belajar — setiap hari selalu ada yang baru.</p>
      </div>

      <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className={`bg-white border border-[#e5e7eb] rounded-3xl p-7 card-hover fade-up ${cards.visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
              <Code2 size={22} />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Frontend</h3>
          </div>
          <div className="space-y-5">
            {SKILL_CATEGORIES[0].skills?.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-[#1a1c1c]">{skill.name}</span>
                  <span className="text-[#0052ff] font-mono text-xs font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#0052ff] to-[#38bdf8] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: cards.visible ? `${skill.percentage}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className={`bg-white border border-[#e5e7eb] rounded-3xl p-7 card-hover fade-up delay-200 ${cards.visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
              <Database size={22} />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Backend</h3>
          </div>
          <div className="space-y-5">
            {SKILL_CATEGORIES[1].skills?.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-[#1a1c1c]">{skill.name}</span>
                  <span className="text-[#0052ff] font-mono text-xs font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#0052ff] to-[#38bdf8] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: cards.visible ? `${skill.percentage}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className={`bg-white border border-[#e5e7eb] rounded-3xl p-7 card-hover fade-up delay-400 ${cards.visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
              <Wrench size={22} />
            </div>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Tools</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { icon: <GitFork size={20} />, name: 'Git/GitHub' },
              { icon: <Code size={20} />, name: 'VS Code' },
              { icon: <Figma size={20} />, name: 'Figma' },
              { icon: <LayoutGrid size={20} />, name: 'Chrome Dev' },
            ].map((tool) => (
              <div
                key={tool.name}
                className="bg-[#f3f4f6] hover:bg-[#f0f7ff] hover:border-[#d0e3ff] transition-all duration-200 rounded-2xl p-4 flex flex-col items-center gap-2 border border-transparent cursor-default"
              >
                <span className="text-[#1a1c1c]">{tool.icon}</span>
                <span className="text-xs font-medium text-[#1a1c1c]">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
