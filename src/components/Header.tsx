import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onConnectClick: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onConnectClick, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Hobbies', href: '#hobbies', id: 'hobbies' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#e5e7eb] py-3 shadow-xs' 
          : 'bg-[#f9f9f9] py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          id="nav-logo"
          className="font-sora font-extrabold text-xl tracking-tight text-[#1a1c1c] hover:text-[#0052ff] transition-colors"
        >
          {PERSONAL_INFO.brand}
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`text-sm font-medium transition-all relative py-1 ${
                  isActive 
                    ? 'text-[#0052ff] font-semibold' 
                    : 'text-[#434656] hover:text-[#1a1c1c]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0052ff] rounded-full transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Connect Action Button */}
        <div className="hidden md:flex items-center">
          <button
            id="connect-btn-header"
            onClick={onConnectClick}
            className="bg-[#38bdf8] hover:bg-[#0284c7] text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-1.5"
          >
            Connect
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1a1c1c] hover:text-[#0052ff] rounded-lg focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden bg-white border-b border-[#e5e7eb] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id 
                    ? 'bg-[#f0f7ff] text-[#0052ff] font-semibold' 
                    : 'text-[#434656] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-gray-100">
            <button
              id="connect-btn-mobile"
              onClick={() => {
                setMobileMenuOpen(false);
                onConnectClick();
              }}
              className="w-full bg-[#38bdf8] hover:bg-[#0284c7] text-white font-medium text-base py-3 rounded-xl transition-all shadow-xs text-center flex items-center justify-center gap-2"
            >
              Connect <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
