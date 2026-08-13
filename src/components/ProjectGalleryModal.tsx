import React, { useState } from 'react';
import { X, ExternalLink, Code2, Layers, Filter } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectGalleryModal: React.FC<ProjectGalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Full Stack App', 'Web Application', 'Educational Tool'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-[#e5e7eb] max-w-4xl w-full p-6 md:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#f0f7ff] text-[#0052ff] flex items-center justify-center">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="font-sora text-xl font-bold text-[#1a1c1c]">Portofolio Proyek Rekayasa Perangkat Lunak</h3>
              <p className="text-xs text-[#737688]">Showcase hasil karya software engineering M. Yudi Prianto</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter size={14} className="text-[#737688] shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0052ff] text-white shadow-xs'
                  : 'bg-gray-100 text-[#434656] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="overflow-y-auto pr-1 space-y-6 py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#f9f9f9] border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-xs hover:border-[#0052ff] transition-all group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#0052ff] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {project.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-sora font-bold text-base text-[#1a1c1c] group-hover:text-[#0052ff] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#434656] leading-relaxed mt-1.5">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white border border-gray-200 text-[#1a1c1c] font-mono text-[10px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="w-full text-xs font-semibold text-[#0052ff] bg-white hover:bg-[#f0f7ff] border border-[#d0e3ff] py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                      <span>Detail Proyek</span> <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
