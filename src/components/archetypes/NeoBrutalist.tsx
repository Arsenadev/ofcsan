import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Check, Send, Sparkles, Smile, Star, Palette } from 'lucide-react';
import { PortfolioProfile, Project } from '../../types/portfolio';

interface NeoBrutalistProps {
  profile: PortfolioProfile;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenMatcher?: () => void;
  onOpenStyleSwitcher?: () => void;
}

export function NeoBrutalist({
  profile,
  projects,
  onSelectProject,
  onOpenStyleSwitcher,
}: NeoBrutalistProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
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
    <div className="min-h-screen bg-[#fffdfa] text-black font-sans selection:bg-yellow-300 selection:text-black">
      {/* 1. TOP BAR CONTRACT */}
      <header className="sticky top-0 z-40 bg-[#fffdfa] border-b-3 border-black px-6 sm:px-12 py-4 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="text-xl font-black tracking-tight font-syne uppercase hover:text-yellow-500 transition-colors">
          {profile.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
          <a href="#drops" className="hover:text-yellow-600 transition-colors underline-offset-4 hover:underline">Proyek Drop</a>
          <a href="#manifesto" className="hover:text-yellow-600 transition-colors underline-offset-4 hover:underline">Manifesto</a>
          <a href="#numbers" className="hover:text-yellow-600 transition-colors underline-offset-4 hover:underline">Angka & Bukti</a>
          <a href="#skills" className="hover:text-yellow-600 transition-colors underline-offset-4 hover:underline">Skills</a>
          <a href="#contact" className="hover:text-yellow-600 transition-colors underline-offset-4 hover:underline">Kontak</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {onOpenStyleSwitcher && (
            <button
              onClick={onOpenStyleSwitcher}
              className="px-3.5 py-2 text-xs font-black uppercase tracking-wider bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000] transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <Palette className="w-3.5 h-3.5 text-yellow-600" />
              <span>Ganti Style</span>
            </button>
          )}

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-black uppercase tracking-wider bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#000] transition-all whitespace-nowrap cursor-pointer"
          >
            Ajak Kolaborasi!
          </a>
        </div>
      </header>

      {/* 2. INFINITE MARQUEE TAPE */}
      <div className="bg-yellow-300 border-b-3 border-black py-2.5 overflow-hidden">
        <div className="animate-marquee-infinite text-xs font-black uppercase tracking-widest text-black font-mono">
          <span className="mx-6">★ 100% Bold Design</span>
          <span>·</span>
          <span className="mx-6">Zero Boring Templates</span>
          <span>·</span>
          <span className="mx-6">Tactile Spring Physics</span>
          <span>·</span>
          <span className="mx-6">High Voltage Conversion</span>
          <span>·</span>
          <span className="mx-6">★ 100% Bold Design</span>
          <span>·</span>
          <span className="mx-6">Zero Boring Templates</span>
          <span>·</span>
          <span className="mx-6">Tactile Spring Physics</span>
          <span>·</span>
          <span className="mx-6">High Voltage Conversion</span>
          <span>·</span>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section id="hero" className="px-6 sm:px-12 lg:px-16 pt-16 pb-24 border-b-3 border-black">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Zero-Pill unboxed status */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-3 h-3 bg-emerald-400 border border-black inline-block" />
            <span>{profile.status}</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-syne uppercase tracking-tight text-balance leading-[1.02]">
            Bikin produk digital yang <span className="bg-yellow-300 px-2 py-0.5 border-2 border-black inline-block rotate-[-1.5deg]">langsung mencuri</span> perhatian & bikin ketagihan klik.
          </h1>

          <p className="text-base sm:text-xl font-medium text-neutral-800 max-w-2xl leading-relaxed">
            {profile.shortBio}
          </p>

          {/* Proof Adjacency Hard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-white border-3 border-black shadow-[5px_5px_0px_#000]">
              <div className="text-4xl font-black font-mono tabular-nums">{profile.yearsExperience}+ TH</div>
              <div className="text-xs font-bold uppercase text-neutral-600 mt-1">Pengalaman Bikin Produk</div>
            </div>
            <div className="p-6 bg-yellow-200 border-3 border-black shadow-[5px_5px_0px_#000]">
              <div className="text-4xl font-black font-mono tabular-nums">{profile.completedProjects}+</div>
              <div className="text-xs font-bold uppercase text-neutral-600 mt-1">Proyek Sukses Terkirim</div>
            </div>
            <div className="p-6 bg-sky-200 border-3 border-black shadow-[5px_5px_0px_#000]">
              <div className="text-4xl font-black font-mono tabular-nums">4.2M+</div>
              <div className="text-xs font-bold uppercase text-neutral-600 mt-1">Total Impresi Organik</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#drops"
              className="px-8 py-4 text-xs font-black uppercase tracking-wider bg-black text-white border-2 border-black shadow-[4px_4px_0px_#facc15] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#facc15] transition-all"
            >
              Lihat Semua Drop Proyek
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 text-xs font-black uppercase tracking-wider bg-white border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] transition-all cursor-pointer flex items-center gap-2"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Zap className="w-4 h-4 text-yellow-500" />}
              <span>{copiedEmail ? 'Email Berhasil Disalin!' : 'Salin Email Kontak'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT DROPS */}
      <section id="drops" className="px-6 sm:px-12 lg:px-16 py-24 border-b-3 border-black bg-neutral-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-600 mb-1">
                Karya Pilihan Unggulan
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase">
                Proyek & Studi Kasus Drop
              </h2>
            </div>
            <div className="text-xs font-mono font-bold">
              Klik kartu untuk detail STAR lengkap
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="bg-white border-3 border-black shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] transition-shadow cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="border-b-3 border-black aspect-[4/3] overflow-hidden bg-yellow-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    {/* Zero-Pill unboxed text */}
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-600">
                      <span>0{idx + 1}</span>
                      <span aria-hidden="true">/</span>
                      <span>{proj.client}</span>
                      <span aria-hidden="true">/</span>
                      <span>{proj.year}</span>
                    </div>

                    <h3 className="text-xl font-black font-syne uppercase leading-tight">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Metric Box */}
                    <div className="p-3 bg-yellow-200 border-2 border-black mt-2">
                      <div className="text-lg font-black font-mono tabular-nums">{proj.impactMetric}</div>
                      <div className="text-[11px] font-bold text-neutral-800">{proj.impactDetail}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase">
                    <span>Lihat Kasus Penuh</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MANIFESTO & SKILLS */}
      <section id="manifesto" className="px-6 sm:px-12 lg:px-16 py-20 border-b-3 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-black uppercase tracking-wider bg-black text-white px-2 py-1 inline-block">
              Anti-Boring Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-syne uppercase">
              Kenapa UI Portofoliomu Harus Berani Punya Karakter?
            </h2>
            <p className="text-sm font-medium text-neutral-800 leading-relaxed">
              Recruiter dan calon klien melihat rata-rata 50–100 portofolio dalam satu sesi rekrutmen. Ketika semua orang memakai template abu-abu minimalis yang sama, otak mereka mengalami kelelahan visual.
            </p>
            <p className="text-sm font-medium text-neutral-800 leading-relaxed">
              Neo-Brutalisme bukan sekadar gaya; ini adalah senjata komunikasi visual untuk menunjukkan kepercayaan diri, keberanian mengambil keputusan desain, dan kemampuan membuat produk yang tak terlupakan.
            </p>
          </div>

          <div id="skills" className="space-y-3">
            <h3 className="text-lg font-black uppercase font-syne mb-2">
              Keahlian & Senjata Tempur:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {profile.skills.map((s) => (
                <div
                  key={s}
                  className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-bold"
                >
                  ★ {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="px-6 sm:px-12 lg:px-16 py-24 bg-yellow-300">
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase">
              Siap Bikin Sesuatu yang Keren?
            </h2>
            <p className="text-sm font-bold text-neutral-800">
              Jangan ragu kirim pesan. Kolaborasi seru selalu berawal dari sapaan santai.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="p-8 bg-white border-3 border-black shadow-[8px_8px_0px_#000] text-left space-y-4">
            {formSent ? (
              <div className="p-6 bg-emerald-200 border-2 border-black text-center space-y-1">
                <Check className="w-6 h-6 mx-auto text-black" />
                <h4 className="font-black text-sm uppercase">Pesan Berhasil Terkirim!</h4>
                <p className="text-xs font-bold text-neutral-700">Terima kasih! Saya akan membalas ke emailmu secepatnya.</p>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase">Siapa Namamu?</label>
                  <input
                    required
                    type="text"
                    placeholder="Nama kamu"
                    className="w-full px-4 py-3 bg-[#fafafa] border-2 border-black text-sm font-medium outline-none focus:bg-yellow-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black uppercase">Email Buat Balas</label>
                  <input
                    required
                    type="email"
                    placeholder="kamu@email.com"
                    className="w-full px-4 py-3 bg-[#fafafa] border-2 border-black text-sm font-medium outline-none focus:bg-yellow-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black uppercase">Apa yang Mau Kita Bangun?</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Ceritakan proyek impianmu..."
                    className="w-full px-4 py-3 bg-[#fafafa] border-2 border-black text-sm font-medium outline-none focus:bg-yellow-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-black uppercase tracking-wider bg-black text-white border-2 border-black shadow-[4px_4px_0px_#facc15] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#facc15] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang!</span>
                </button>
              </>
            )}
          </form>

          <div className="flex items-center justify-center gap-6 text-xs font-black font-mono">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="underline hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 sm:px-12 py-8 border-t-3 border-black bg-white flex flex-col sm:flex-row items-center justify-between text-xs font-bold font-mono gap-4">
        <div>© 2026 {profile.name} · Neo-Brutalist Edition</div>
        <div>Crafted with 100% Tactile Energy</div>
      </footer>
    </div>
  );
}
