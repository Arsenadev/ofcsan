import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code, Copy, Check, Download, FileText, Palette, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { StyleId, PortfolioProfile } from '../types/portfolio';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeStyle: StyleId;
  profile: PortfolioProfile;
}

export function CodeExportModal({
  isOpen,
  onClose,
  activeStyle,
  profile,
}: CodeExportModalProps) {
  const [activeTab, setActiveTab] = useState<'component' | 'tailwind' | 'casestudy'>('component');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#facc15', '#ea580c', '#d4af37'],
    });
  };

  const getExportCode = () => {
    if (activeTab === 'tailwind') {
      return `/* index.html Font Imports */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@500;700;800&display=swap" rel="stylesheet">

/* src/index.css (Tailwind CSS v4 & Apple Liquid Glass Setup) */
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* 60-30-10 Color Tokens for ${activeStyle.toUpperCase()} */
:root {
  --color-canvas: ${
    activeStyle === 'apple-liquid' ? '#030306' :
    activeStyle === 'editorial' ? '#080808' :
    activeStyle === 'creative-tech' ? '#09090b' :
    activeStyle === 'neo-brutalist' ? '#fffdfa' : '#0c0c0c'
  };
  --color-surface: ${
    activeStyle === 'apple-liquid' ? 'rgba(255, 255, 255, 0.04)' :
    activeStyle === 'editorial' ? '#121212' :
    activeStyle === 'creative-tech' ? '#18181b' :
    activeStyle === 'neo-brutalist' ? '#ffffff' : '#141414'
  };
  --color-accent: ${
    activeStyle === 'apple-liquid' ? '#38bdf8' :
    activeStyle === 'editorial' ? '#d4af37' :
    activeStyle === 'creative-tech' ? '#38bdf8' :
    activeStyle === 'neo-brutalist' ? '#facc15' : '#ea580c'
  };
}

.liquid-glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(28px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), 0 16px 40px -10px rgba(0, 0, 0, 0.6);
}`;
    }

    if (activeTab === 'casestudy') {
      return `# Template Kerangka Studi Kasus Portfolio (Metode STAR Recruiter-Grade)
Disusun untuk: ${profile.name} — ${profile.title}

---

## 1. Ringkasan Eksekutif (TL;DR)
- **Klien / Organisasi**: [Nama Klien / Startup]
- **Tahun**: 2026
- **Peran Saya**: Lead UI/UX Designer & Frontend Interaction
- **Dampak Terukur**: +140% Time-on-Page, -32% Bounce Rate, Sub-100ms Latency

---

## 2. Tantangan & Situasi (Problem Statement)
Klien menghadapi friksi besar di mana pengguna kesulitan mencerna informasi produk yang padat.
Desain lama menggunakan terlalu banyak kartu bertumpuk (cards-in-cards) dan badge statis warna-warni yang menimbulkan kelelahan visual (cognitive overload).

---

## 3. Pendekatan Riset & Eksplorasi (Approach)
- Menjalankan 6 sesi usability testing kualitatif dengan pengguna target.
- Merestrukturisasi arsitektur informasi ke model 12-kolom asimetris.
- Menetapkan aturan **Zero-Pill Metadata**: semua tag dan status dirender sebagai teks murni tanpa kapsul bordered chips.

---

## 4. Eksekusi Solusi & Interaksi (Solution & Motion)
- **Komponen**: Merancang Bento Grid interaktif dengan feedback micro-interaction <150ms.
- **Fisika Animasi**: Menggunakan Spring physics (stiffness: 300, damping: 24) pada elemen hover.
- **Aksesibilitas**: Kontras teks memenuhi standar WCAG AA (4.5:1).

---

## 5. Hasil Bisnis & Metrik Dampak (Results)
- Tingkat konversi aksi utama (CTA) meningkat 2.4x lipat dalam 90 hari pertama pasca-rilis.
- Zero keluhan lag antarmuka pada pengetesan perangkat mobile low-end.`;
    }

    return `// ========================================================
// Portofolio Component — ${activeStyle.toUpperCase()}
// Generated for ${profile.name}
// ========================================================
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Portfolio() {
  const profile = {
    name: "${profile.name}",
    title: "${profile.title}",
    shortBio: "${profile.shortBio}",
    email: "${profile.email}",
    status: "${profile.status}",
    location: "${profile.location}",
  };

  return (
    <div className="min-h-screen ${
      activeStyle === 'editorial' ? 'bg-[#080808] text-[#f4f4f0]' :
      activeStyle === 'creative-tech' ? 'bg-[#09090b] text-neutral-100' :
      activeStyle === 'neo-brutalist' ? 'bg-[#fffdfa] text-black' : 'bg-[#0c0c0c] text-white'
    }">
      {/* Top Bar Contract (1 Line Wordmark, 4-6 Nav Links, 1-2 Actions) */}
      <header className="sticky top-0 z-40 px-6 sm:px-12 py-4 flex items-center justify-between border-b ${
        activeStyle === 'neo-brutalist' ? 'border-b-3 border-black bg-[#fffdfa]' : 'border-neutral-800 bg-inherit/90 backdrop-blur-md'
      }">
        <a href="#" className="text-lg font-bold font-syne tracking-tight">
          {profile.name}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#works" className="hover:underline">Karya</a>
          <a href="#about" className="hover:underline">Tentang</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </nav>
        <a href="#contact" className="px-4 py-2 text-xs font-semibold rounded-lg ${
          activeStyle === 'editorial' ? 'bg-[#d4af37] text-black' :
          activeStyle === 'creative-tech' ? 'bg-sky-400 text-black' :
          activeStyle === 'neo-brutalist' ? 'bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_#000]' :
          'bg-white text-black'
        }">
          Hubungi
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 sm:px-12 py-20 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono opacity-70">
          <span>{profile.status}</span>
          <span>·</span>
          <span>{profile.location}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-syne text-balance">
          {profile.title}
        </h1>
        <p className="text-base sm:text-lg opacity-80 max-w-2xl leading-relaxed">
          {profile.shortBio}
        </p>
      </section>
    </div>
  );
}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getExportCode());
    setCopied(true);
    triggerCelebration();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const code = getExportCode();
    const filename =
      activeTab === 'component'
        ? `Portfolio_${activeStyle}.tsx`
        : activeTab === 'tailwind'
        ? 'tailwind_theme_setup.css'
        : 'Case_Study_Framework.md';

    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    triggerCelebration();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative z-10 w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-sky-400" />
              <h3 className="text-sm font-semibold">Export Kode & Panduan Implementasi</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Segmented Control Tabs */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-1 p-1 bg-neutral-950 rounded-xl border border-neutral-800">
                <button
                  onClick={() => setActiveTab('component')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'component' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>React Component (.tsx)</span>
                </button>

                <button
                  onClick={() => setActiveTab('tailwind')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'tailwind' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Tailwind & Font Tokens</span>
                </button>

                <button
                  onClick={() => setActiveTab('casestudy')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'casestudy' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Template Studi Kasus (STAR)</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh File</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-sky-400 hover:bg-sky-300 text-black rounded-lg transition-colors shadow-lg shadow-sky-400/20 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Kode'}</span>
                </button>
              </div>
            </div>

            {/* Code Viewer */}
            <div className="relative">
              <pre className="p-5 rounded-xl bg-neutral-950 border border-neutral-800/90 font-mono text-xs text-neutral-300 overflow-x-auto max-h-[50vh] leading-relaxed">
                <code>{getExportCode()}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
