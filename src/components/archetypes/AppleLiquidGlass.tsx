import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Mail,
  Check,
  Send,
  Sparkles,
  Layers,
  Code2,
  Smartphone,
  Cpu,
  User,
  Sliders,
  ChevronRight,
  Radio,
  Play,
  ExternalLink,
  Globe,
  Palette,
} from 'lucide-react';
import { PortfolioProfile, Project } from '../../types/portfolio';
import { TiltCard } from '../shared/TiltCard';
import { SanLogo } from '../shared/SanLogo';

export type AppleRouteId = 'overview' | 'creations' | 'identity' | 'stack' | 'connect';

interface AppleLiquidGlassProps {
  profile: PortfolioProfile;
  projects: Project[];
  activeRoute: AppleRouteId;
  onRouteChange: (route: AppleRouteId) => void;
  onSelectProject: (project: Project) => void;
  onTriggerLoading?: () => void;
  onOpenLogoStudio?: () => void;
  onOpenStyleSwitcher?: () => void;
}

/* ========================================================
   AUTHENTIC BRAND SVGs - PRECISE OPTICAL VERTICAL ALIGNMENT
   ======================================================== */
export type BrandType = 'whatsapp' | 'telegram' | 'github' | 'instagram' | 'tiktok' | 'email';

export function renderBrandSVG(type: BrandType, className = 'w-5 h-5') {
  const commonClasses = `${className} shrink-0 block`;

  switch (type) {
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="#25D366">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83-1.56 1.56-3.63 2.41-5.83 2.41-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.49-1.41-1.74-.14-.26-.02-.39.11-.52.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.09-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29" />
        </svg>
      );
    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="#24A1DE">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="#FFFFFF">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses}>
          <defs>
            <linearGradient id="ig-clean-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="10%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="65%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#ig-clean-grad)"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses}>
          <path
            fill="#25F4EE"
            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.903 2.879 2.896 2.896 0 0 1-2.895-2.895 2.896 2.896 0 0 1 2.895-2.894c.31 0 .61.05.892.14V9.43a6.34 6.34 0 0 0-.892-.064 6.34 6.34 0 0 0-6.338 6.339 6.34 6.34 0 0 0 6.338 6.338 6.34 6.34 0 0 0 6.339-6.338V8.784a8.196 8.196 0 0 0 4.78 1.527V6.866a4.838 4.838 0 0 1-1.001-.18z"
          />
          <path
            fill="#FE2C55"
            d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-1v2.441a4.793 4.793 0 0 0 3.77 4.245 4.838 4.838 0 0 0 1.001.18V6.866a8.196 8.196 0 0 1-4.78-1.527V15.7a6.34 6.34 0 0 1-6.339 6.338 6.34 6.34 0 0 1-6.338-6.338c0-.306.022-.607.064-.9a6.34 6.34 0 0 0 6.274 5.9 6.34 6.34 0 0 0 6.339-6.338V8.784a8.196 8.196 0 0 0 4.78 1.527V6.866a4.838 4.838 0 0 1-1.001-.18z"
          />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses}>
          <path fill="#4285F4" d="M22 6.5l-10 6.5L2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5z" />
          <path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2l10 6.5L22 6c0-1.1-.9-2-2-2z" />
          <path fill="#FBBC05" d="M2 6.5l4.5 3L2 13V6.5z" />
          <path fill="#34A853" d="M22 6.5l-4.5 3L22 13V6.5z" />
        </svg>
      );
  }
}

