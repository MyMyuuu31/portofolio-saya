import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SocialConnect: React.FC = () => {
  return (
    <section id="social" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-[#0052ff] font-semibold text-xs tracking-wider uppercase">
          TEMUKAN SAYA
        </span>
        <h2 className="font-sora text-3xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
          Let's Connect! 🤝
        </h2>
        <p className="text-[#434656] text-base md:text-lg leading-relaxed">
          Saya aktif di berbagai platform. Jangan ragu untuk follow, DM, atau sekadar say hi — 
          siapa tahu kita bisa saling kenal dan bertukar cerita seru! 😄
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instagram Card */}
        <a
          href={PERSONAL_INFO.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white border border-[#e5e7eb] rounded-3xl p-8 shadow-xs hover:border-pink-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex items-center gap-6"
        >
          {/* Background dekorasi */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-pink-50 opacity-40"></div>

          {/* Icon */}
          <div className="relative shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>

          {/* Text */}
          <div className="relative flex-1">
            <p className="text-xs font-semibold text-pink-500 uppercase tracking-wider mb-1">Instagram</p>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c] group-hover:text-pink-600 transition-colors">
              @myuu_d1
            </h3>
            <p className="text-[#737688] text-sm mt-1 leading-relaxed">
              Foto, cerita sehari-hari, dan momen seru. Follow yuk! 📸
            </p>
            <span className="inline-block mt-3 text-xs font-semibold text-pink-500 group-hover:translate-x-1 transition-transform duration-200">
              Kunjungi Profil →
            </span>
          </div>
        </a>

        {/* TikTok Card */}
        <a
          href={PERSONAL_INFO.contact.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white border border-[#e5e7eb] rounded-3xl p-8 shadow-xs hover:border-gray-400 hover:shadow-lg transition-all duration-300 overflow-hidden flex items-center gap-6"
        >
          {/* Background dekorasi */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gray-100 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-cyan-50 opacity-40"></div>

          {/* Icon */}
          <div className="relative shrink-0 w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
          </div>

          {/* Text */}
          <div className="relative flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">TikTok</p>
            <h3 className="font-sora text-xl font-bold text-[#1a1c1c] group-hover:text-gray-700 transition-colors">
              @itssmymyuuu
            </h3>
            <p className="text-[#737688] text-sm mt-1 leading-relaxed">
              Konten santai dan hiburan. Siapa tahu FYP bareng! 🎵
            </p>
            <span className="inline-block mt-3 text-xs font-semibold text-gray-600 group-hover:translate-x-1 transition-transform duration-200">
              Kunjungi Profil →
            </span>
          </div>
        </a>
      </div>

      {/* Quote bawah */}
      <div className="mt-10 text-center">
        <p className="text-[#737688] text-sm italic">
          "Koneksi yang baik dimulai dari satu sapaan sederhana." 💬
        </p>
      </div>
    </section>
  );
};
