import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, RotateCcw, Copy, Check, Sliders, Activity, Info } from 'lucide-react';

interface MotionLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MotionLabModal({ isOpen, onClose }: MotionLabModalProps) {
  const [selectedPreset, setSelectedPreset] = useState<'spring' | 'velvet' | 'tactile' | 'razor'>('spring');
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(22);
  const [duration, setDuration] = useState(0.3);
  const [copiedCode, setCopiedCode] = useState(false);
  const [testTrigger, setTestTrigger] = useState(0);

  if (!isOpen) return null;

  const presets = {
    spring: {
      name: 'Spring Kinetic (Bento & Modern Web)',
      description: 'Responsivitas alami dengan sedikit elastisitas saat mouse hover atau klik.',
      stiffness: 320,
      damping: 24,
      duration: 0.35,
      code: `// Motion / React Spring Physics
<motion.div
  whileHover={{ scale: 1.03, y: -4 }}
  whileTap={{ scale: 0.98 }}
  transition={{
    type: 'spring',
    stiffness: 320,
    damping: 24,
  }}
  className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800"
>
  {children}
</motion.div>`,
    },
    velvet: {
      name: 'Velvet Ease (Editorial & High-Fashion)',
      description: 'Gerakan lembut dan berbobot tanpa goyangan membal, sangat berkelas untuk visual seni.',
      stiffness: 180,
      damping: 32,
      duration: 0.55,
      code: `// Motion / React Velvet Curve
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: [0.19, 1, 0.22, 1], // Cubic Bezier mewah
  }}
  className="p-8 bg-neutral-950 border border-neutral-900"
>
  {children}
</motion.div>`,
    },
    tactile: {
      name: 'Snappy Tactile (Neo-Brutalist & Games)',
      description: 'Sensasi tombol fisik mekanis yang berbunyi klik dengan pergeseran bayangan 2px.',
      stiffness: 500,
      damping: 18,
      duration: 0.15,
      code: `// Neo-Brutalist Button Click Mechanics
<motion.button
  whileHover={{ x: -2, y: -2 }}
  whileTap={{ x: 2, y: 2 }}
  transition={{ duration: 0.12 }}
  className="px-6 py-3 bg-yellow-300 font-bold border-2 border-black shadow-[4px_4px_0px_#000] active:shadow-[2px_2px_0px_#000]"
>
  Klik Aksi
</motion.button>`,
    },
    razor: {
      name: 'Razor Settle (Swiss Grid & Enterprise)',
      description: 'Sub-150ms settling tanpa gangguan visual, mengutamakan kecepatan akses data.',
      stiffness: 400,
      damping: 35,
      duration: 0.18,
      code: `// Swiss Sub-150ms Interaction
<motion.div
  whileHover={{ borderColor: 'rgba(255,255,255,0.4)' }}
  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
  className="p-6 bg-neutral-900 border border-neutral-800"
>
  {children}
</motion.div>`,
    },
  };

  const currentPreset = presets[selectedPreset];

  const handleApplyPreset = (key: keyof typeof presets) => {
    setSelectedPreset(key);
    setStiffness(presets[key].stiffness);
    setDamping(presets[key].damping);
    setDuration(presets[key].duration);
    setTestTrigger((prev) => prev + 1);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentPreset.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
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
              <Activity className="w-5 h-5 text-sky-400" />
              <h3 className="text-sm font-semibold">Motion Lab: Fisika & Playground Animasi</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            {/* The 60-30-10 Golden Rule */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
              <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-neutral-300">
                <span className="font-semibold text-white">Aturan Emas 60-30-10 Motion Portfolio:</span>
                <p className="text-neutral-400 leading-relaxed">
                  • <strong className="text-neutral-200">60% Mikro-interaksi Cepat (&lt;150ms)</strong>: Hover tombol, tab switch, dropdown—harus responsif seketika tanpa jeda.<br />
                  • <strong className="text-neutral-200">30% Transisi Kontekstual (200-350ms)</strong>: Membuka modal studi kasus atau accordion detail.<br />
                  • <strong className="text-neutral-200">10% Delight Moments (350-500ms)</strong>: Hero entrance pertama kali atau particle canvas. Jangan pernah animasikan seluruh halaman terus-menerus!
                </p>
              </div>
            </div>

            {/* Presets Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">Pilih Karakter Motion:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.keys(presets) as Array<keyof typeof presets>).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleApplyPreset(key)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left cursor-pointer ${
                      selectedPreset === key
                        ? 'border-sky-400 bg-sky-500/10 text-white'
                        : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700 text-neutral-400'
                    }`}
                  >
                    <div className="font-semibold">{presets[key].name.split(' ')[0]}</div>
                    <div className="text-[10px] text-neutral-500 truncate">{presets[key].name.split('(')[1]?.replace(')', '') || ''}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Testing Stage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
              {/* Left: Interactive Card */}
              <div className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="text-xs font-mono text-neutral-500">Arahkan kursor atau klik kartu di bawah:</div>

                <motion.div
                  key={`${selectedPreset}-${testTrigger}`}
                  whileHover={
                    selectedPreset === 'tactile'
                      ? { x: -3, y: -3 }
                      : { scale: 1.05, y: -6 }
                  }
                  whileTap={
                    selectedPreset === 'tactile'
                      ? { x: 3, y: 3 }
                      : { scale: 0.96 }
                  }
                  transition={
                    selectedPreset === 'velvet'
                      ? { duration: duration, ease: [0.19, 1, 0.22, 1] }
                      : selectedPreset === 'razor'
                      ? { duration: duration, ease: [0.16, 1, 0.3, 1] }
                      : { type: 'spring', stiffness, damping }
                  }
                  className={`w-64 p-6 rounded-2xl cursor-pointer ${
                    selectedPreset === 'tactile'
                      ? 'bg-yellow-300 text-black border-3 border-black shadow-[6px_6px_0px_#000]'
                      : 'bg-neutral-900 border border-neutral-700 shadow-xl'
                  }`}
                >
                  <div className="text-xs font-mono uppercase opacity-75">Sample Card</div>
                  <h4 className="text-lg font-bold font-syne mt-1">Uji Efek Fisika</h4>
                  <p className="text-xs mt-2 opacity-85 leading-relaxed">
                    Perhatikan kelenturan gerakan saat mouse masuk dan keluar dari area kartu ini.
                  </p>
                  <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between text-[11px] font-mono">
                    <span>Active Preset</span>
                    <span className="font-bold">{selectedPreset}</span>
                  </div>
                </motion.div>

                <button
                  onClick={() => setTestTrigger((p) => p + 1)}
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white pt-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Putar Ulang Animasi</span>
                </button>
              </div>

              {/* Right: Sliders & Live Physics Values */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-400">Spring Stiffness (Kekakuan):</span>
                    <span className="text-sky-400 font-bold">{stiffness}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-400">Spring Damping (Peredam Kejut):</span>
                    <span className="text-sky-400 font-bold">{damping}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-400">Durasi Transisi Dasar:</span>
                    <span className="text-sky-400 font-bold">{duration}s</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.05"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-xs text-neutral-400 font-mono">
                  {currentPreset.description}
                </div>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">Kode Motion Siap Pakai (Motion / React):</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white rounded-md transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Tersalin!' : 'Salin Kode Ini'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-sky-300 overflow-x-auto">
                <code>{currentPreset.code}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
