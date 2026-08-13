import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Hobbies } from './components/Hobbies';
import { ConnectModal } from './components/ConnectModal';
import { ProjectGalleryModal } from './components/ProjectGalleryModal';
import { YudiAIBot } from './components/YudiAIBot';
import { SocialConnect } from './components/SocialConnect';
import { Footer } from './components/Footer';

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [projectGalleryOpen, setProjectGalleryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'achievements', 'hobbies'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-inter selection:bg-[#0052ff] selection:text-white flex flex-col justify-between">
      {/* Header Navigation */}
      <Header 
        onConnectClick={() => setConnectModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onProjectsClick={(e) => {
            // Smoothly scroll or open project gallery
          }}
        />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience 
          onViewDetails={() => setProjectGalleryOpen(true)}
        />

        {/* Achievements Section */}
        <Achievements />

        {/* Hobbies Section */}
        <Hobbies />

        {/* Social Connect Section */}
        <SocialConnect />
      </main>

      {/* Footer */}
      <Footer onConnectClick={() => setConnectModalOpen(true)} />

      {/* Modals & AI Floating Tools */}
      <ConnectModal 
        isOpen={connectModalOpen} 
        onClose={() => setConnectModalOpen(false)} 
      />

      <ProjectGalleryModal 
        isOpen={projectGalleryOpen} 
        onClose={() => setProjectGalleryOpen(false)} 
      />

      <YudiAIBot />
    </div>
  );
}
