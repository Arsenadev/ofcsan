import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Activity,
  UserCheck,
  Code,
  Maximize2,
  Minimize2,
  ChevronRight,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { StyleId, StyleArchetype } from '../types/portfolio';
import { STYLE_ARCHETYPES } from '../data/mockPortfolioData';

interface StudioControlBarProps {
  activeStyle: StyleId;
  onSelectStyle: (style: StyleId) => void;
  isFullscreenPortfolio: boolean;
  onToggleFullscreen: () => void;
  onOpenMatcher: () => void;
  onOpenMotionLab: () => void;
  onOpenProfileEditor: () => void;
  onOpenCodeExport: () => void;
}

export function StudioControlBar({
  activeStyle,
  onSelectStyle,
  isFullscreenPortfolio,
  onToggleFullscreen,
  onOpenMatcher,
  onOpenMotionLab,
  onOpenProfileEditor,
  onOpenCodeExport,
}: StudioControlBarProps) {
  const [showStyleDetails, setShowStyleDetails] = useState(false);
  const currentArchetype = STYLE_ARCHETYPES[activeStyle];

  // If in fullscreen mode, show discreet floating badge at bottom-right
  if (isFullscreenPortfolio) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={onToggleFullscreen}
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-neutral-900/90 text-white hover:bg-neutral-800 border border-neutral-700 shadow-2xl rounded-full backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
        >
          <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Kembali ke Studio Controls</span>
        </button>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-neutral-100 text-xs shadow-xl">
      {/* Primary Toolbar */}
      <div className="px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Brand / Title & Style Matcher CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-bold font-syne text-sm tracking-tight text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Portfolify Studio</span>
          </div>

          <div className="h-4 w-px bg-neutral-800 hidden sm:block" />

          <button
            onClick={onOpenMatcher}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 transition-colors font-medium cursor-pointer"
            title="Buka konsultasi gaya portfolio"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Bingung Pilih Gaya? Ikuti Kuis (1 Min)</span>
          </button>
        </div>

        {/* Archetypes Quick Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-xl border border-neutral-800 overflow-x-auto">
          {[
            { id: 'apple-liquid', label: 'Apple Liquid Glass', badge: 'iOS 26' },
            { id: 'neo-brutalist-soft', label: 'Neo-Brutalism Soft', badge: 'Rounded' },
            { id: 'neo-brutalist', label: 'Neo-Brutalist', badge: 'Bold' },
            { id: 'creative-tech', label: 'Creative Tech', badge: 'Dark Bento' },
            { id: 'editorial', label: 'Editorial Avant-Garde', badge: 'Studio' },
            { id: 'swiss-grid', label: 'Swiss Grid', badge: 'Clean' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectStyle(item.id as StyleId)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeStyle === item.id
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-neutral-500 font-mono hidden md:inline">({item.badge})</span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenMotionLab}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors cursor-pointer"
            title="Uji kurva animasi dan fisika spring"
          >
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Motion Lab</span>
          </button>

          <button
            onClick={onOpenProfileEditor}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors cursor-pointer"
            title="Ubah nama, peran, dan keahlianmu"
          >
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Data Saya</span>
          </button>

          <button
            onClick={onOpenCodeExport}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors cursor-pointer"
            title="Export kode React dan konfigurasi Tailwind"
          >
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span>Export</span>
          </button>

          <button
            onClick={onToggleFullscreen}
            className="flex items-center gap-1 px-3 py-1.5 bg-white text-black hover:bg-neutral-200 font-semibold rounded-lg transition-colors cursor-pointer"
            title="Lihat portofolio tanpa bar studio"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mode Standalone</span>
          </button>
        </div>
      </div>

      {/* Secondary Context Banner: Architectural DNA of Selected Style */}
      <div className="bg-neutral-900/60 border-t border-neutral-800/80 px-4 sm:px-8 py-2 flex flex-col sm:flex-row sm:items-center justify-between text-neutral-400 text-[11px] gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-semibold text-white">Gaya Aktif: {currentArchetype.name}</span>
          <span className="text-neutral-600 hidden sm:inline">·</span>
          <span>Tipografi: <strong className="text-neutral-300">{currentArchetype.typography.display}</strong></span>
          <span className="text-neutral-600 hidden sm:inline">·</span>
          <span>Motion: <strong className="text-neutral-300">{currentArchetype.motionPhilosophy.title} ({currentArchetype.motionPhilosophy.duration})</strong></span>
        </div>

        <button
          onClick={() => setShowStyleDetails(!showStyleDetails)}
          className="text-neutral-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
        >
          <span>{showStyleDetails ? 'Sembunyikan Pedoman' : 'Baca Pedoman UX Gaya Ini'}</span>
          <ChevronRight className={`w-3 h-3 transition-transform ${showStyleDetails ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Expanded Style Guide Panel */}
      {showStyleDetails && (
        <div className="p-4 sm:p-6 bg-neutral-900 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs animate-in fade-in duration-200">
          <div className="space-y-1.5">
            <span className="font-mono text-amber-400 uppercase tracking-wider block text-[10px]">
              Kapan Harus Memilih Gaya Ini:
            </span>
            <p className="text-neutral-300 leading-relaxed">
              {currentArchetype.bestFor}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-sky-400 uppercase tracking-wider block text-[10px]">
              Filosofi Animasi:
            </span>
            <p className="text-neutral-300 leading-relaxed">
              {currentArchetype.motionPhilosophy.description}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-emerald-400 uppercase tracking-wider block text-[10px]">
              Keunggulan Utama:
            </span>
            <ul className="text-neutral-300 space-y-1 list-disc list-inside">
              {currentArchetype.pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
