import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Check, Send, Copy, Palette } from 'lucide-react';
import { PortfolioProfile, Project } from '../../types/portfolio';

interface SwissMinimalistProps {
  profile: PortfolioProfile;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenMatcher?: () => void;
  onOpenStyleSwitcher?: () => void;
}

export function SwissMinimalist({
  profile,
  projects,
  onSelectProject,
  onOpenStyleSwitcher,
}: SwissMinimalistProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(projects[0]?.id || null);
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
    <div className="min-h-screen bg-[#0c0c0c] text-neutral-100 font-sans selection:bg-[#ea580c] selection:text-white">
      {/* 1. TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#0c0c0c]/90 backdrop-blur-sm border-b border-neutral-800 px-6 sm:px-12 py-4 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="text-base font-bold tracking-tight text-white hover:text-[#ea580c] transition-colors">
          {profile.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider text-neutral-400">
          <a href="#index" className="hover:text-white transition-colors">Indeks</a>
          <a href="#projects" className="hover:text-white transition-colors">Studi Kasus</a>
          <a href="#principles" className="hover:text-white transition-colors">Prinsip</a>
          <a href="#biography" className="hover:text-white transition-colors">Biografi</a>
          <a href="#contact" className="hover:text-white transition-colors">Inquiry</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {onOpenStyleSwitcher && (
            <button
              onClick={onOpenStyleSwitcher}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-300 border border-neutral-700 hover:border-white hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Palette className="w-3 h-3 text-neutral-400" />
              <span>Ganti Style</span>
            </button>
          )}

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium tracking-wide text-white bg-neutral-900 border border-neutral-700 hover:border-white transition-colors whitespace-nowrap"
          >
            Kontak Langsung
          </a>
        </div>
      </header>

      {/* 2. STRICT 12-COLUMN HERO */}
      <section id="hero" className="px-6 sm:px-12 lg:px-16 pt-20 pb-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 text-xs font-mono uppercase tracking-widest text-[#ea580c]">
            Indeks Portofolio 2026
          </div>

          <div className="lg:col-span-9 space-y-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-balance">
              Presisi arsitektur, tipografi berdisiplin tinggi, dan desain sistem yang terukur.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
              <div className="md:col-span-7 text-sm text-neutral-400 leading-relaxed">
                {profile.shortBio}
              </div>

              {/* Zero-Pill unboxed status */}
              <div className="md:col-span-5 space-y-2 text-xs text-neutral-500 font-mono">
                <div>Status: <span className="text-neutral-200">{profile.status}</span></div>
                <div>Lokasi: <span className="text-neutral-200">{profile.location}</span></div>
                <div>Pengalaman: <span className="text-neutral-200">{profile.yearsExperience} Tahun</span></div>
                <div>Proyek Rilis: <span className="text-neutral-200">{profile.completedProjects} Selesai</span></div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#ea580c] text-white hover:bg-[#c2410c] transition-colors"
              >
                Tinjau Studi Kasus
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-mono text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Email Tersalin' : profile.email}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODULAR PROJECT ARCHIVE / ACCORDION */}
      <section id="projects" className="px-6 sm:px-12 lg:px-16 py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-4 border-b border-neutral-800">
            <div className="lg:col-span-3 text-xs font-mono uppercase tracking-widest text-[#ea580c]">
              01. Daftar Proyek
            </div>
            <div className="lg:col-span-9 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Klik baris untuk membuka gambaran teknis</span>
              <span>Total 0{projects.length} Studi Kasus</span>
            </div>
          </div>

          <div className="divide-y divide-neutral-800 border-y border-neutral-800">
            {projects.map((proj, idx) => {
              const isExpanded = expandedProjectId === proj.id;
              return (
                <div key={proj.id} className="transition-colors hover:bg-neutral-900/40">
                  <div
                    onClick={() => setExpandedProjectId(isExpanded ? null : proj.id)}
                    className="py-6 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-[#ea580c]">0{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white hover:text-[#ea580c] transition-colors">
                        {proj.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-neutral-400 font-mono">
                      <span>{proj.client}</span>
                      <span aria-hidden="true" className="text-neutral-700">/</span>
                      <span className="tabular-nums text-white font-semibold">{proj.impactMetric}</span>
                      <span aria-hidden="true" className="text-neutral-700">/</span>
                      <span>{proj.year}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#ea580c]' : 'text-neutral-600'
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-neutral-950 border-t border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          <div className="lg:col-span-7 aspect-[16/9] overflow-hidden border border-neutral-800 bg-neutral-900">
                            <img
                              src={proj.image}
                              alt={proj.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="lg:col-span-5 space-y-4">
                            <div className="text-xs text-neutral-500 font-mono">
                              Kategori: {proj.category} · Peran: {proj.role}
                            </div>
                            <p className="text-sm text-neutral-300 leading-relaxed">
                              {proj.description}
                            </p>

                            <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                              <div className="text-xs font-mono uppercase text-[#ea580c]">Hasil Pengukuran</div>
                              <div className="text-lg font-mono tabular-nums text-white font-bold">{proj.impactMetric}</div>
                              <div className="text-xs text-neutral-400">{proj.impactDetail}</div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectProject(proj);
                              }}
                              className="px-4 py-2 text-xs uppercase font-mono tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
                            >
                              <span>Buka Studi Kasus STAR</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRINCIPLES SECTION */}
      <section id="principles" className="px-6 sm:px-12 lg:px-16 py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 text-xs font-mono uppercase tracking-widest text-[#ea580c]">
            02. Metodologi
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono text-[#ea580c]">01</span>
              <h4 className="text-base font-medium text-white">Disiplin Grid 12-Kolom</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Struktur layout disusun dengan rasio matematis yang konsisten sehingga seluruh elemen berada pada sumbu yang seimbang.
              </p>
            </div>

            <div className="p-6 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono text-[#ea580c]">02</span>
              <h4 className="text-base font-medium text-white">Eliminasi Dekorasi Palsu</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Menolak badge static pill bertumpuk, floating pastel 3D, dan bayangan ganda. Hanya menggunakan hairline 1px dan whitespace bernapas.
              </p>
            </div>

            <div className="p-6 border border-neutral-800 space-y-3">
              <span className="text-xs font-mono text-[#ea580c]">03</span>
              <h4 className="text-base font-medium text-white">Responsivitas Sub-150ms</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Setiap interaksi pengguna diberikan feedback seketika. Tidak ada animasi berputar lambat yang menghambat pembaca mencari informasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="px-6 sm:px-12 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 text-xs font-mono uppercase tracking-widest text-[#ea580c]">
            03. Kontak & Inquiry
          </div>

          <div className="lg:col-span-9 max-w-xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Tertarik bekerja sama? Kirimkan pesan singkat.
            </h2>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              {formSent ? (
                <div className="p-5 border border-emerald-700 bg-neutral-950 text-emerald-300 text-xs font-mono space-y-1">
                  <div className="font-bold">STATUS: PESAN DITERIMA</div>
                  <div>Terima kasih. Konfirmasi balasan akan dikirimkan dalam 24 jam.</div>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neutral-500 uppercase">Nama Lengkap</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 text-xs text-white outline-none focus:border-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neutral-500 uppercase">Email Perusahaan</label>
                    <input
                      required
                      type="email"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 text-xs text-white outline-none focus:border-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neutral-500 uppercase">Keterangan Proyek</label>
                    <textarea
                      rows={3}
                      required
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 text-xs text-white outline-none focus:border-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-mono uppercase tracking-wider bg-white text-black hover:bg-[#ea580c] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Format Inquiry</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 sm:px-12 py-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-600 gap-4">
        <div>© 2026 {profile.name} · Swiss International Minimalist</div>
        <div>Standard Layout Ratio 12-Axis</div>
      </footer>
    </div>
  );
}
