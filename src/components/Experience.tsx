import React from 'react';
import { Building2, MapPin, Calendar, Tag } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  onViewDetails?: (id: string) => void;
}

export const Experience: React.FC<ExperienceProps> = () => {
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
        <p className="text-[#434656] text-base md:text-lg max-w-2xl">
          Pengalaman nyata di dunia industri yang membentuk karakter dan profesionalisme sejak dini.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-[#38bdf8]/40 space-y-8">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#38bdf8] shadow-xs" />

        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-white border border-[#e5e7eb] rounded-3xl p-8 md:p-12 shadow-sm hover:border-[#38bdf8]/60 hover:shadow-md transition-all duration-300"
          >
            {/* Top: Role + Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="space-y-1">
                <span className="inline-block bg-[#f0f7ff] text-[#0052ff] text-xs font-bold px-3 py-1 rounded-full border border-[#e0edff] mb-2">
                  PKL / Magang
                </span>
                <h3 className="font-sora text-2xl md:text-3xl font-extrabold text-[#1a1c1c]">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Building2 size={16} className="text-[#0052ff]" />
                  <p className="text-[#0052ff] font-bold text-lg md:text-xl">
                    {exp.company}
                  </p>
                </div>
                {exp.department && (
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#737688]" />
                    <p className="text-[#737688] text-sm font-medium">{exp.department}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <Calendar size={14} className="text-[#0284c7]" />
                <span className="bg-[#e0f2fe] text-[#0284c7] font-semibold text-sm px-4 py-1.5 rounded-full border border-[#bae6fd]">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#f0f0f0] mb-6" />

            {/* Tentang PT Esco */}
            <div className="mb-6 bg-[#f8faff] rounded-2xl p-5 border border-[#e8f0ff]">
              <p className="text-xs font-bold text-[#0052ff] uppercase tracking-wider mb-2">Tentang Perusahaan</p>
              <p className="text-[#434656] text-sm md:text-base leading-relaxed">
                <strong>PT Esco Indonesia</strong> adalah anak perusahaan dari <strong>Esco Group</strong>, perusahaan multinasional asal Singapura yang bergerak di bidang manufaktur peralatan laboratorium, biomedis, dan farmasi bertaraf internasional. Produknya digunakan di lebih dari 100 negara di seluruh dunia.
              </p>
            </div>

            {/* Bullet Points Kegiatan */}
            <div className="mb-6">
              <p className="text-xs font-bold text-[#1a1c1c] uppercase tracking-wider mb-3">Kegiatan Selama PKL</p>
              <ul className="space-y-3 text-[#434656] text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#38bdf8] shrink-0"></span>
                  <span>Ditempatkan di <strong>Departemen Small WO</strong> — departemen yang menangani pengemasan (packing) komponen dan alat-alat kecil produksi PT Esco Indonesia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#38bdf8] shrink-0"></span>
                  <span>Menggunakan <strong>Microsoft Excel & Word</strong> untuk pencatatan, pendataan, dan pelaporan stok barang di gudang secara rutin.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#38bdf8] shrink-0"></span>
                  <span>Mendapatkan pengalaman langsung tentang <strong>dunia kerja industri</strong> — kedisiplinan, tanggung jawab, dan etika profesional di lingkungan pabrik internasional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#38bdf8] shrink-0"></span>
                  <span>Aktif membangun <strong>relasi dan jaringan</strong> dengan rekan kerja dan karyawan dari berbagai divisi perusahaan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#38bdf8] shrink-0"></span>
                  <span>Belajar memahami alur kerja industri manufaktur dari proses produksi hingga pengemasan akhir produk.</span>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Tag size={14} className="text-[#737688] mt-1" />
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
