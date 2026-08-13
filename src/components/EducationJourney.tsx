import React, { useState } from 'react';
import { GraduationCap, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const schools = [
  {
    id: 'sd-alaziz',
    level: 'SD',
    name: 'SDS Al Aziz',
    location: 'Jakarta Timur, Cakung',
    period: 'Kelas 1 – Kelas 3 Semester 2',
    note: 'Awal perjalanan pendidikan. Pindah ke Riau mengikuti keluarga.',
    color: 'bg-blue-50 border-blue-200',
    dot: 'bg-blue-400',
    badge: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    id: 'sd-034',
    level: 'SD',
    name: 'SDN 034 Tarai Bangun',
    location: 'Kabupaten Kampar, Riau',
    period: 'Kelas 3 (Mengulang) – Kelas 5 Semester 1',
    note: 'Mengulang kelas 3 karena tidak ada surat pindah dari sekolah sebelumnya. Sebuah tantangan yang mengajarkan arti kesabaran dan ketangguhan.',
    color: 'bg-amber-50 border-amber-200',
    dot: 'bg-amber-400',
    badge: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    id: 'sd-005',
    level: 'SD',
    name: 'SD 005 Gunung Kijang',
    location: 'Bintan, Kepulauan Riau',
    period: 'Kelas 5 Semester 2 – Lulus SD',
    note: 'Meraih Juara 3 Olimpiade Matematika tingkat kecamatan dan mewakili ke tingkat kabupaten.',
    color: 'bg-green-50 border-green-200',
    dot: 'bg-green-400',
    badge: 'text-green-600 bg-green-50 border-green-200',
  },
  {
    id: 'smp',
    level: 'SMP',
    name: 'SMPN 27 Bintan',
    location: 'Bintan, Kepulauan Riau',
    period: 'Kelas 7 – Kelas 9 (Lulus)',
    note: 'Meraih Juara Umum pada kelas 8 semester 1. Konsisten ranking 1–3 sepanjang SMP.',
    color: 'bg-purple-50 border-purple-200',
    dot: 'bg-purple-400',
    badge: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    id: 'smk',
    level: 'SMK',
    name: 'SMKN 1 Bintan Timur',
    location: 'Bintan Timur, Kepulauan Riau',
    period: 'Kelas 10 – Sekarang',
    note: 'Mengambil jurusan Rekayasa Perangkat Lunak (RPL). Ranking 1 (Kelas 10 Sem 1), Ranking 3 (Kelas 10 Sem 2), Ranking 1 (Kelas 11 Sem 1), Ranking 7 (Kelas 11 Sem 2).',
    color: 'bg-[#f0f7ff] border-[#d0e3ff]',
    dot: 'bg-[#0052ff]',
    badge: 'text-[#0052ff] bg-[#f0f7ff] border-[#d0e3ff]',
    current: true,
  },
];

export const EducationJourney: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>('smk');

  return (
    <section id="education" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 space-y-3">
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">
          PERJALANAN PENDIDIKAN
        </span>
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
          Jejak Sekolahku. 🎒
        </h2>
        <p className="text-[#434656] text-base md:text-lg max-w-2xl leading-relaxed">
          Perjalanan panjang dari Jakarta hingga Bintan — berpindah sekolah, menghadapi tantangan, 
          dan terus bangkit. Setiap sekolah punya cerita tersendiri. 📖
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-10 border-l-2 border-dashed border-[#d0e3ff] space-y-6">
        {schools.map((school, index) => (
          <div key={school.id} className="relative">
            {/* Dot */}
            <div className={`absolute -left-[33px] md:-left-[41px] top-5 w-4 h-4 rounded-full border-4 border-white shadow ${school.dot}`} />

            {/* Card */}
            <div
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${school.color} ${school.current ? 'shadow-md' : 'shadow-xs'}`}
            >
              {/* Card Header — clickable */}
              <button
                onClick={() => setExpanded(expanded === school.id ? null : school.id)}
                className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-[#0052ff]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-sora font-bold text-lg text-[#1a1c1c]">{school.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${school.badge}`}>
                        {school.level} {school.current && '· Sekarang'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MapPin size={12} className="text-[#737688]" />
                      <p className="text-[#737688] text-xs">{school.location} · {school.period}</p>
                    </div>
                  </div>
                </div>
                {expanded === school.id
                  ? <ChevronUp size={18} className="text-[#737688] shrink-0" />
                  : <ChevronDown size={18} className="text-[#737688] shrink-0" />
                }
              </button>

              {/* Expanded Note */}
              {expanded === school.id && (
                <div className="px-5 md:px-6 pb-5 pt-0">
                  <div className="border-t border-white/60 pt-4">
                    <p className="text-[#434656] text-sm md:text-base leading-relaxed">{school.note}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-10 text-center">
        <p className="text-[#737688] text-sm italic">
          "Bukan dari mana kamu mulai, tapi seberapa jauh kamu mau melangkah." 🚶‍♂️✨
        </p>
      </div>
    </section>
  );
};
