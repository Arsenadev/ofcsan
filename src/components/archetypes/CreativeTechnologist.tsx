import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, Cpu, Code2, Sparkles, Copy, Check, Send, Layers, Palette } from 'lucide-react';
import { PortfolioProfile, Project } from '../../types/portfolio';
import { ParticleCanvas } from '../shared/ParticleCanvas';
import { TiltCard } from '../shared/TiltCard';

interface CreativeTechnologistProps {
  profile: PortfolioProfile;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenMatcher?: () => void;
  onOpenStyleSwitcher?: () => void;
}

export function CreativeTechnologist({
  profile,
  projects,
  onSelectProject,
  onOpenStyleSwitcher,
}: CreativeTechnologistProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'stack' | 'architecture' | 'tokens'>('stack');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 font-sans selection:bg-sky-500 selection:text-black">
      {/* 1. TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#09090b]/85 backdrop-blur-md border-b border-neutral-800/80 px-6 sm:px-12 py-3.5 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="text-lg font-bold tracking-tight font-syne text-white hover:text-sky-400 transition-colors flex items-center gap-2">
          <span>{profile.name}</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <a href="#bento" className="hover:text-white transition-colors">Bento Lab</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyek Pilihan</a>
          <a href="#architecture" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="#achievements" className="hover:text-white transition-colors">Pengakuan</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {onOpenStyleSwitcher && (
            <button
              onClick={onOpenStyleSwitcher}
              className="px-3 py-1.5 text-xs font-medium border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-sky-400/50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-sky-400" />
              <span>Ganti Style</span>
            </button>
          )}

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-black bg-sky-400 hover:bg-sky-300 transition-colors rounded-lg whitespace-nowrap"
          >
            Inisiasi Proyek
          </a>
        </div>
      </header>

      {/* 2. HERO WITH INTERACTIVE PARTICLE CANVAS */}
      <section id="hero" className="relative px-6 sm:px-12 lg:px-16 pt-20 pb-28 border-b border-neutral-800/80 overflow-hidden">
        {/* Interactive canvas */}
        <ParticleCanvas particleColor="rgba(56, 189, 248, 0.45)" lineColor="rgba(56, 189, 248, 0.12)" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          {/* Zero-Pill clean unboxed status */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">{profile.status}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-syne text-balance max-w-4xl leading-[1.08]">
            Membangun sistem web interaktif dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">kinetika 60 FPS</span> dan ketahanan arsitektur.
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            {profile.shortBio}
          </p>

          {/* Quantitative Metrics Adjacency */}
          <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-neutral-800/80">
            <div>
              <div className="text-3xl font-extrabold font-mono tabular-nums text-white">
                {profile.yearsExperience}+ Tahun
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Pengalaman Rekayasa UI</div>
            </div>
            <div className="w-px h-8 bg-neutral-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-extrabold font-mono tabular-nums text-sky-400">
                &lt;100ms
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Budget Latensi Interaksi</div>
            </div>
            <div className="w-px h-8 bg-neutral-800 hidden sm:block" />
            <div>
              <div className="text-3xl font-extrabold font-mono tabular-nums text-white">
                {profile.completedProjects} Proyek
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">Dirilis ke Produksi</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 text-xs font-semibold text-black bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Jelajahi Proyek Interaktif</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-5 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Berhasil Disalin!' : profile.email}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC BENTO GRID SHOWCASE */}
      <section id="bento" className="px-6 sm:px-12 lg:px-16 py-24 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-2">
              01. Bento Grid Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-syne">
              Laboratorium Rekayasa & Interaktivitas
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-xl">
              Tata letak modular yang menyeimbangkan karya visual, performa runtime, dan stack teknologi secara transparan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Bento Card 1: Featured Project (Wide 2 Cols) */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <TiltCard
                onClick={() => onSelectProject(projects[0])}
                className="h-full p-6 sm:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Zero-Pill unboxed header */}
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-mono text-sky-400">Featured System</span>
                    <span className="font-mono">{projects[0].year}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-syne group-hover:text-sky-400 transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="overflow-hidden rounded-xl aspect-[16/9] border border-neutral-800 bg-neutral-950">
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-lg font-mono tabular-nums text-white">
                      {projects[0].impactMetric}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                      <span>Buka Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Bento Card 2: Interactive Code & Architecture Inspector */}
            <div className="md:col-span-1 lg:col-span-2">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-neutral-900/70 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      <span>Arsitektur & Prinsip Kode</span>
                    </div>

                    {/* Interactive segmented tabs */}
                    <div className="flex items-center gap-1 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
                      <button
                        onClick={() => setActiveCodeTab('stack')}
                        className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                          activeCodeTab === 'stack' ? 'bg-sky-500/20 text-sky-300' : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        Stack
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('architecture')}
                        className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                          activeCodeTab === 'architecture' ? 'bg-sky-500/20 text-sky-300' : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        Sistem
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('tokens')}
                        className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                          activeCodeTab === 'tokens' ? 'bg-sky-500/20 text-sky-300' : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        Tokens
                      </button>
                    </div>
                  </div>

                  {activeCodeTab === 'stack' && (
                    <div className="space-y-3 font-mono text-xs text-neutral-300 bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
                      <div className="text-neutral-500">Core Frontend & Interaction Stack:</div>
                      <div className="flex items-center justify-between">
                        <span>React 19 + TypeScript</span>
                        <span className="text-emerald-400">Optimal (Bundle 24kb)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tailwind CSS v4</span>
                        <span className="text-sky-400">Zero-Runtime Overhead</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Motion v12 + WebGL</span>
                        <span className="text-indigo-400">Spring Physics 60 FPS</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>WCAG AA Accessibility</span>
                        <span className="text-amber-400">Compliant Strict</span>
                      </div>
                    </div>
                  )}

                  {activeCodeTab === 'architecture' && (
                    <div className="space-y-3 font-mono text-xs text-neutral-300 bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
                      <div className="text-neutral-500">Design Architecture Rules:</div>
                      <div className="text-neutral-300 leading-relaxed">
                        • Zero-pill static metadata: memprioritaskan tipografi bersih tanpa kapsul berwarna.<br />
                        • Single-elevation depth: menjaga kanvas tetap datar dan fokus pada konten.<br />
                        • Claim-to-proof adjacency: setiap angka didukung metrik waktu & unit terukur.
                      </div>
                    </div>
                  )}

                  {activeCodeTab === 'tokens' && (
                    <div className="space-y-3 font-mono text-xs text-neutral-300 bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
                      <div className="text-neutral-500">Design Tokens Palette:</div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-[#09090b] border border-neutral-700" />
                        <span>Surface: #09090b (60% Neutral Canvas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-neutral-900 border border-neutral-700" />
                        <span>Structural: #18181b (30% Card & Dividers)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-sky-400" />
                        <span>Accent: #38bdf8 (10% High-Intent Focus)</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 flex items-center justify-between">
                  <span>Audit Kualitas Kode: 100/100</span>
                  <span className="text-emerald-400 font-mono">Zero Critical Errors</span>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Project 2 (Tilt Card) */}
            <div className="md:col-span-1 lg:col-span-2 group">
              <TiltCard
                onClick={() => onSelectProject(projects[1])}
                className="h-full p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-mono text-sky-400">02. Audio Interaction</span>
                    <span className="font-mono">{projects[1].year}</span>
                  </div>
                  <h4 className="text-xl font-bold font-syne group-hover:text-sky-400 transition-colors">
                    {projects[1].title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {projects[1].description}
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="overflow-hidden rounded-xl aspect-[16/9] border border-neutral-800 bg-neutral-950">
                    <img
                      src={projects[1].image}
                      alt={projects[1].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-300 font-bold">{projects[1].impactMetric}</span>
                    <span className="text-neutral-500">Klik untuk Studi Kasus</span>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Bento Card 4: Project 3 (Tilt Card) */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <TiltCard
                onClick={() => onSelectProject(projects[2])}
                className="h-full p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-mono text-sky-400">03. Hardware Telemetry</span>
                    <span className="font-mono">{projects[2].year}</span>
                  </div>
                  <h4 className="text-xl font-bold font-syne group-hover:text-sky-400 transition-colors">
                    {projects[2].title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {projects[2].description}
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="overflow-hidden rounded-xl aspect-[16/9] border border-neutral-800 bg-neutral-950">
                    <img
                      src={projects[2].image}
                      alt={projects[2].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-300 font-bold">{projects[2].impactMetric}</span>
                    <span className="text-neutral-500">Klik untuk Studi Kasus</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK & SYSTEM CAPABILITIES */}
      <section id="architecture" className="px-6 sm:px-12 lg:px-16 py-20 border-b border-neutral-800/80 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-1">
                02. Kompetensi Rekayasa
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-syne">
                Skillset & Metodologi Produksi
              </h2>
            </div>
            <div className="text-xs font-mono text-neutral-500">
              Tested on Modern Chromium, Safari & Gecko
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {profile.skills.map((skill, i) => (
              <div
                key={skill}
                className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2 hover:border-neutral-700 transition-colors"
              >
                <div className="text-xs font-mono text-sky-400">0{i + 1}</div>
                <div className="text-sm font-semibold text-neutral-200">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT INQUIRY SECTION */}
      <section id="contact" className="px-6 sm:px-12 lg:px-16 py-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              03. Let's Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-syne">
              Mulai Proyek atau Diskusi Teknis
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg mx-auto">
              Tersedia untuk kepemimpinan desain, prototyping interaktif, atau konsultasi arsitektur frontend.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
            {formSent ? (
              <div className="p-6 text-center space-y-2 rounded-xl bg-sky-950/40 border border-sky-800 text-sky-200">
                <Check className="w-6 h-6 mx-auto text-sky-400" />
                <h4 className="font-semibold text-sm">Pesan Telah Diterima!</h4>
                <p className="text-xs text-neutral-400">Saya akan segera meninjau brief proyekmu dan menghubungi kembali melalui email.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400">Nama Lengkap</label>
                    <input
                      required
                      type="text"
                      placeholder="Nama kamu"
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-sky-400 rounded-lg text-sm text-white outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400">Alamat Email</label>
                    <input
                      required
                      type="email"
                      placeholder="email@perusahaan.com"
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-sky-400 rounded-lg text-sm text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400">Pesan / Brief Proyek</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Jelaskan kebutuhan aplikasi, target audiens, dan estimasi waktu pengerjaan..."
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-sky-400 rounded-lg text-sm text-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold text-black bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Brief Proyek</span>
                </button>
              </>
            )}
          </form>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 text-xs font-mono text-neutral-500">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 sm:px-12 py-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
        <div>© 2026 {profile.name} · All rights reserved</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Creative Technologist Architecture</span>
        </div>
      </footer>
    </div>
  );
}
