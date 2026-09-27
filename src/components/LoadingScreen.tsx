import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SanLogoAssembly } from './shared/SanLogo';

interface LoadingScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

export function LoadingScreen({
  onComplete,
  durationMs = 5000,
}: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020205] text-white overflow-hidden select-none"
    >
      {/* 1. Deep Space Caustic Nebula Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/4 w-[580px] h-[580px] rounded-full bg-sky-500/15 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -45, 0],
            y: [0, 45, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[160px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      {/* Subtle Specular Matrix Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* 2. Central Cinematic Logo Synthesis (No Numbers / No Percentages) */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center justify-center p-6 sm:p-10">
        <SanLogoAssembly
          durationSeconds={durationMs / 1000}
          onComplete={onComplete}
        />
      </div>

      {/* 3. Subtle Ethereal Watermark / Architecture Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-2 text-[11px] font-mono text-neutral-400 whitespace-nowrap"
      >
        <Sparkles className="w-3 h-3 text-sky-400/80" />
        <span>SAN Creator Architecture · Digital Products & Liquid Glass Interfaces</span>
      </motion.div>

      {/* 4. Minimal Skip Trigger */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        onClick={onComplete}
        className="absolute bottom-8 right-6 sm:right-8 z-20 px-4 py-2 rounded-full liquid-glass border border-white/[0.12] text-xs font-mono text-neutral-300 hover:text-white hover:border-white/[0.25] transition-all cursor-pointer flex items-center gap-1.5 group shadow-lg whitespace-nowrap"
      >
        <span>Lewati</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>
    </motion.div>
  );
}
