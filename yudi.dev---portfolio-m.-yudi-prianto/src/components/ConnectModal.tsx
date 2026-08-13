import React, { useState } from 'react';
import { X, Mail, Send, Check, Copy, ExternalLink, MessageSquare, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onClose();
    }, 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('yudi.prianto@smkn1bintantimur.sch.id');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-[#e5e7eb] max-w-lg w-full p-6 md:p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f7ff] text-[#0052ff] text-xs font-semibold">
            <Mail size={14} /> Connect With Yudi
          </div>
          <h3 className="font-sora text-2xl font-bold text-[#1a1c1c]">Mari Berkolaborasi!</h3>
          <p className="text-[#434656] text-sm leading-relaxed">
            Kirimkan pesan untuk peluang magang, proyek rekayasa perangkat lunak, atau diskusi teknologi.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3 bg-[#f0f7ff] rounded-2xl border border-[#d0e3ff]">
            <div className="w-12 h-12 bg-[#0052ff] text-white rounded-full flex items-center justify-center mx-auto animate-bounce">
              <Check size={24} />
            </div>
            <h4 className="font-sora font-bold text-lg text-[#1a1c1c]">Pesan Terkirim!</h4>
            <p className="text-xs text-[#434656] px-4">
              Terima kasih telah menghubungi M. Yudi Prianto. Pesan Anda akan segera dibalas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#1a1c1c] mb-1">Nama Lengkap</label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-hidden focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] transition-all bg-[#f9f9f9]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#1a1c1c] mb-1">Email Anda</label>
              <input
                type="email"
                required
                placeholder="nama@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-hidden focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] transition-all bg-[#f9f9f9]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#1a1c1c] mb-1">Pesan</label>
              <textarea
                required
                rows={3}
                placeholder="Tuliskan pesan atau penawaran kerja sama..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-hidden focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] transition-all bg-[#f9f9f9] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#38bdf8] hover:bg-[#0284c7] text-white font-medium text-sm py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              Kirim Pesan <Send size={16} />
            </button>
          </form>
        )}

        {/* Quick Contacts */}
        <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
          <p className="text-xs font-medium text-[#737688]">Kontak Langsung & Portofolio</p>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-[#1a1c1c] hover:border-[#0052ff] transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              <span>{copied ? 'Tersalin!' : 'Copy Email'}</span>
            </button>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Phone size={14} />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors"
            >
              <ExternalLink size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
