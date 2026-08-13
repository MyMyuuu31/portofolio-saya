import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';

export const YudiAIBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'assistant' | 'user'; text: string }>>([
    {
      role: 'assistant',
      text: 'Halo! Saya MyMyuuu AI 🤖 — asisten virtual M. Yudi Prianto. Tanyakan apa saja tentang Yudi, pendidikannya, pengalaman, atau pencapaiannya!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const generateReply = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('nama') || q.includes('siapa') || q.includes('profil')) {
      return 'Nama lengkapnya Muhammad Yudi Prianto, biasa dipanggil Yudi atau Myuu. Lahir di Pariaman, 31 Maret 2008, sekarang berusia 18 tahun. Siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMKN 1 Bintan Timur. 😊';
    }
    if (q.includes('umur') || q.includes('lahir') || q.includes('usia') || q.includes('tanggal')) {
      return 'Yudi lahir di Pariaman pada 31 Maret 2008, sekarang berusia 18 tahun. 🎂';
    }
    if (q.includes('sekolah') || q.includes('pendidikan') || q.includes('riwayat') || q.includes('perjalanan')) {
      return 'Perjalanan sekolah Yudi:\n\n🏫 SD Al Aziz Jakarta Timur (Kelas 1–3 Sem 2)\n🏫 SDN 034 Tarai Bangun, Kampar (Kelas 3 ulang–Kelas 5 Sem 1) — sempat mengulang kelas 3 karena tidak ada surat pindah\n🏫 SD 005 Gunung Kijang, Bintan (Kelas 5 Sem 2–Lulus)\n🏫 SMPN 27 Bintan\n🏫 SMKN 1 Bintan Timur — Jurusan RPL (Sekarang)';
    }
    if (q.includes('smk') || q.includes('jurusan') || q.includes('rpl')) {
      return 'Yudi sekarang bersekolah di SMKN 1 Bintan Timur, jurusan Rekayasa Perangkat Lunak (RPL). Ranking 1 (Kelas 10 Sem 1), Ranking 3 (Kelas 10 Sem 2), Ranking 1 (Kelas 11 Sem 1), Ranking 7 (Kelas 11 Sem 2). 💻';
    }
    if (q.includes('smp')) {
      return 'Yudi bersekolah di SMPN 27 Bintan. Meraih Juara Umum pada kelas 8 semester 1, dan konsisten ranking 1–3 sepanjang SMP. 🏆';
    }
    if (q.includes('skill') || q.includes('keahlian') || q.includes('teknologi') || q.includes('coding') || q.includes('bisa')) {
      return 'Yudi masih dalam tahap belajar coding. Keahlian saat ini:\n\n💻 Frontend: HTML/CSS (30%), JavaScript (15%), Tailwind CSS (20%)\n🔧 Backend: PHP (15%), Laravel (10%), MySQL (20%)\n🛠️ Tools: Git, VS Code, Figma, Chrome DevTools\n\nMasih terus belajar dan berkembang! 🚀';
    }
    if (q.includes('magang') || q.includes('pkl') || q.includes('esco') || q.includes('pengalaman') || q.includes('kerja')) {
      return 'Yudi pernah PKL di PT ESCO Indonesia — perusahaan manufaktur peralatan laboratorium & biomedis bertaraf internasional asal Singapura. Ditempatkan di Departemen Small WO (packing komponen kecil). Di sana Yudi belajar pakai Excel & Word untuk pendataan barang, memahami dunia kerja industri, dan membangun relasi profesional. 🏭';
    }
    if (q.includes('prestasi') || q.includes('pencapaian') || q.includes('juara') || q.includes('ranking') || q.includes('olimpiade')) {
      return 'Pencapaian Yudi:\n\n🏆 Ranking 1–3 konsisten dari kelas 1 SD hingga kelas 9 SMP\n🏆 Juara Umum SMPN 27 Bintan (Kelas 8 Sem 1)\n🥉 Juara 3 Olimpiade Matematika tingkat kecamatan (SD Kelas 5), mewakili ke tingkat kabupaten\n📊 SMK: Ranking 1 (Kelas 10 Sem 1), Ranking 3 (Kelas 10 Sem 2), Ranking 1 (Kelas 11 Sem 1), Ranking 7 (Kelas 11 Sem 2)';
    }
    if (q.includes('hobi') || q.includes('game') || q.includes('main') || q.includes('suka')) {
      return 'Yudi sangat hobi main game — baik di HP maupun PC! Sudah banyak game yang pernah dimainkan. Selain gaming, Yudi juga suka membaca. 🎮📚';
    }
    if (q.includes('instagram') || q.includes('ig') || q.includes('sosmed') || q.includes('tiktok') || q.includes('medsos')) {
      return 'Sosial media Yudi:\n\n📸 Instagram: @myuu_d1\n🎵 TikTok: @itssmymyuuu\n\nFollow aja, siapa tahu FYP bareng! 😄';
    }
    if (q.includes('kontak') || q.includes('hubungi') || q.includes('email') || q.includes('whatsapp') || q.includes('wa')) {
      return 'Bisa hubungi Yudi lewat:\n\n📧 Email: muhammadyudiprianto30@gmail.com\n📱 WhatsApp: 082389505052\n\nAtau klik tombol "Connect" di navbar! 😊';
    }
    if (q.includes('lokasi') || q.includes('tinggal') || q.includes('domisili') || q.includes('mana')) {
      return 'Yudi tinggal di Bintan Timur, Kepulauan Riau. Lahir di Pariaman, Sumatera Barat, tapi sudah lama merantau ke Riau. 📍';
    }
    return 'Hmm, saya belum punya jawaban untuk itu. Coba tanyakan tentang pendidikan, skill, pengalaman PKL, prestasi, atau cara menghubungi Yudi ya! 😊';
  };

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
        setMessages(prev => [...prev, { role: 'assistant', text: generateReply(userText) }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: generateReply(userText) }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        id="mymyuuu-ai-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-[#0052ff] hover:bg-[#003ec7] text-white p-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
        aria-label="Tanya MyMyuuu AI"
      >
        <Sparkles size={20} />
        <span className="text-xs font-semibold pr-1 hidden sm:inline">MyMyuuu AI</span>
      </button>

      {/* Floating Chat Box */}
      {isOpen && (
        <div
          id="mymyuuu-ai-chatbox"
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white border border-[#e5e7eb] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 h-[460px]"
        >
          {/* Header */}
          <div className="bg-[#0052ff] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-sora font-bold text-sm">MyMyuuu AI</h4>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Asisten Virtual Yudi
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

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f9f9f9]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2 text-xs ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#0052ff] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={12} />
                  </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[80%] leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-[#0052ff] text-white rounded-br-sm'
                    : 'bg-white border border-[#e5e7eb] text-[#1a1c1c] rounded-bl-sm shadow-xs'
                }`}>
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

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#e5e7eb] flex items-center gap-2">
            <input
              type="text"
              placeholder="Tanyakan sesuatu tentang Yudi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#f9f9f9] border border-[#e5e7eb] rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#0052ff]"
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
