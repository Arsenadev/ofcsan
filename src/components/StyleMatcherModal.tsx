import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { StyleId } from '../types/portfolio';

interface StyleMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyStyle: (styleId: StyleId) => void;
}

export function StyleMatcherModal({
  isOpen,
  onClose,
  onApplyStyle,
}: StyleMatcherModalProps) {
  const [role, setRole] = useState<'frontend' | 'uiux' | 'creative' | 'generalist'>('uiux');
  const [audience, setAudience] = useState<'startup' | 'agency' | 'enterprise' | 'freelance'>('agency');
  const [impression, setImpression] = useState<'tech' | 'luxury' | 'bold' | 'clean'>('luxury');
  const [step, setStep] = useState<1 | 2 | 3 | 'result'>(1);

  if (!isOpen) return null;

  // Recommendation logic
  const getRecommendation = (): {
    id: StyleId;
    title: string;
    reason: string;
    motionAdvice: string;
    typographyPairing: string;
  } => {
    if (impression === 'luxury' || (role === 'uiux' && audience === 'startup')) {
      return {
        id: 'apple-liquid',
        title: 'Apple iOS 26 Liquid Glass (Spatial Frosted Glass & Proportional HIG)',
        reason: 'Sangat cocok untuk SAN yang menginginkan estetika Apple iOS 26 masa depan dengan liquid glass multi-layer, specular highlights, dan tipografi proporsional yang jelas (anti-gepeng dan tidak berlebihan).',
        motionAdvice: 'Gunakan Fluid Spatial Spring (stiffness: 320, damping: 26) dengan durasi 220-280ms yang sangat responsif dan elegan.',
        typographyPairing: 'SF Pro / Inter Proportional (Natural Ratio) + JetBrains Mono untuk data',
      };
    }
    if (impression === 'tech' || role === 'frontend' || role === 'creative') {
      return {
        id: 'creative-tech',
        title: 'Creative Technologist (Dark Bento Grid & Kinetic Canvas)',
        reason: 'Sangat cocok karena kamu ingin membuktikan kapabilitas teknis dan interaktivitas. Bento Grid memudahkan menata kode, live stats, dan proyek sekaligus tanpa membebani recruiter dengan teks monoton.',
        motionAdvice: 'Gunakan Spring physics elastis (stiffness 300, damping 25) pada hover kartu dan efek 3D perspective tilt.',
        typographyPairing: 'Syne (Headline) + JetBrains Mono (Data/Tech) + Plus Jakarta Sans (Body)',
      };
    }
    if (audience === 'agency' || audience === 'freelance') {
      return {
        id: 'editorial',
        title: 'Editorial Avant-Garde (Minimalist Magazine & Studio)',
        reason: 'Pilihan paling elegan untuk memposisikan dirimu di segmen high-ticket. Agensi kreatif dan klien premium sangat terkesan dengan tata letak editorial, serif miring dramatis, dan transisi tirai yang tenang.',
        motionAdvice: 'Gunakan Velvet magnetic flow (durasi 350-500ms dengan cubic-bezier(0.19, 1, 0.22, 1)). Hindari animasi yang terlalu cepat atau membal.',
        typographyPairing: 'Cormorant Garamond (Italic Hero) + Syne (Architectural) + Plus Jakarta Sans (Body)',
      };
    }
    if (impression === 'bold') {
      return {
        id: 'neo-brutalist',
        title: 'Neo-Brutalist High-Voltage (Bold, Raw & Tactile)',
        reason: 'Membuat portofoliomu langsung mencuri perhatian dari ratusan pelamar. Gaya ini membuktikan keberanian mengambil keputusan desain unik dan kepiawaian menciptakan visual yang berkarakter kuat.',
        motionAdvice: 'Gunakan Snappy tactile pop (120-180ms) dengan pergeseran bayangan 2px pada tombol aktif dan ticker running text marquee.',
        typographyPairing: 'Syne Black (Bold Headline) + Plus Jakarta Sans Bold (Body)',
      };
    }
    return {
      id: 'swiss-grid',
      title: 'Swiss International Minimalist (Clean 12-Axis Grid)',
      reason: 'Standar emas untuk lingkungan enterprise dan produk berskala besar. Menunjukkan ketelitian sistem, pemahaman arsitektur informasi, dan respek tinggi terhadap aksesibilitas pengguna.',
      motionAdvice: 'Gunakan sub-150ms precision settle. Animasi mikro cepat dan fungsional tanpa efek goyang atau bouncing.',
      typographyPairing: 'Plus Jakarta Sans (Tight Tracking) + Monospace Numerals',
    };
  };

  const rec = getRecommendation();

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
          className="relative z-10 w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-semibold">Konsultan Desain & Motion Portfolio</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Langkah 1 dari 3: Identifikasi Peran
                </div>
                <h4 className="text-xl font-bold font-syne">
                  Apa peran atau spesialisasi utama yang ingin kamu tonjolkan?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { id: 'uiux', label: 'Product & UI/UX Designer', desc: 'Fokus pada alur pengguna, visual aesthetics, dan design systems.' },
                    { id: 'frontend', label: 'Frontend / Full-Stack Engineer', desc: 'Fokus pada arsitektur kode React/Vite, performa, dan integrasi API.' },
                    { id: 'creative', label: 'Creative Technologist / Motion', desc: 'Fokus pada micro-interactions, canvas/WebGL, dan animasi dinamis.' },
                    { id: 'generalist', label: 'Design Lead & Multi-Disiplin', desc: 'Menyeimbangkan strategi bisnis, eksekusi visual, dan delivery.' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setRole(item.id as any)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        role === item.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-neutral-400">{item.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 text-xs font-semibold bg-white text-black hover:bg-neutral-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Lanjut ke Target Recruiter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Langkah 2 dari 3: Target Audiens
                </div>
                <h4 className="text-xl font-bold font-syne">
                  Siapa target utama yang ingin kamu buat terkesan?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { id: 'agency', label: 'Creative Design & Branding Agencies', desc: 'Sangat peduli pada keunikan visual, tipografi, dan taste level.' },
                    { id: 'startup', label: 'Tech Startups & Fast-Growing SaaS', desc: 'Mencari desainer/engineer yang lincah, paham produk, dan proaktif.' },
                    { id: 'enterprise', label: 'Enterprise & Multi-National Company', desc: 'Menghargai kepatuhan sistem, dokumentasi, dan keterbacaan data.' },
                    { id: 'freelance', label: 'High-Ticket Direct Clients', desc: 'Klien yang mencari partner terpercaya untuk proyek beromzet tinggi.' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setAudience(item.id as any)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        audience === item.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-neutral-400">{item.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-5 py-2.5 text-xs font-semibold bg-white text-black hover:bg-neutral-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Lanjut ke Karakter Visual</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Langkah 3 dari 3: Impresi Karakter
                </div>
                <h4 className="text-xl font-bold font-syne">
                  Apa impresi visual nomor satu yang ingin kamu tampilkan?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { id: 'luxury', label: 'Elegan, Anggun & High-Fashion', desc: 'Nuansa majalah seni arsitektur, tipografi berkelas, dan tenang.' },
                    { id: 'tech', label: 'Futuristik, Interaktif & Kinetik', desc: 'Kanvas gelap, interaksi partikel, Bento grid, dan data kode.' },
                    { id: 'bold', label: 'Lantang, Berani Beda & Penuh Energi', desc: 'Border tebal, drop shadows keras, marquee tanpa batas.' },
                    { id: 'clean', label: 'Rapi, Minimalis Murni & Presisi', desc: 'Grid 12-kolom Swiss yang tertata, bersih dari dekorasi palsu.' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setImpression(item.id as any)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        impression === item.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-neutral-400">{item.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setStep('result')}
                    className="px-6 py-2.5 text-xs font-semibold bg-amber-400 text-black hover:bg-amber-300 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-lg shadow-amber-400/20"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Lihat Rekomendasi Gaya & Motion</span>
                  </button>
                </div>
              </div>
            )}

            {step === 'result' && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-neutral-950 border border-amber-400/40 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Rekomendasi Terpilih Berdasarkan Profilmu</span>
                  </div>

                  <h3 className="text-2xl font-bold font-syne text-white">
                    {rec.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {rec.reason}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-800 text-xs">
                    <div>
                      <span className="font-mono text-neutral-400">Filosofi Animasi:</span>{' '}
                      <span className="text-neutral-200">{rec.motionAdvice}</span>
                    </div>
                    <div>
                      <span className="font-mono text-neutral-400">Pasangan Tipografi:</span>{' '}
                      <span className="text-neutral-200">{rec.typographyPairing}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-neutral-400 hover:text-white"
                  >
                    Ulangi Kuis Diagnostik
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={onClose}
                      className="px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-lg"
                    >
                      Tutup
                    </button>
                    <button
                      onClick={() => {
                        onApplyStyle(rec.id);
                        onClose();
                      }}
                      className="px-6 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>Terapkan Gaya Ini Sekarang</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
