import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onConnectClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onConnectClick }) => {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white py-10 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="font-sora font-extrabold text-xl tracking-tight text-[#1a1c1c]">
          {PERSONAL_INFO.brand}
        </div>

        {/* Copyright text */}
        <div className="text-xs md:text-sm text-[#737688] text-center">
          © 2024 M. Yudi Prianto. Hak Cipta Dilindungi.
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-xs md:text-sm font-medium text-[#434656]">
          <a 
            href={PERSONAL_INFO.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#0052ff] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href={PERSONAL_INFO.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#0052ff] transition-colors"
          >
            GitHub
          </a>
          <button 
            onClick={onConnectClick}
            className="hover:text-[#0052ff] transition-colors cursor-pointer"
          >
            Email
          </button>
          <a 
            href={PERSONAL_INFO.contact.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#0052ff] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
