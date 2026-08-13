import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, ACHIEVEMENTS } from '../data/portfolioData';

export const YudiAIBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; text: string }>>([
    { 
      role: 'assistant', 
      text: 'Halo! Saya Yudi Bot AI. Ada yang ingin Anda tanyakan tentang pendidikan, keterampilan, atau pengalaman M. Yudi Prianto?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        // Fallback intelligent responder based on query keyword matching
        const reply = generateSmartFallbackReply(userText);
        setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      }
    } catch {
      const reply = generateSmartFallbackReply(userText);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } finally {
      setLoading(false);
    }
  };

  const generateSmartFallbackReply = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('umur') || q.includes('lahir') || q.includes('usia')) {
      return `Yudi lahir di Pariaman pada 31 Maret 2008 (kini berusia 18 tahun). Saat ini dia merupakan siswa Rekayasa Perangkat Lunak (RPL) di SMKN 1 Bintan Timur.`;
    }
    if (q.includes('skill') || q.includes('keahlian') || q.includes('teknologi') || q.includes('bahasa')) {
      return `Keahlian utama Yudi meliputi Frontend (HTML/CSS 90%, JavaScript 80%, Tailwind CSS 85%), Backend (PHP 75%, Laravel 70%, MySQL 80%), serta tools seperti Git, VS Code, Figma, dan Chrome Dev.`;
    }
    if (q.includes('pengalaman') || q.includes('kerja') || q.includes('esco') || q.includes('magang')) {
      return `Yudi memiliki pengalaman dalam Industrial Attachment Program di PT Esco Indonesia (2023 - Present) berfokus pada manajemen inventaris, Microsoft Office profesional, dan networking industri.`;
    }
    if (q.includes('pencapaian') || q.includes('juara') || q.includes('prestasi') || q.includes('olimpiade')) {
      return `Pencapaian utama Yudi: Juara Umum SMP (2023) dengan konsistensi nilai tertinggi di angkatan, serta peserta Olimpiade Sains Matematika (2022).`;
    }
    if (q.includes('kontak') || q.includes('email') || q.includes('hubungi') || q.includes('lokasi')) {
      return `Anda dapat menghubungi Yudi melalui tombol 'Connect' di navigasi atas, via WhatsApp, atau langsung melalui email. Yudi berlokasi di Bintan Timur, Kepulauan Riau.`;
    }
    return `Yudi adalah siswa Rekayasa Perangkat Lunak di SMKN 1 Bintan Timur dengan passion dalam membangun web modern dengan PHP/Laravel, Tailwind CSS, dan JavaScript. Ada detail lain yang ingin Anda ketahui?`;
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        id="yudi-ai-bot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-[#0052ff] hover:bg-[#003ec7] text-white p-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
        aria-label="Tanya Yudi AI"
      >
        <Sparkles size={20} className="animate-spin-slow" />
        <span className="text-xs font-semibold pr-1 hidden sm:inline">Tanya Yudi AI</span>
      </button>

      {/* Floating Chat Box */}
      {isOpen && (
        <div 
          id="yudi-ai-chatbox"
          className="fixed bottom-22 right-6 z-50 w-80 sm:w-96 bg-white border border-[#e5e7eb] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 h-[460px]"
        >
          {/* Header */}
          <div className="bg-[#0052ff] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-sora font-bold text-sm">Yudi AI Assistant</h4>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online & Siap Menjawab
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f9f9f9]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 text-xs ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#0052ff] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={12} />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#0052ff] text-white rounded-br-xs'
                      : 'bg-white border border-[#e5e7eb] text-[#1a1c1c] rounded-bl-xs shadow-2xs'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User size={12} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 text-xs justify-start">
                <div className="w-6 h-6 rounded-full bg-[#0052ff] text-white flex items-center justify-center shrink-0">
                  <Bot size={12} />
                </div>
                <div className="bg-white border border-[#e5e7eb] p-3 rounded-2xl text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff] animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff] animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#e5e7eb] flex items-center gap-2">
            <input
              type="text"
              placeholder="Tanyakan sesuatu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#f9f9f9] border border-[#e5e7eb] rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#0052ff]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#0052ff] hover:bg-[#003ec7] disabled:opacity-50 text-white p-2 rounded-xl transition-colors cursor-pointer"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