export function AppleLiquidGlass({
  profile,
  projects,
  activeRoute,
  onRouteChange,
  onSelectProject,
  onTriggerLoading,
  onOpenLogoStudio,
  onOpenStyleSwitcher,
}: AppleLiquidGlassProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  const [creationsFilter, setCreationsFilter] = useState<'all' | 'webapp' | 'webservice' | 'tools' | 'online'>('all');
  const [ambientGlow, setAmbientGlow] = useState(true);
  const [quickMessage, setQuickMessage] = useState('');

  // Real-time WIB clock with high precision
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' WIB'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      quickMessage.trim() || 'Halo SAN! Saya melihat portofolio kamu dan tertarik untuk berdiskusi seputar proyek.'
    );
    window.open(`https://wa.me/enzvuck?text=${text}`, '_blank');
  };

  // Filtered projects based on user prompt projects
  const filteredProjects = projects.filter((p) => {
    if (creationsFilter === 'all') return true;
    if (creationsFilter === 'webapp') return p.projectType === 'Web Application';
    if (creationsFilter === 'webservice') return p.projectType === 'Web Service';
    if (creationsFilter === 'tools') return p.projectType === 'Developer Tool';
    if (creationsFilter === 'online') return p.status === 'Online';
    return true;
  });

  return (
    <div className="relative min-h-screen bg-[#030306] text-neutral-100 font-sans selection:bg-sky-400 selection:text-black overflow-x-hidden pb-32">
      {/* 1. AMBIENT FLUID LIQUID GLASS LIGHTING */}
      {ambientGlow && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 transition-opacity duration-700">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-sky-500/15 blur-[140px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -35, 0],
              y: [0, 35, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -right-40 w-[580px] h-[580px] rounded-full bg-indigo-600/12 blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              x: [0, 25, 0],
              y: [0, 25, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-32 left-1/3 w-[480px] h-[480px] rounded-full bg-emerald-500/10 blur-[140px]"
          />
        </div>
      )}

      {/* Subtle Specular Dot Matrix Grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* 2. SYSTEM STATUS BAR & TOP NAVIGATION */}
      <header className="sticky top-0 z-40 px-4 sm:px-8 py-3.5 bg-[#030306]/85 backdrop-blur-2xl border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Brand - Single line, non-stacking with bespoke SAN logo */}
          <button
            onClick={() => onRouteChange('overview')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SanLogo size="sm" />
            </motion.div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-sm font-semibold tracking-tight text-white">
                {profile.name}
              </span>
              <span className="text-xs text-neutral-400 font-normal">
                {profile.publicHandle}
              </span>
            </div>
          </button>

          {/* Navigation Links - Single line pills with sliding indicator */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full liquid-glass border border-white/[0.1] relative">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'creations', label: 'Creations' },
              { id: 'identity', label: 'Identity' },
              { id: 'stack', label: 'Stack' },
              { id: 'connect', label: 'Connect' },
            ].map((tab) => {
              const isActive = activeRoute === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onRouteChange(tab.id as AppleRouteId)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isActive ? 'text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAppleTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Control Center Status Pill & Quick Action */}
          <div className="flex items-center gap-2">
            {onOpenStyleSwitcher && (
              <button
                onClick={onOpenStyleSwitcher}
                className="px-3 py-1.5 rounded-full liquid-glass border border-amber-400/40 hover:border-amber-400 text-[11px] font-medium text-amber-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                title="Ganti Style / Desain Tampilan"
              >
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span>Ganti Style</span>
              </button>
            )}

            {onOpenLogoStudio && (
              <button
                onClick={onOpenLogoStudio}
                className="px-3 py-1.5 rounded-full liquid-glass border border-cyan-400/40 hover:border-cyan-400 text-[11px] font-mono text-cyan-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                title="Buka Studio Logo & Animasi"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="hidden sm:inline">Studio Logo</span>
              </button>
            )}

            <button
              onClick={() => setControlCenterOpen(!controlCenterOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/[0.15] hover:border-white/[0.3] text-[11px] font-mono text-neutral-300 transition-all cursor-pointer whitespace-nowrap"
              title="Control Center"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">{currentTime || 'WIB'}</span>
              <span className="text-sky-300 font-medium hidden sm:inline">Active</span>
              <Sliders className="w-3.5 h-3.5 text-neutral-400 ml-0.5" />
            </button>

            <a
              href={profile.contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-full transition-all shadow-sm inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              {renderBrandSVG('whatsapp', 'w-4 h-4')}
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Expandable Control Center Dropdown */}
        <AnimatePresence>
          {controlCenterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="overflow-hidden"
            >
              <div className="max-w-4xl mx-auto mt-4 p-5 rounded-2xl liquid-glass border border-white/[0.18] shadow-2xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                <div className="p-3.5 rounded-xl liquid-glass-subtle border border-white/[0.08] space-y-1">
                  <div className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider whitespace-nowrap">
                    Focus Status
                  </div>
                  <div className="text-white font-medium flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Creative Work</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 whitespace-nowrap">Apps, Services & Tools</div>
                </div>

                <div className="p-3.5 rounded-xl liquid-glass-subtle border border-white/[0.08] space-y-1">
                  <div className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider whitespace-nowrap">
                    Infrastructure
                  </div>
                  <div className="text-white font-medium flex items-center gap-1.5 whitespace-nowrap">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Edge Network</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 whitespace-nowrap">Sub-15ms Latency</div>
                </div>

                <div className="p-3.5 rounded-xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-amber-300 uppercase font-mono tracking-wider whitespace-nowrap">
                      Gaya Desain
                    </div>
                    <div className="text-white font-medium whitespace-nowrap">Ganti Style</div>
                  </div>
                  {onOpenStyleSwitcher && (
                    <button
                      onClick={onOpenStyleSwitcher}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-400 text-black hover:bg-amber-300 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 shadow-sm"
                    >
                      <Palette className="w-3 h-3" />
                      <span>Pilih</span>
                    </button>
                  )}
                </div>

                <div className="p-3.5 rounded-xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider whitespace-nowrap">
                      Studio Logo
                    </div>
                    <div className="text-white font-medium whitespace-nowrap">Foto & Animasi</div>
                  </div>
                  {onOpenLogoStudio && (
                    <button
                      onClick={onOpenLogoStudio}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 shadow-sm"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Atur</span>
                    </button>
                  )}
                </div>

                <div className="p-3.5 rounded-xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider whitespace-nowrap">
                      Ambient Glow
                    </div>
                    <div className="text-white font-medium whitespace-nowrap">Fluid Light</div>
                  </div>
                  <button
                    onClick={() => setAmbientGlow(!ambientGlow)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      ambientGlow ? 'bg-sky-400 text-black' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {ambientGlow ? 'ON' : 'OFF'}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider whitespace-nowrap">
                      Loading
                    </div>
                    <div className="text-white font-medium whitespace-nowrap">Boot Intro</div>
                  </div>
                  {onTriggerLoading && (
                    <button
                      onClick={onTriggerLoading}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1"
                    >
                      <Play className="w-3 h-3" />
                      <span>Putar</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. MAIN ROUTED VIEWS (ZERO TEXT STACKING) */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-8">
        <AnimatePresence mode="wait">
          {/* ========================================================
              ROUTE 1: OVERVIEW (HERO & CLEAN SPATIAL HIGHLIGHTS)
             ======================================================== */}
          {activeRoute === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-16"
            >
              {/* Wide Non-Stacking Hero Container */}
              <div className="pt-6 sm:pt-10 text-center max-w-4xl mx-auto space-y-6">
                {/* Horizontal status pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass text-xs text-neutral-300 whitespace-nowrap shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
                  <span className="font-semibold text-white">{profile.name}</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-sky-300 font-mono">{profile.publicHandle}</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-neutral-300">{profile.education}</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-neutral-300">{profile.location}</span>
                </motion.div>

                {/* Main Headline - Wide, Non-Stacking, Natural Proportions */}
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Full-Stack Developer & UI/UX Designer
                  </h1>
                  <p className="text-sm sm:text-base text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed">
                    {profile.shortBio}
                  </p>
                </div>

                {/* Horizontal Metadata Row - No Stacking Words */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <div className="px-4 py-2 rounded-full liquid-glass flex items-center gap-2 whitespace-nowrap text-xs">
                    <span className="text-neutral-400">Primary Role:</span>
                    <span className="font-semibold text-white">{profile.title}</span>
                  </div>

                  <div className="px-4 py-2 rounded-full liquid-glass flex items-center gap-2 whitespace-nowrap text-xs">
                    <span className="text-neutral-400">Education:</span>
                    <span className="font-semibold text-white">{profile.education}</span>
                  </div>

                  <div className="px-4 py-2 rounded-full liquid-glass flex items-center gap-2 whitespace-nowrap text-xs">
                    <span className="text-neutral-400">Location:</span>
                    <span className="font-semibold text-white">{profile.location}</span>
                  </div>

                  <div className="px-4 py-2 rounded-full liquid-glass flex items-center gap-2 whitespace-nowrap text-xs">
                    <span className="text-neutral-400">Status:</span>
                    <span className="font-semibold text-emerald-400">Available for Projects</span>
                  </div>
                </div>

                {/* Action Buttons with Spring Micro-interactions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onRouteChange('creations')}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <span>Lihat Semua Karya</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={profile.contactLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-white liquid-glass hover:bg-white/[0.08] transition-all inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    {renderBrandSVG('whatsapp', 'w-4 h-4')}
                    <span>Chat WhatsApp</span>
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleCopyEmail}
                    className="px-5 py-2.5 rounded-full text-xs font-medium text-neutral-300 liquid-glass hover:text-white transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-amber-400" />}
                    <span>{copiedEmail ? 'Email Disalin!' : profile.email}</span>
                  </motion.button>
                </div>
              </div>

              {/* Spatial Glass Device Showcase with 3D Tilt */}
              <div className="max-w-4xl mx-auto">
                <TiltCard maxTilt={6} className="rounded-3xl p-2 liquid-glass border border-white/[0.14] group shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-neutral-950">
                    <img
                      src="/src/assets/images/drpnest_utility_platform_1790504857806.jpg"
                      alt="SAN Digital Studio & Project Architecture"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="font-semibold">DRPNEST & MeloFy · Digital Utility & Audio Ecosystem</span>
                      </div>
                      <span className="font-mono text-neutral-400 whitespace-nowrap">SAN Creator Lab</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Featured Creations Showcase (DRPNEST, MeloFy, NETKUY) */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono uppercase text-sky-400 whitespace-nowrap">Featured Works</div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white whitespace-nowrap">Karya & Proyek Terpilih</h2>
                  </div>
                  <button
                    onClick={() => onRouteChange('creations')}
                    className="text-xs text-sky-400 hover:text-white flex items-center gap-1 cursor-pointer whitespace-nowrap font-medium"
                  >
                    <span>Buka Semua Proyek</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects.slice(0, 3).map((proj, idx) => (
                    <motion.div
                      key={proj.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      whileHover={{ y: -4 }}
                      onClick={() => onSelectProject(proj)}
                      className="group p-5 rounded-3xl liquid-glass border border-white/[0.12] hover:border-white/[0.24] transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3.5">
                        <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/[0.1] relative">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                          />
                          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                            {proj.status === 'Online' ? (
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-medium flex items-center gap-1 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Online
                              </span>
                            ) : (
                              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-mono font-medium flex items-center gap-1 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                                Dev
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-[11px] text-sky-400 font-mono whitespace-nowrap">{proj.projectType}</div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
                            {proj.title}
                          </h3>
                          <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-2">
                            {proj.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                        <span className="font-mono text-emerald-400 text-[11px] font-medium whitespace-nowrap">
                          {proj.status === 'Online' ? 'Active' : 'In Progress'}
                        </span>
                        <span className="text-sky-400 flex items-center gap-1 font-medium whitespace-nowrap group-hover:translate-x-0.5 transition-transform text-[11px]">
                          <span>Detail</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Creative Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-6 rounded-3xl liquid-glass border border-white/[0.1] space-y-2">
                  <div className="w-10 h-10 rounded-2xl liquid-glass-subtle border border-white/[0.12] flex items-center justify-center text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">UI/UX & Prototyping</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Eksplorasi antarmuka intuitif dengan Figma, desain sistem terstruktur, dan interaksi taktil.
                  </p>
                </div>

                <div className="p-6 rounded-3xl liquid-glass border border-white/[0.1] space-y-2">
                  <div className="w-10 h-10 rounded-2xl liquid-glass-subtle border border-white/[0.12] flex items-center justify-center text-sky-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Full-Stack Development</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Membangun website modern responsif dengan HTML, CSS, TS, serta logika backend Node.js dan Kotlin.
                  </p>
                </div>

                <div className="p-6 rounded-3xl liquid-glass border border-white/[0.1] space-y-2">
                  <div className="w-10 h-10 rounded-2xl liquid-glass-subtle border border-white/[0.12] flex items-center justify-center text-emerald-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Developer Tools & Systems</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Alur kerja coding fleksibel di Linux & Termux Android, terintegrasi ke GitHub, Vercel, dan Cloudflare.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 2: CREATIONS (5 REAL PROJECTS FROM PROMPT)
             ======================================================== */}
          {activeRoute === 'creations' && (
            <motion.div
              key="creations"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-sky-400 whitespace-nowrap">Projects Archive</div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white whitespace-nowrap">
                    Semua Proyek & Karya Digital
                  </h2>
                </div>

                {/* Filter Tabs with animated active pill */}
                <div className="flex items-center gap-1 p-1 rounded-full liquid-glass border border-white/[0.1] overflow-x-auto relative">
                  {[
                    { id: 'all', label: 'Semua (5)' },
                    { id: 'webapp', label: 'Web Apps' },
                    { id: 'webservice', label: 'Services' },
                    { id: 'tools', label: 'Dev Tools' },
                    { id: 'online', label: 'Online' },
                  ].map((f) => {
                    const isSelected = creationsFilter === f.id;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setCreationsFilter(f.id as any)}
                        className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                          isSelected ? 'text-black font-semibold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="creationsFilterPill"
                            className="absolute inset-0 bg-white rounded-full shadow-sm"
                            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10">{f.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((proj, idx) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-3xl liquid-glass border border-white/[0.12] hover:border-white/[0.24] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Image preview */}
                      <div
                        onClick={() => onSelectProject(proj)}
                        className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/[0.1] relative cursor-pointer"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-2">
                          {proj.status === 'Online' ? (
                            <span className="px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 text-[11px] font-mono font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Online
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full bg-sky-500/25 text-sky-200 border border-sky-400/40 text-[11px] font-mono font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-sm">
                              <span className="w-2 h-2 rounded-full bg-sky-400" />
                              Development
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-neutral-400">
                          <span className="text-sky-400 font-mono whitespace-nowrap">{proj.projectType}</span>
                          <span className="font-mono text-neutral-400">{proj.year}</span>
                        </div>
                        <h3
                          onClick={() => onSelectProject(proj)}
                          className="text-xl font-semibold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                        >
                          {proj.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                          {proj.description}
                        </p>
                      </div>

                      {/* Tech Stack tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md liquid-glass-subtle border border-white/[0.08] text-[10px] text-neutral-300 font-mono whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3 text-xs">
                      {proj.projectDomain ? (
                        <a
                          href={proj.projectDomain}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 font-mono font-medium flex items-center gap-1 whitespace-nowrap"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{proj.projectDomain.replace('https://', '')}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      ) : (
                        <span className="text-neutral-400 font-mono text-[11px]">Dalam Pengembangan</span>
                      )}

                      <button
                        onClick={() => onSelectProject(proj)}
                        className="text-sky-400 hover:text-white font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform whitespace-nowrap cursor-pointer"
                      >
                        <span>Studi Kasus</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 3: IDENTITY (PERSONAL CREATOR PROFILE)
             ======================================================== */}
          {activeRoute === 'identity' && (
            <motion.div
              key="identity"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="max-w-3xl space-y-1">
                <div className="text-xs font-mono uppercase text-sky-400 whitespace-nowrap">Personal Identity</div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white whitespace-nowrap">
                  Profil & Identitas Kreator SAN
                </h2>
              </div>

              {/* Main Identity Box with Bespoke SAN Logo & Clean Layout */}
              <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-white/[0.14] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                    onClick={() => (onOpenLogoStudio ? onOpenLogoStudio() : onTriggerLoading && onTriggerLoading())}
                    title="Klik untuk membuka Studio Logo & Animasi"
                  >
                    <SanLogo
                      size="xl"
                      animated={true}
                      interactive={true}
                    />
                  </motion.div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-2xl font-bold text-white tracking-tight">{profile.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[11px] font-mono text-sky-400 font-medium">
                        Creator Identity
                      </span>
                      {onOpenLogoStudio && (
                        <button
                          onClick={onOpenLogoStudio}
                          className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 text-[10px] font-mono hover:bg-cyan-400/30 transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Studio Logo</span>
                        </button>
                      )}
                    </div>
                    <div className="text-xs text-neutral-300 font-mono whitespace-nowrap flex items-center gap-2">
                      <span>Username: <span className="text-white font-medium">{profile.username}</span></span>
                      <span className="text-neutral-600">·</span>
                      <span>Handle: <span className="text-sky-300 font-medium">{profile.publicHandle}</span></span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  <p className="p-4 rounded-2xl liquid-glass-subtle border border-white/[0.08]">
                    {profile.fullBio}
                  </p>
                  <p>
                    {profile.shortBio}
                  </p>
                </div>

                {/* Horizontal Information Rows - Anti-Stacking */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl liquid-glass-subtle flex items-center gap-3">
                    <User className="w-5 h-5 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-400 whitespace-nowrap">Primary Role</div>
                      <div className="text-sm font-semibold text-white whitespace-nowrap">{profile.title}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl liquid-glass-subtle flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-400 whitespace-nowrap">Education</div>
                      <div className="text-sm font-semibold text-white whitespace-nowrap">{profile.education}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl liquid-glass-subtle flex items-center gap-3">
                    <Radio className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-400 whitespace-nowrap">Location</div>
                      <div className="text-sm font-semibold text-white whitespace-nowrap">{profile.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Focus Areas - Wide horizontal pills */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Area Kreatif & Fokus Tambahan</h3>
                <div className="flex flex-wrap gap-2.5">
                  {profile.additionalAreas.map((area, idx) => (
                    <motion.div
                      key={area}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="px-4 py-2 rounded-full liquid-glass border border-white/[0.1] flex items-center gap-2 whitespace-nowrap text-xs transition-colors"
                    >
                      <span className="font-mono text-sky-400 text-[11px]">0{idx + 1}</span>
                      <span className="font-medium text-neutral-200">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Primary Skills & Additional Interests */}
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-semibold text-white">Keahlian Utama & Minat Teknologi</h3>
                <div className="flex flex-wrap gap-2.5">
                  {profile.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="px-4 py-2 rounded-full liquid-glass border border-white/[0.14] text-xs font-semibold text-white whitespace-nowrap shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                  {['APIs', 'Web Applications', 'Developer Tools', 'Digital Product Development', 'Software Development'].map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="px-4 py-2 rounded-full liquid-glass-subtle border border-white/[0.08] text-xs font-normal text-neutral-300 whitespace-nowrap"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 4: STACK (CLEAN HIG TOOLS & TECH)
             ======================================================== */}
          {activeRoute === 'stack' && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="max-w-3xl space-y-1">
                <div className="text-xs font-mono uppercase text-sky-400 whitespace-nowrap">Tools & Technologies</div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white whitespace-nowrap">
                  Alat Desain & Lingkungan Pengembangan
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Design */}
                <div className="p-6 rounded-3xl liquid-glass border border-white/[0.12] space-y-4">
                  <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                    <Layers className="w-5 h-5 text-purple-400 shrink-0" />
                    <span className="whitespace-nowrap">Design & Prototyping</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    Wireframing, komponen design system, dan prototipe interaktif resolusi tinggi.
                  </p>
                  <div className="space-y-2 pt-1">
                    {profile.tools.design.map((tool) => (
                      <motion.div
                        key={tool}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="p-3.5 rounded-2xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between text-xs"
                      >
                        <span className="font-semibold text-white whitespace-nowrap">{tool}</span>
                        <span className="text-[11px] text-purple-300 font-mono whitespace-nowrap">Interface & UI/UX</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 2. Development */}
                <div className="p-6 rounded-3xl liquid-glass border border-white/[0.12] space-y-4">
                  <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                    <Code2 className="w-5 h-5 text-sky-400 shrink-0" />
                    <span className="whitespace-nowrap">Languages & Frameworks</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    Frontend interaktif, logika aplikasi, dan backend serverless microservices.
                  </p>
                  <div className="space-y-2 pt-1">
                    {profile.tools.development.map((tool) => (
                      <motion.div
                        key={tool}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="p-3.5 rounded-2xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between text-xs"
                      >
                        <span className="font-semibold text-white whitespace-nowrap">{tool}</span>
                        <span className="text-[11px] text-sky-300 font-mono whitespace-nowrap">Active Stack</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 3. Systems & Tools */}
                <div className="p-6 rounded-3xl liquid-glass border border-white/[0.12] space-y-4">
                  <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                    <Cpu className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="whitespace-nowrap">Development Tools & Systems</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    Editor kode, ekosistem Linux, Termux di Android, dan infrastruktur cloud modern.
                  </p>
                  <div className="space-y-2 pt-1">
                    {profile.tools.tools.map((tool) => (
                      <motion.div
                        key={tool}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="p-3.5 rounded-2xl liquid-glass-subtle border border-white/[0.08] flex items-center justify-between text-xs"
                      >
                        <span className="font-semibold text-white whitespace-nowrap">{tool}</span>
                        <span className="text-[11px] text-emerald-300 font-mono whitespace-nowrap">Production Ready</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 5: CONNECT (PERFECTLY ALIGNED FULL-COLOR SVGs)
             ======================================================== */}
          {activeRoute === 'connect' && (
            <motion.div
              key="connect"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="max-w-3xl space-y-1">
                <div className="text-xs font-mono uppercase text-sky-400 whitespace-nowrap">Direct Reach</div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white whitespace-nowrap">
                  Hubungi SAN
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Tersedia untuk proyek digital, antarmuka web, software, dan eksplorasi teknologi.
                </p>
              </div>

              {/* Fast WhatsApp Direct Message Box */}
              <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-white/[0.14] space-y-4">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm whitespace-nowrap">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {renderBrandSVG('whatsapp', 'w-5 h-5')}
                  </div>
                  <span>Kirim Pesan Langsung ke WhatsApp SAN</span>
                </div>

                <form onSubmit={handleSendWhatsApp} className="space-y-3">
                  <textarea
                    rows={2}
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder="Halo SAN! Saya tertarik untuk membahas proyek desain antarmuka / website..."
                    className="w-full p-4 rounded-2xl bg-black/40 border border-white/[0.12] text-xs sm:text-sm text-white outline-none focus:border-emerald-400 resize-none placeholder:text-neutral-500"
                  />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-[11px] text-neutral-400 whitespace-nowrap">
                      Pesan akan langsung membuka aplikasi WhatsApp
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-black bg-[#25D366] hover:bg-[#20ba59] transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim ke WhatsApp</span>
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* FULL-COLOR AUTHENTIC BRAND SVG CONTACT CARDS - OPTICAL VERTICAL ALIGNMENT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. WhatsApp 1 */}
                <motion.a
                  whileHover={{ scale: 1.015, y: -2 }}
                  href={profile.contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/10">
                      {renderBrandSVG('whatsapp', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#25D366] whitespace-nowrap">WhatsApp 1</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] font-medium whitespace-nowrap">Utama</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">wa.me/enzvuck</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </motion.a>

                {/* 2. WhatsApp 2 */}
                <motion.a
                  whileHover={{ scale: 1.015, y: -2 }}
                  href={profile.contactLinks.whatsapp2}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/10">
                      {renderBrandSVG('whatsapp', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#25D366] whitespace-nowrap">WhatsApp 2</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] font-medium whitespace-nowrap">Cadangan</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">wa.me/enzuvk</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </motion.a>

                {/* 3. Telegram */}
                <motion.a
                  whileHover={{ scale: 1.015, y: -2 }}
                  href={profile.contactLinks.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#24A1DE]/15 border border-[#24A1DE]/30 flex items-center justify-center shrink-0 shadow-lg shadow-[#24A1DE]/10">
                      {renderBrandSVG('telegram', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#24A1DE] whitespace-nowrap">Telegram</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#24A1DE]/20 text-[#24A1DE] font-medium whitespace-nowrap">Direct Chat</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">t.me/enzvuck</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </motion.a>

                {/* 4. GitHub */}
                <motion.a
                  whileHover={{ scale: 1.015, y: -2 }}
                  href={profile.contactLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                      {renderBrandSVG('github', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white whitespace-nowrap">GitHub</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 font-medium whitespace-nowrap">Repositories</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">github.com/senaczk</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </motion.a>

                {/* 5. Instagram */}
                <motion.a
                  whileHover={{ scale: 1.015, y: -2 }}
                  href={profile.contactLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/10">
                      {renderBrandSVG('instagram', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-pink-400 whitespace-nowrap">Instagram</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-medium whitespace-nowrap">Visual Media</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">@v1enzyk</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </motion.a>

                {/* 6. TikTok */}
                <motion.a
                  whileHover={{ scale: 1.015, y: -2 }}
                  href={profile.contactLinks.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                      {renderBrandSVG('tiktok', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#25F4EE] whitespace-nowrap">TikTok</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#25F4EE]/10 text-[#25F4EE] font-medium whitespace-nowrap">Shorts & Media</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">@_enzyk</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </motion.a>

                {/* 7. Email - Spans 2 Columns for spacious horizontal comfort */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  onClick={handleCopyEmail}
                  className="sm:col-span-2 p-4 rounded-2xl liquid-glass hover:bg-white/[0.08] transition-all border border-white/[0.12] flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/15 border border-red-400/30 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/10">
                      {renderBrandSVG('email', 'w-6 h-6')}
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-red-400 whitespace-nowrap">Email Resmi</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-medium whitespace-nowrap">Direct Mail</span>
                      </div>
                      <span className="text-sm font-medium text-white truncate whitespace-nowrap mt-0.5">{profile.email}</span>
                    </div>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full liquid-glass text-xs text-neutral-300 font-medium group-hover:text-white transition-colors shrink-0 whitespace-nowrap">
                    {copiedEmail ? 'Tersalin!' : 'Salin Email'}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. FLOATING GLASS DOCK (BOTTOM CENTER) - OPTICALLY PERFECTED */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl liquid-glass border border-white/[0.16] shadow-2xl flex items-center gap-1.5 sm:gap-2">
        {[
          {
            id: 'overview',
            icon: <SanLogo size="xs" />,
            label: 'Overview',
          },
          { id: 'creations', icon: <Layers className="w-4 h-4 text-sky-400" />, label: 'Creations' },
          { id: 'identity', icon: <User className="w-4 h-4 text-indigo-400" />, label: 'Identity' },
          { id: 'stack', icon: <Cpu className="w-4 h-4 text-emerald-400" />, label: 'Stack' },
          { id: 'connect', icon: <Smartphone className="w-4 h-4 text-amber-400" />, label: 'Connect' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onRouteChange(item.id as AppleRouteId)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all hover:scale-110 relative cursor-pointer flex items-center justify-center ${
              activeRoute === item.id
                ? 'bg-white/[0.18] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.08]'
            }`}
            title={item.label}
          >
            {item.icon}
            {activeRoute === item.id && (
              <motion.span
                layoutId="activeDockDot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
              />
            )}
          </button>
        ))}

        <div className="w-px h-5 bg-white/15 mx-0.5" />

        {/* Brand SVG Shortcuts in Dock - Perfectly Aligned and Sized */}
        <a
          href={profile.contactLinks.github}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl hover:bg-white/[0.08] transition-all hover:scale-110 flex items-center justify-center"
          title="GitHub"
        >
          {renderBrandSVG('github', 'w-4 h-4 sm:w-5 sm:h-5')}
        </a>

        <a
          href={profile.contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl hover:bg-white/[0.08] transition-all hover:scale-110 flex items-center justify-center"
          title="WhatsApp"
        >
          {renderBrandSVG('whatsapp', 'w-4 h-4 sm:w-5 sm:h-5')}
        </a>

        <a
          href={profile.contactLinks.telegram}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl hover:bg-white/[0.08] transition-all hover:scale-110 flex items-center justify-center"
          title="Telegram"
        >
          {renderBrandSVG('telegram', 'w-4 h-4 sm:w-5 sm:h-5')}
        </a>
      </div>

      {/* 5. FOOTER - STRICTLY NO IPHONE/APPLE BRANDING & NO DOMAIN MENTION */}
      <footer className="relative z-10 px-4 sm:px-8 py-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 max-w-6xl mx-auto gap-4 mt-16">
        <div className="whitespace-nowrap">
          © 2026 {profile.name} ({profile.publicHandle}) · All Rights Reserved
        </div>
        <div className="flex items-center gap-2 text-neutral-400 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Tersedia untuk Proyek Kreatif & Eksperimen Digital</span>
        </div>
      </footer>
    </div>
  );
}
