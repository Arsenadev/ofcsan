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
  Copy,
  Terminal,
  Zap,
  Star,
  Smile,
  Tag,
  Sticker,
  Bookmark,
  Pin,
} from 'lucide-react';
import { PortfolioProfile, Project } from '../../types/portfolio';
import { SanLogo } from '../shared/SanLogo';
import { renderBrandSVG } from './AppleLiquidGlass';
import { AppleRouteId } from './AppleLiquidGlass';

interface NeoBrutalistSoftProps {
  profile: PortfolioProfile;
  projects: Project[];
  activeRoute?: AppleRouteId;
  onRouteChange?: (route: AppleRouteId) => void;
  onSelectProject: (project: Project) => void;
  onOpenStyleSwitcher?: () => void;
}

export function NeoBrutalistSoft({
  profile,
  projects,
  activeRoute: controlledRoute,
  onRouteChange: controlledRouteChange,
  onSelectProject,
  onOpenStyleSwitcher,
}: NeoBrutalistSoftProps) {
  const [internalRoute, setInternalRoute] = useState<AppleRouteId>('overview');
  const activeRoute = controlledRoute || internalRoute;
  const onRouteChange = controlledRouteChange || setInternalRoute;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [creationsFilter, setCreationsFilter] = useState<'all' | 'webapp' | 'webservice' | 'tools' | 'online'>('all');
  const [quickMessage, setQuickMessage] = useState('');

  // Real-time WIB clock
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

  // Filtered projects
  const filteredProjects = projects.filter((p) => {
    if (creationsFilter === 'all') return true;
    if (creationsFilter === 'webapp') return p.projectType === 'Web Application';
    if (creationsFilter === 'webservice') return p.projectType === 'Web Service';
    if (creationsFilter === 'tools') return p.projectType === 'Developer Tool';
    if (creationsFilter === 'online') return p.status === 'Online';
    return true;
  });

  return (
    <div className="relative min-h-screen bg-[#111116] text-neutral-100 font-sans selection:bg-amber-400 selection:text-black overflow-x-hidden pb-32">
      {/* 1. DARK PAPER & CLAY SKETCHBOOK SUBTLE BACKGROUND */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(#525266 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative Clay Ambient Glows in Dark Space */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-600/12 blur-[130px]" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* 2. TOP BAR CONTRACT WITH DARK CLAY & PAPER MOTIF */}
      <header className="sticky top-0 z-40 px-4 sm:px-8 py-3.5 bg-[#171720]/90 backdrop-blur-xl border-b-2 border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Brand - Single line, non-stacking with bespoke SAN logo */}
          <button
            onClick={() => onRouteChange('overview')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 rounded-2xl bg-amber-400 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000] relative overflow-hidden shrink-0"
              style={{
                boxShadow: '3px 3px 0px #000000, inset 2px 2px 4px rgba(255,255,255,0.7), inset -2px -2px 4px rgba(0,0,0,0.2)',
              }}
            >
              <SanLogo size="xs" />
            </motion.div>
            <div className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-base font-black tracking-tight font-syne text-white uppercase">
                {profile.name}
              </span>
              <span className="text-xs text-amber-300 font-mono font-bold">
                {profile.publicHandle}
              </span>
            </div>
          </button>

          {/* Navigation Links - Dark Paper pill tabs with clay sliding indicator */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-[#0f0f14] border-2 border-neutral-700 shadow-[3px_3px_0px_#000000] relative">
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
                  className={`relative px-4 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-colors cursor-pointer ${
                    isActive ? 'text-neutral-950' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDarkNeoTab"
                      className="absolute inset-0 bg-amber-400 rounded-xl border border-black shadow-[1px_1px_0px_#000]"
                      style={{
                        boxShadow: '1px 1px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.8)',
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Top Actions: Ganti Style & WhatsApp Button */}
          <div className="flex items-center gap-2">
            {onOpenStyleSwitcher && (
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.96, y: 2 }}
                onClick={onOpenStyleSwitcher}
                className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-purple-300 hover:bg-purple-200 text-neutral-950 border-2 border-black transition-all cursor-pointer flex items-center gap-1.5 shadow-[3px_3px_0px_#000000] whitespace-nowrap"
                style={{
                  boxShadow: '3px 3px 0px #000000, inset 1px 1px 3px rgba(255,255,255,0.8)',
                }}
                title="Ganti Style / Desain Tampilan"
              >
                <Palette className="w-3.5 h-3.5 text-purple-950" />
                <span>Ganti Style</span>
              </motion.button>
            )}

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#1c1c24] border-2 border-neutral-700 text-[11px] font-mono font-bold text-neutral-200 shadow-[2px_2px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{currentTime || 'WIB'}</span>
            </div>

            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96, y: 2 }}
              href={profile.contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 text-xs font-black text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000000] transition-all inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              style={{
                boxShadow: '3px 3px 0px #000000, inset 1px 1px 3px rgba(255,255,255,0.8)',
              }}
            >
              {renderBrandSVG('whatsapp', 'w-3.5 h-3.5')}
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* 3. MAIN ROUTED VIEWS (MIRRORING STRUCTURE WITH DARK CLAY & HIGH-CONTRAST ACCENTS) */}
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
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Wide Non-Stacking Hero Container with Dark Paper & Clay Touch */}
              <div className="relative pt-6 sm:pt-10 text-center max-w-4xl mx-auto space-y-6">
                {/* Washi Paper Tape Top Decor */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-400/20 border-dashed border border-amber-400/50 rotate-[-1.5deg] shadow-sm pointer-events-none -z-10 rounded-sm" />

                {/* Horizontal status pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1c1c24] border-2 border-neutral-700 text-xs font-bold text-neutral-200 whitespace-nowrap shadow-[3px_3px_0px_#000000]"
                  style={{
                    boxShadow: '3px 3px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.15)',
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="font-black text-white">{profile.name}</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-amber-300 font-mono font-bold">{profile.publicHandle}</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-neutral-300">{profile.education}</span>
                  <span aria-hidden="true" className="text-neutral-500">·</span>
                  <span className="text-neutral-300">{profile.location}</span>
                </motion.div>

                {/* Main Headline - Bold, Crisp Contrast */}
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black font-syne tracking-tight text-white leading-tight">
                    Full-Stack Developer & <span className="bg-amber-400 text-neutral-950 px-3 py-0.5 rounded-2xl border-2 border-black inline-block rotate-[-1deg] shadow-[3px_3px_0px_#000000]">UI/UX Designer</span>
                  </h1>
                  <p className="text-sm sm:text-base text-neutral-300 font-medium max-w-3xl mx-auto leading-relaxed">
                    {profile.shortBio}
                  </p>
                </div>

                {/* Horizontal Metadata Row - Dark Clay Pill Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <div
                    className="px-4 py-2 rounded-2xl bg-[#1c1c24] border-2 border-neutral-700 flex items-center gap-2 whitespace-nowrap text-xs font-bold shadow-[3px_3px_0px_#000000]"
                    style={{
                      boxShadow: '3px 3px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="text-neutral-400 font-medium">Primary Role:</span>
                    <span className="font-black text-amber-300">{profile.title}</span>
                  </div>

                  <div
                    className="px-4 py-2 rounded-2xl bg-[#1c1c24] border-2 border-neutral-700 flex items-center gap-2 whitespace-nowrap text-xs font-bold shadow-[3px_3px_0px_#000000]"
                    style={{
                      boxShadow: '3px 3px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="text-neutral-400 font-medium">Education:</span>
                    <span className="font-black text-purple-300">{profile.education}</span>
                  </div>

                  <div
                    className="px-4 py-2 rounded-2xl bg-[#1c1c24] border-2 border-neutral-700 flex items-center gap-2 whitespace-nowrap text-xs font-bold shadow-[3px_3px_0px_#000000]"
                    style={{
                      boxShadow: '3px 3px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="text-neutral-400 font-medium">Location:</span>
                    <span className="font-black text-emerald-300">{profile.location}</span>
                  </div>
                </div>

                {/* Quick Action Navigation Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    onClick={() => onRouteChange('creations')}
                    className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000000] transition-all cursor-pointer flex items-center gap-2"
                    style={{
                      boxShadow: '4px 4px 0px #000000, inset 2px 2px 4px rgba(255,255,255,0.7)',
                    }}
                  >
                    <span>Buka Semua Proyek</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-950" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    onClick={() => onRouteChange('identity')}
                    className="px-6 py-3 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] text-white font-black text-xs uppercase tracking-wider border-2 border-neutral-700 shadow-[4px_4px_0px_#000000] transition-all cursor-pointer flex items-center gap-2"
                    style={{
                      boxShadow: '4px 4px 0px #000000, inset 2px 2px 4px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span>Profil & Identitas</span>
                    <User className="w-4 h-4 text-neutral-300" />
                  </motion.button>
                </div>
              </div>

              {/* Bento Quick Highlights in Dark Clay & Paper Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* 1. DRPNEST Snapshot */}
                <div
                  className="p-6 rounded-3xl bg-[#1c1a24] border-2 border-amber-400/40 shadow-[5px_5px_0px_#000000] relative flex flex-col justify-between group transition-all"
                  style={{
                    boxShadow: '5px 5px 0px #000000, inset 1px 1px 3px rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-xl bg-amber-400 text-neutral-950 border border-black text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                        Utility Suite
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-400">2026</span>
                    </div>
                    <h3 className="text-2xl font-black font-syne text-white uppercase">DRPNEST</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                      Layanan utilitas digital terpadu: paste sharing, file & media hosting, integrasi GitHub, dan URL shortener.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 font-mono">drpnest.web.id</span>
                    <button
                      onClick={() => {
                        const proj = projects.find((p) => p.id === 'drpnest');
                        if (proj) onSelectProject(proj);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border-2 border-neutral-600 text-xs font-black shadow-[2px_2px_0px_#000] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Detail</span>
                      <ArrowUpRight className="w-3 h-3 text-amber-300" />
                    </button>
                  </div>
                </div>

                {/* 2. MeloFy Snapshot */}
                <div
                  className="p-6 rounded-3xl bg-[#1e1a29] border-2 border-purple-400/40 shadow-[5px_5px_0px_#000000] relative flex flex-col justify-between group transition-all"
                  style={{
                    boxShadow: '5px 5px 0px #000000, inset 1px 1px 3px rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-xl bg-purple-300 text-neutral-950 border border-black text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                        Music Streaming
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/50">
                        ● Online
                      </span>
                    </div>
                    <h3 className="text-2xl font-black font-syne text-white uppercase">MeloFy</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                      Platform pemutar musik online modern yang ringan dengan pengalaman audio interaktif.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 font-mono">melofy.senzy.xyz</span>
                    <button
                      onClick={() => {
                        const proj = projects.find((p) => p.id === 'melofy');
                        if (proj) onSelectProject(proj);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border-2 border-neutral-600 text-xs font-black shadow-[2px_2px_0px_#000] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Detail</span>
                      <ArrowUpRight className="w-3 h-3 text-purple-300" />
                    </button>
                  </div>
                </div>

                {/* 3. NETKUY Snapshot */}
                <div
                  className="p-6 rounded-3xl bg-[#16201a] border-2 border-emerald-400/40 shadow-[5px_5px_0px_#000000] relative flex flex-col justify-between group transition-all"
                  style={{
                    boxShadow: '5px 5px 0px #000000, inset 1px 1px 3px rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-xl bg-emerald-300 text-neutral-950 border border-black text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                        Subdomain Service
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/50">
                        ● Online
                      </span>
                    </div>
                    <h3 className="text-2xl font-black font-syne text-white uppercase">NETKUY</h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                      Layanan subdomain gratis yang memudahkan publik dan developer mendeploy situs web mereka.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300 font-mono">netkuy.biz.id</span>
                    <button
                      onClick={() => {
                        const proj = projects.find((p) => p.id === 'netkuy');
                        if (proj) onSelectProject(proj);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border-2 border-neutral-600 text-xs font-black shadow-[2px_2px_0px_#000] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Detail</span>
                      <ArrowUpRight className="w-3 h-3 text-emerald-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 2: CREATIONS (FULL 5 SAN PROJECTS & CASE STUDIES)
             ======================================================== */}
          {activeRoute === 'creations' && (
            <motion.div
              key="creations"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Filter Section */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-800 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-neutral-950 border border-black text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#000]">
                    <Layers className="w-3.5 h-3.5 text-neutral-950" />
                    <span>Selected Works</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black font-syne uppercase tracking-tight text-white">
                    Koleksi Proyek Digital SAN
                  </h2>
                  <p className="text-sm text-neutral-300 font-medium mt-1">
                    Kumpulan aplikasi web, layanan mandiri, dan developer tools karya SAN (@ofcsan).
                  </p>
                </div>

                {/* Filter Tabs in Dark Clay Segment */}
                <div className="flex items-center gap-1.5 p-1.5 bg-[#171720] rounded-2xl border-2 border-neutral-700 shadow-[3px_3px_0px_#000000] overflow-x-auto">
                  {[
                    { id: 'all', label: 'Semua (5)' },
                    { id: 'webapp', label: 'Web Apps' },
                    { id: 'webservice', label: 'Web Service' },
                    { id: 'tools', label: 'Dev Tools' },
                    { id: 'online', label: '🟢 Online' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setCreationsFilter(t.id as any)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                        creationsFilter === t.id
                          ? 'bg-amber-400 text-neutral-950 shadow-sm border border-black'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Projects in Dark Clay & Paper Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, idx) => {
                  const bgTints = [
                    'bg-[#1c1a24] border-amber-400/40',
                    'bg-[#1e1a29] border-purple-400/40',
                    'bg-[#16201a] border-emerald-400/40',
                    'bg-[#161c26] border-sky-400/40',
                    'bg-[#22171c] border-pink-400/40',
                  ];
                  const cardBorder = bgTints[idx % bgTints.length];

                  const badgeColors = [
                    'bg-amber-400 text-neutral-950',
                    'bg-purple-300 text-neutral-950',
                    'bg-emerald-300 text-neutral-950',
                    'bg-sky-300 text-neutral-950',
                    'bg-pink-300 text-neutral-950',
                  ];
                  const badgeStyle = badgeColors[idx % badgeColors.length];

                  return (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -4 }}
                      className={`p-6 rounded-3xl ${cardBorder} border-2 shadow-[5px_5px_0px_#000000] flex flex-col justify-between transition-all group relative`}
                      style={{
                        boxShadow: '5px 5px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.08)',
                      }}
                    >
                      {/* Decorative Paper Tape on Card */}
                      <div className="absolute -top-2.5 right-6 w-16 h-5 bg-amber-400/20 border-dashed border border-amber-400/40 rotate-[2deg] pointer-events-none rounded-sm" />

                      <div className="space-y-4">
                        {/* Header Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className={`px-3 py-1 rounded-xl ${badgeStyle} border border-black text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#000]`}>
                            {project.category}
                          </span>
                          {project.status && (
                            <span
                              className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-full border ${
                                project.status === 'Online'
                                  ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/50'
                                  : 'bg-amber-950/70 text-amber-300 border-amber-500/50'
                              }`}
                            >
                              {project.status === 'Online' ? '● Online' : '⚙️ Dev'}
                            </span>
                          )}
                        </div>

                        {/* Image Preview Container */}
                        <div
                          onClick={() => onSelectProject(project)}
                          className="relative h-44 rounded-2xl border-2 border-neutral-700 overflow-hidden bg-neutral-950 cursor-pointer group-hover:scale-[1.01] transition-transform"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                            <span className="text-xs font-bold text-white bg-neutral-900/95 px-3 py-1.5 rounded-xl border border-white/30 backdrop-blur-sm flex items-center gap-1.5">
                              <span>Buka Case Study</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1.5">
                          <div className="flex items-baseline justify-between">
                            <h3 className="text-2xl font-black font-syne uppercase tracking-tight text-white">
                              {project.title}
                            </h3>
                            <span className="text-xs font-mono font-bold text-neutral-400">
                              {project.year}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-300 font-medium line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-lg bg-[#252532] border border-neutral-700 text-[11px] font-bold text-neutral-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions Footer */}
                      <div className="pt-5 mt-5 border-t-2 border-neutral-800 flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="px-3.5 py-2 rounded-xl text-xs font-black bg-neutral-800 hover:bg-neutral-700 text-white border-2 border-neutral-600 shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <span>Detail Proyek</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
                        </button>

                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-2 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-neutral-950 border-2 border-black shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer flex items-center gap-1.5"
                          >
                            <span>Kunjungi</span>
                            <ExternalLink className="w-3 h-3 text-neutral-950" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 3: IDENTITY (BIOGRAPHY, PERSONA, PHILOSOPHY)
             ======================================================== */}
          {activeRoute === 'identity' && (
            <motion.div
              key="identity"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div
                className="p-8 rounded-3xl bg-[#1c1c26] border-2 border-neutral-700 shadow-[6px_6px_0px_#000000] space-y-8 relative"
                style={{
                  boxShadow: '6px 6px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.08)',
                }}
              >
                {/* Header Badge */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-neutral-800 pb-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-300 text-neutral-950 border border-black text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#000]">
                      <Smile className="w-3.5 h-3.5 text-neutral-950" />
                      <span>Creator Persona</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black font-syne uppercase tracking-tight text-white">
                      Tentang SAN ({profile.publicHandle})
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-400 font-mono">Status:</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-neutral-950 border border-black text-xs font-black shadow-sm">
                      {profile.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Bio & Philosophy */}
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-neutral-200 text-base font-medium leading-relaxed">
                      {profile.fullBio}
                    </p>
                    <div
                      className="p-5 rounded-2xl bg-[#242018] border-2 border-amber-400/40 space-y-1.5 shadow-[3px_3px_0px_#000000]"
                      style={{
                        boxShadow: '3px 3px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.06)',
                      }}
                    >
                      <div className="text-xs font-black uppercase text-amber-300 tracking-wider">
                        Filosofi & Pendekatan:
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                        {profile.philosophy}
                      </p>
                    </div>
                  </div>

                  {/* Fast Facts Sheet */}
                  <div
                    className="p-5 rounded-2xl bg-[#19222c] border-2 border-sky-400/40 shadow-[3px_3px_0px_#000000] space-y-3"
                    style={{
                      boxShadow: '3px 3px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.06)',
                    }}
                  >
                    <h4 className="text-xs font-black uppercase text-sky-300 tracking-wider">
                      Informasi Ringkas
                    </h4>
                    <ul className="text-xs font-medium space-y-2.5 text-neutral-200">
                      <li className="flex justify-between border-b border-neutral-700/80 pb-2">
                        <span className="text-neutral-400">Pendidikan:</span>
                        <span className="font-bold text-white">{profile.education}</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-700/80 pb-2">
                        <span className="text-neutral-400">Lokasi:</span>
                        <span className="font-bold text-white">{profile.location}</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-700/80 pb-2">
                        <span className="text-neutral-400">Fokus:</span>
                        <span className="font-bold text-white">Web, UI/UX, Software</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-neutral-400">Email:</span>
                        <span className="font-mono font-bold text-amber-300">{profile.email}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 4: STACK (DEV TOOLS, DESIGN & ENVIRONMENT)
             ======================================================== */}
          {activeRoute === 'stack' && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Development */}
                <div
                  className="p-6 rounded-3xl bg-[#242018] border-2 border-amber-400/50 shadow-[5px_5px_0px_#000000] space-y-4"
                  style={{
                    boxShadow: '5px 5px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-amber-400" />
                    <h3 className="text-xl font-black font-syne uppercase tracking-tight text-white">Development</h3>
                  </div>
                  <p className="text-xs text-neutral-300 font-medium">Bahasa pemrograman & framework inti:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.tools.development.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#1c1a24] border-2 border-neutral-700 text-xs font-black text-amber-300 shadow-[2px_2px_0px_#000]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. UI/UX Design */}
                <div
                  className="p-6 rounded-3xl bg-[#221c2c] border-2 border-purple-400/50 shadow-[5px_5px_0px_#000000] space-y-4"
                  style={{
                    boxShadow: '5px 5px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-black font-syne uppercase tracking-tight text-white">Design & Prototype</h3>
                  </div>
                  <p className="text-xs text-neutral-300 font-medium">Desain antarmuka & alur pengguna:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.tools.design.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#1c1a24] border-2 border-neutral-700 text-xs font-black text-purple-300 shadow-[2px_2px_0px_#000]"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 rounded-xl bg-[#1c1a24] border-2 border-neutral-700 text-xs font-black text-purple-300 shadow-[2px_2px_0px_#000]">
                      Prototyping
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-[#1c1a24] border-2 border-neutral-700 text-xs font-black text-purple-300 shadow-[2px_2px_0px_#000]">
                      Design System
                    </span>
                  </div>
                </div>

                {/* 3. Environment */}
                <div
                  className="p-6 rounded-3xl bg-[#16221c] border-2 border-emerald-400/50 shadow-[5px_5px_0px_#000000] space-y-4"
                  style={{
                    boxShadow: '5px 5px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-xl font-black font-syne uppercase tracking-tight text-white">Environment</h3>
                  </div>
                  <p className="text-xs text-neutral-300 font-medium">Tools & ekosistem kerja sehari-hari:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.tools.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#1c1a24] border-2 border-neutral-700 text-xs font-black text-emerald-300 shadow-[2px_2px_0px_#000]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              ROUTE 5: CONNECT (DIRECT CONTACT & SOCIAL MATRIX)
             ======================================================== */}
          {activeRoute === 'connect' && (
            <motion.div
              key="connect"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div
                className="p-8 rounded-3xl bg-[#1a1a24] border-2 border-neutral-700 shadow-[6px_6px_0px_#000000] space-y-8 relative"
                style={{
                  boxShadow: '6px 6px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.08)',
                }}
              >
                <div className="border-b-2 border-neutral-800 pb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400 text-neutral-950 border border-black text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_#000]">
                    <Zap className="w-3.5 h-3.5 text-neutral-950" />
                    <span>Direct Connect</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black font-syne uppercase tracking-tight text-white">
                    Mulai Diskusi & Kolaborasi
                  </h2>
                  <p className="text-sm text-neutral-300 font-medium mt-1">
                    Hubungi langsung melalui media sosial atau WhatsApp untuk respon cepat.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Direct Form */}
                  <form onSubmit={handleSendWhatsApp} className="lg:col-span-7 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase tracking-wider text-neutral-200">
                        Tulis Pesan Cepat ke WhatsApp SAN:
                      </label>
                      <textarea
                        value={quickMessage}
                        onChange={(e) => setQuickMessage(e.target.value)}
                        placeholder="Halo SAN, saya tertarik ingin membuat website / mendiskusikan ide proyek digital..."
                        rows={4}
                        className="w-full p-4 rounded-2xl bg-[#121218] border-2 border-neutral-700 text-sm text-white font-medium focus:outline-none focus:border-amber-400 placeholder:text-neutral-500 shadow-[3px_3px_0px_#000000]"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98, y: 2 }}
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-black text-sm border-2 border-black shadow-[4px_4px_0px_#000000] transition-all cursor-pointer flex items-center justify-center gap-2"
                      style={{
                        boxShadow: '4px 4px 0px #000000, inset 2px 2px 4px rgba(255,255,255,0.7)',
                      }}
                    >
                      {renderBrandSVG('whatsapp', 'w-4 h-4')}
                      <span>Kirim Langsung ke WhatsApp</span>
                      <Send className="w-3.5 h-3.5 ml-1 text-neutral-950" />
                    </motion.button>
                  </form>

                  {/* Social Channels Grid in High-Contrast Dark Tiles */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    <a
                      href={profile.contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-emerald-400 shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-3 cursor-pointer"
                    >
                      {renderBrandSVG('whatsapp', 'w-5 h-5')}
                      <div>
                        <div className="text-xs font-black text-white">WhatsApp 1</div>
                        <div className="text-[10px] text-neutral-400 font-mono">@enzvuck</div>
                      </div>
                    </a>

                    <a
                      href={profile.contactLinks.whatsapp2}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-emerald-400 shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-3 cursor-pointer"
                    >
                      {renderBrandSVG('whatsapp', 'w-5 h-5')}
                      <div>
                        <div className="text-xs font-black text-white">WhatsApp 2</div>
                        <div className="text-[10px] text-neutral-400 font-mono">@enzuvk</div>
                      </div>
                    </a>

                    <a
                      href={profile.contactLinks.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-sky-400 shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-3 cursor-pointer"
                    >
                      {renderBrandSVG('telegram', 'w-5 h-5')}
                      <div>
                        <div className="text-xs font-black text-white">Telegram</div>
                        <div className="text-[10px] text-neutral-400 font-mono">@enzvuck</div>
                      </div>
                    </a>

                    <a
                      href={profile.contactLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-white shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-3 cursor-pointer"
                    >
                      {renderBrandSVG('github', 'w-5 h-5')}
                      <div>
                        <div className="text-xs font-black text-white">GitHub</div>
                        <div className="text-[10px] text-neutral-400 font-mono">@senaczk</div>
                      </div>
                    </a>

                    <a
                      href={profile.contactLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-pink-400 shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-3 cursor-pointer"
                    >
                      {renderBrandSVG('instagram', 'w-5 h-5')}
                      <div>
                        <div className="text-xs font-black text-white">Instagram</div>
                        <div className="text-[10px] text-neutral-400 font-mono">@v1enzyk</div>
                      </div>
                    </a>

                    <a
                      href={profile.contactLinks.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-cyan-400 shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-3 cursor-pointer"
                    >
                      {renderBrandSVG('tiktok', 'w-5 h-5')}
                      <div>
                        <div className="text-xs font-black text-white">TikTok</div>
                        <div className="text-[10px] text-neutral-400 font-mono">@_enzyk</div>
                      </div>
                    </a>

                    {/* Official Copyable Email */}
                    <div
                      onClick={handleCopyEmail}
                      className="col-span-2 p-3.5 rounded-2xl bg-[#22222d] hover:bg-[#2a2a38] border-2 border-neutral-700 hover:border-red-400 shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {renderBrandSVG('email', 'w-5 h-5')}
                        <div>
                          <div className="text-xs font-black text-white">Official Email</div>
                          <div className="text-xs text-amber-300 font-mono font-bold">{profile.email}</div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-xl bg-neutral-800 border border-neutral-600 text-white text-[10px] font-black">
                        {copiedEmail ? 'Tersalin!' : 'Salin Email'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. DARK CLAY & PAPER FLOATING DOCK (BOTTOM CENTER) */}
      <div
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl bg-[#181822]/95 backdrop-blur-xl border-2 border-neutral-700 shadow-[4px_4px_0px_#000000] flex items-center gap-1.5 sm:gap-2"
        style={{
          boxShadow: '4px 4px 0px #000000, inset 1px 1px 2px rgba(255,255,255,0.1)',
        }}
      >
        {[
          {
            id: 'overview',
            icon: <SanLogo size="xs" />,
            label: 'Overview',
          },
          { id: 'creations', icon: <Layers className="w-4 h-4 text-sky-400" />, label: 'Creations' },
          { id: 'identity', icon: <User className="w-4 h-4 text-purple-400" />, label: 'Identity' },
          { id: 'stack', icon: <Cpu className="w-4 h-4 text-emerald-400" />, label: 'Stack' },
          { id: 'connect', icon: <Smartphone className="w-4 h-4 text-amber-400" />, label: 'Connect' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onRouteChange(item.id as AppleRouteId)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all hover:scale-110 relative cursor-pointer flex items-center justify-center ${
              activeRoute === item.id
                ? 'bg-amber-400 text-neutral-950 font-bold border border-black shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
            title={item.label}
          >
            {item.icon}
            {activeRoute === item.id && (
              <motion.span
                layoutId="activeDarkNeoDockDot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black"
              />
            )}
          </button>
        ))}

        <div className="w-px h-5 bg-neutral-700 mx-0.5" />

        {/* Brand SVG Shortcuts in Dock */}
        <a
          href={profile.contactLinks.github}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl hover:bg-neutral-800 transition-all hover:scale-110 flex items-center justify-center"
          title="GitHub"
        >
          {renderBrandSVG('github', 'w-4 h-4 sm:w-5 sm:h-5')}
        </a>

        <a
          href={profile.contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl hover:bg-neutral-800 transition-all hover:scale-110 flex items-center justify-center"
          title="WhatsApp"
        >
          {renderBrandSVG('whatsapp', 'w-4 h-4 sm:w-5 sm:h-5')}
        </a>

        <a
          href={profile.contactLinks.telegram}
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl hover:bg-neutral-800 transition-all hover:scale-110 flex items-center justify-center"
          title="Telegram"
        >
          {renderBrandSVG('telegram', 'w-4 h-4 sm:w-5 sm:h-5')}
        </a>
      </div>

      {/* 5. FOOTER - MIRRORED FROM DEFAULT STYLE */}
      <footer className="relative z-10 px-4 sm:px-8 py-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 max-w-6xl mx-auto gap-4 mt-16">
        <div className="whitespace-nowrap">
          © 2026 {profile.name} ({profile.publicHandle}) · All Rights Reserved
        </div>
        <div className="flex items-center gap-2 text-neutral-300 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Tersedia untuk Proyek Kreatif & Eksperimen Digital</span>
        </div>
      </footer>
    </div>
  );
}
