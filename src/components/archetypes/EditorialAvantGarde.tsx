import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, MapPin, Sparkles, Check, Send, Palette } from 'lucide-react';
import { PortfolioProfile, Project } from '../../types/portfolio';
import { MagneticButton } from '../shared/MagneticButton';

interface EditorialAvantGardeProps {
  profile: PortfolioProfile;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenMatcher?: () => void;
  onOpenStyleSwitcher?: () => void;
}

export function EditorialAvantGarde({
  profile,
  projects,
  onSelectProject,
  onOpenStyleSwitcher,
}: EditorialAvantGardeProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'editorial' | 'interaction'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f0] font-sans selection:bg-[#d4af37] selection:text-black">
      {/* 1. TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#080808]/90 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-12 py-4 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="text-xl font-bold tracking-tight font-syne text-[#f4f4f0] hover:text-[#d4af37] transition-colors">
          {profile.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#selected-works" className="hover:text-white transition-colors">Karya Terpilih</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Filosofi</a>
          <a href="#achievements" className="hover:text-white transition-colors">Pencapaian</a>
          <a href="#about" className="hover:text-white transition-colors">Tentang</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {onOpenStyleSwitcher && (
            <button
              onClick={onOpenStyleSwitcher}
              className="px-3 py-1.5 text-xs font-medium border border-neutral-700 text-neutral-300 hover:text-white hover:border-amber-400/50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Ganti Style</span>
            </button>
          )}

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#f4f4f0] hover:bg-[#d4af37] transition-colors rounded-none whitespace-nowrap"
          >
            Mulai Diskusi
          </a>
        </div>
      </header>

      {/* 2. SPLIT-SCREEN HERO SECTION */}
      <section id="hero" className="px-6 sm:px-12 lg:px-16 pt-16 pb-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bold Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Zero-Pill unboxed status */}
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.status}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.location}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light font-cormorant leading-[1.05] tracking-tight text-balance">
              Merancang <span className="italic font-normal text-[#d4af37]">estetika digital</span> berdaya ingat tinggi & interaksi bermakna.
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed">
              {profile.shortBio}
            </p>

            {/* Proof Metrics Adjacent to Claim */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-900">
              <div>
                <div className="text-3xl sm:text-4xl font-light font-cormorant tabular-nums text-white">
                  0{profile.yearsExperience}+ Th
                </div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Pengalaman Industri</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light font-cormorant tabular-nums text-white">
                  {profile.completedProjects}+
                </div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Karya Selesai</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light font-cormorant tabular-nums text-[#d4af37]">
                  2.4x
                </div>
                <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Rerata Nilai Konversi</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton
                onClick={() => {
                  const el = document.getElementById('selected-works');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-white"
              >
                Lihat Karya Terpilih
              </MagneticButton>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Tersalin!' : 'Salin Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/5] relative">
                <img
                  src="/src/assets/images/editorial_portrait_showcase_1790502144453.jpg"
                  alt="Editorial Portrait Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-1">
                    Direction & Interaction
                  </div>
                  <div className="text-lg font-cormorant italic text-white">
                    "Desain bukan kosmetik, melainkan kejelasan yang anggun."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION DIVIDER: Animated Editorial Marquee Ribbon */}
      <div className="py-4 border-b border-neutral-900 overflow-hidden bg-neutral-950">
        <div className="animate-marquee-infinite text-xs uppercase tracking-widest text-neutral-500 font-mono">
          <span className="mx-6">Selected Works</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">High-Impact Digital Monograph</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">Editorial Typographic Layouts</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">Velvet Motion Transitions</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">Human Centric Systems</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">Selected Works</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">High-Impact Digital Monograph</span>
          <span aria-hidden="true">·</span>
          <span className="mx-6">Editorial Typographic Layouts</span>
          <span aria-hidden="true">·</span>
        </div>
      </div>

      {/* 4. SELECTED WORKS (BENTO & MEDIA FIRST MASONRY) */}
      <section id="selected-works" className="px-6 sm:px-12 lg:px-16 py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-900">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-2">
                01. Portofolio Kurasi
              </span>
              <h2 className="text-3xl sm:text-5xl font-light font-cormorant">
                Karya Pilihan & Studi Kasus
              </h2>
            </div>

            {/* Interactive Filter Controls (Functional Buttons) */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-none">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Semua Karya
              </button>
              <button
                onClick={() => setActiveFilter('editorial')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeFilter === 'editorial'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Editorial & Brand
              </button>
              <button
                onClick={() => setActiveFilter('interaction')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeFilter === 'interaction'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Interaksi & Sistem
              </button>
            </div>
          </div>

          {/* Projects List with Curtain Hover Effect */}
          <div className="space-y-12">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer border border-neutral-900 hover:border-neutral-700 bg-neutral-950 p-6 sm:p-10 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Info */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Zero-Pill unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <span>0{idx + 1}</span>
                      <span aria-hidden="true">/</span>
                      <span>{proj.client}</span>
                      <span aria-hidden="true">/</span>
                      <span>{proj.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-light font-cormorant group-hover:text-[#d4af37] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      {proj.description}
                    </p>

                    {/* Claim to Proof Adjacency */}
                    <div className="pt-2">
                      <div className="text-xl font-mono tabular-nums text-[#d4af37]">
                        {proj.impactMetric}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {proj.impactDetail}
                      </div>
                    </div>

                    {/* Clean unboxed tags */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 pt-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tag} className="flex items-center gap-2">
                          <span>{tag}</span>
                          {tIdx < proj.tags.length - 1 && <span aria-hidden="true">·</span>}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-[#d4af37]">
                      <span>Buka Studi Kasus Lengkap</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-7 overflow-hidden aspect-[16/9] bg-neutral-900 border border-neutral-900 group-hover:border-neutral-700 transition-colors">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY & CAPABILITIES (EDITORIAL CHAPTER LIST) */}
      <section id="philosophy" className="px-6 sm:px-12 lg:px-16 py-24 border-b border-neutral-900 bg-[#060606]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block">
              02. Pendekatan Desain
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-cormorant">
              Tiga Prinsip yang Selalu Dijunjung
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              {profile.philosophy}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-8 border border-neutral-900 bg-neutral-950 space-y-3">
              <div className="text-xs font-mono text-[#d4af37]">Prinsip 01</div>
              <h4 className="text-xl font-cormorant text-white">Hierarki Tanpa Clutter</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Menghindari static badge bertumpuk dan ornamen palsu. Memberi ruang napas pada tipografi sehingga pengguna dapat menangkap proposisi nilai dalam 3 detik pertama.
              </p>
            </div>

            <div className="p-8 border border-neutral-900 bg-neutral-950 space-y-3">
              <div className="text-xs font-mono text-[#d4af37]">Prinsip 02</div>
              <h4 className="text-xl font-cormorant text-white">Motion dengan Intent Fungsional</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Animasi tidak boleh membuat pengguna menunggu. Routine micro-interactions selesai dalam sub-200ms, sementara transisi halaman menggunakan kurva yang melembutkan perpindahan fokus.
              </p>
            </div>

            <div className="p-8 border border-neutral-900 bg-neutral-950 space-y-3">
              <div className="text-xs font-mono text-[#d4af37]">Prinsip 03</div>
              <h4 className="text-xl font-cormorant text-white">Adjacency Klaim ke Bukti</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Setiap klaim keunggulan desain selalu didampingi angka metrik nyata: kenaikan konversi, durasi keterlibatan, atau skor kepuasan pengujian pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS & CLIENT HONORS */}
      <section id="achievements" className="px-6 sm:px-12 lg:px-16 py-20 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-1">
                03. Rekam Jejak
              </span>
              <h2 className="text-2xl sm:text-3xl font-light font-cormorant">
                Pengakuan & Kemitraan Klien
              </h2>
            </div>
            <div className="text-xs text-neutral-500 font-mono">
              Terverifikasi 2021 – 2026
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {profile.awardsOrClients.map((item) => (
              <div
                key={item}
                className="p-5 border border-neutral-900 bg-neutral-950 flex flex-col justify-between h-28 text-neutral-300 hover:border-neutral-700 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT & INQUIRY SECTION */}
      <section id="contact" className="px-6 sm:px-12 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
              04. Memulai Kolaborasi
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-cormorant text-balance">
              Punya ide proyek atau butuh arahan desain produk?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
              Mari jadwalkan diskusi awal 20 menit untuk membedah tantangan produkmu.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6 max-w-xl mx-auto bg-neutral-950 p-8 border border-neutral-900">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-2 border border-emerald-800/60 bg-emerald-950/20 text-emerald-300">
                <Check className="w-6 h-6 mx-auto text-emerald-400" />
                <h4 className="font-semibold text-sm">Pesan Berhasil Terkirim!</h4>
                <p className="text-xs text-neutral-400">Terima kasih telah menghubungi. Saya akan membalas via email dalam 1x24 jam.</p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-neutral-400 block">
                    Nama Kamu / Perusahaan
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Raditya — Founder Fintech"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-neutral-400 block">
                    Email Kontak
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="kamu@domain.com"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-neutral-400 block">
                    Ruang Lingkup Proyek
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ceritakan gambaran singkat kebutuhan desain, linimasa yang diharapkan, dan target outcome..."
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-[#d4af37] text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Formulir Inquiry</span>
                </button>
              </>
            )}
          </form>

          {/* Social Links Clean */}
          <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 font-mono">
            {profile.socials.map((soc) => (
              <a key={soc.label} href={soc.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                {soc.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 sm:px-12 py-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
        <div>© 2026 {profile.name} · Hak Cipta Dilindungi</div>
        <div>Editorial Avant-Garde Portfolio Standard</div>
      </footer>
    </div>
  );
}
