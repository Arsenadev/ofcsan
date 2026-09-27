import React, { useState } from 'react';
import { motion } from 'motion/react';
import officialLogoSrc from '../../assets/images/san_liquid_glass_emblem_1790507534735.jpg';

export interface SanLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'display';
  animated?: boolean;
  showText?: boolean;
  interactive?: boolean;
}

const sizeMap = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
  '2xl': 'w-28 h-28',
  display: 'w-48 h-48 sm:w-60 sm:h-60',
};

/* =========================================================================
   OFFICIAL SAN LIQUID GLASS EMBLEM & APP ICON
   Direct representation of the official brand identity from the user's photo:
   - Glossy 3D inflated liquid glass letters "SAN"
   - Glowing 4-pointed diamond star ✦ above 'A' and 'N'
   - Refractive caustic wave squircle chassis with electric cyan-blue glow
   ========================================================================= */
export function SanLogo({
  className = '',
  size = 'md',
  animated = false,
  showText = false,
  interactive = false,
}: SanLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const sizeClasses = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center gap-3 select-none ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <div className={`relative ${sizeClasses} shrink-0 flex items-center justify-center`}>
        {/* Ambient Halo Aura */}
        {(animated || isHovered) && (
          <>
            <motion.div
              animate={{
                scale: isHovered ? [1.1, 1.35, 1.1] : [1, 1.25, 1],
                opacity: isHovered ? [0.65, 0.95, 0.65] : [0.35, 0.65, 0.35],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-3 rounded-full blur-xl pointer-events-none bg-gradient-to-tr from-sky-500/40 via-blue-600/30 to-cyan-400/40"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 rounded-[26px] border border-sky-400/20 border-dashed opacity-40 pointer-events-none"
            />
          </>
        )}

        {/* Master Liquid Glass Squircle Emblem */}
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden liquid-glass border border-white/[0.22] shadow-[0_8px_32px_rgba(56,189,248,0.35)] flex items-center justify-center bg-black/80"
          animate={interactive && isHovered ? { scale: 1.06, rotate: 1 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <img
            src={officialLogoSrc}
            alt="SAN Official Logo"
            className="w-full h-full object-cover filter drop-shadow-[0_2px_12px_rgba(56,189,248,0.5)]"
            referrerPolicy="no-referrer"
          />

          {/* Internal Specular Glass Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-sky-400/[0.15] pointer-events-none" />
        </motion.div>
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
            SAN
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          </span>
          <span className="text-[11px] text-sky-400 font-mono tracking-wider">@ofcsan</span>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   CINEMATIC LOGO ASSEMBLY (LOADING SCREEN)
   Organic, progressive materialization of the exact SAN Liquid Glass logo:
   - ZERO 1-100% NUMBERS
   - 0.0s - 1.2s: Deep Space Caustics & Cosmic Holographic Crosshairs
   - 0.6s - 2.6s: 36 Stardust Particles Swirling & Coalescing Inward
   - 1.2s - 2.8s: Liquid Glass Squircle Chassis Condensation & Laser Scan
   - 1.8s - 3.8s: 3D "SAN" Letters & 4-Point Star ✦ Crystallization from Mist
   - 3.2s - 4.2s: Supernova Core Bloom & Diamond Star Flash
   - 3.6s - 4.6s: Specular Diagonal Gleam Bar Slicing Across the Emblem
   - 4.0s - 5.0s: Typographic De-blur & Gateway Stabilization
   ========================================================================= */
interface SanLogoAssemblyProps {
  onComplete?: () => void;
  durationSeconds?: number;
}

export function SanLogoAssembly({
  durationSeconds = 5,
}: SanLogoAssemblyProps) {
  // Stardust Particle Field (36 particles with deterministic spread angles)
  const particles = Array.from({ length: 32 }).map((_, i) => {
    const angle = (i / 32) * Math.PI * 2;
    const distance = 130 + ((i * 17) % 90);
    const startX = Math.cos(angle) * distance;
    const startY = Math.sin(angle) * distance;
    const size = 2 + (i % 3);
    const delay = 0.2 + (i % 8) * 0.15;
    return { id: i, startX, startY, size, delay };
  });

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-md mx-auto">
      {/* 1. Deep Caustic Ambient Background Pulsing */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.6, 1.25, 1.1],
          opacity: [0, 0.7, 0.5],
        }}
        transition={{ duration: durationSeconds, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-72 h-72 sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-sky-500/35 via-blue-600/30 to-cyan-400/35 blur-3xl pointer-events-none"
      />

      {/* 2. Concentric Holographic Blueprint Circles */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0, rotate: 0 }}
        animate={{
          scale: [0.2, 1.15, 1],
          opacity: [0, 0.6, 0.25],
          rotate: 180,
        }}
        transition={{ duration: durationSeconds * 0.85, ease: 'easeOut' }}
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-sky-400/25 border-dashed pointer-events-none"
      />

      <motion.div
        initial={{ scale: 0.1, opacity: 0, rotate: 0 }}
        animate={{
          scale: [0.1, 1.3, 1],
          opacity: [0, 0.45, 0.15],
          rotate: -90,
        }}
        transition={{ duration: durationSeconds * 0.9, ease: 'easeOut' }}
        className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-blue-400/20 pointer-events-none"
      />

      {/* 3. Central Stage Container */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
        {/* Stardust Particle Field Converging Into Logo Coordinates */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={`p-${p.id}`}
              initial={{
                x: p.startX,
                y: p.startY,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: [0, 1, 1, 0],
                scale: [0, 1.6, 1, 0.2],
              }}
              transition={{
                delay: p.delay,
                duration: durationSeconds * 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: p.size * 2,
                height: p.size * 2,
              }}
              className="absolute top-1/2 left-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]"
            />
          ))}
        </div>

        {/* Blueprint Coordinate Crosshairs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.2] }}
          transition={{ duration: 2.0, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-full h-px border-t border-dashed border-sky-400/30" />
          <div className="h-full w-px border-l border-dashed border-sky-400/30 absolute" />
        </motion.div>

        {/* Outer Squircle Chassis Framing */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl liquid-glass border border-white/[0.28] p-2 flex items-center justify-center overflow-hidden shadow-[0_16px_60px_rgba(56,189,248,0.45)] bg-black/90"
        >
          {/* Cyan Laser Scanline Sweeping Vertically */}
          <motion.div
            initial={{ y: -160, opacity: 0 }}
            animate={{
              y: [-140, 140, -140],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              delay: 0.8,
              duration: 2.2,
              repeat: 1,
              ease: 'easeInOut',
            }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_#38bdf8] z-20 pointer-events-none"
          />

          {/* THE OFFICIAL SAN LIQUID GLASS EMBLEM IMAGE */}
          <motion.img
            src={officialLogoSrc}
            alt="SAN Official Emblem"
            initial={{
              opacity: 0,
              scale: 0.65,
              filter: 'blur(20px) brightness(1.8) contrast(1.3)',
            }}
            animate={{
              opacity: [0, 0.4, 0.85, 1],
              scale: [0.65, 0.88, 1.03, 1],
              filter: [
                'blur(20px) brightness(1.8) contrast(1.3)',
                'blur(10px) brightness(1.4) contrast(1.2)',
                'blur(0px) brightness(1) contrast(1)',
              ],
            }}
            transition={{
              delay: 1.2,
              duration: 2.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full object-cover rounded-2xl relative z-10 filter drop-shadow-[0_4px_20px_rgba(56,189,248,0.6)]"
            referrerPolicy="no-referrer"
          />

          {/* Supernova Bloom from Core & Diamond Star ✦ */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 2.5, 0],
              opacity: [0, 0.95, 0],
            }}
            transition={{
              delay: 2.8,
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-cyan-200/90 blur-xl pointer-events-none z-30"
          />

          {/* Specular Diagonal Lens Glare Flash */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: [-200, 260],
              opacity: [0, 0.85, 0],
            }}
            transition={{
              delay: 3.2,
              duration: 1.0,
              ease: 'easeInOut',
            }}
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-25 z-30 pointer-events-none"
          />
        </motion.div>
      </div>

      {/* 4. TYPOGRAPHIC DE-BLUR & IDENTITY STABILIZATION (NO NUMBERS / PERCENTAGES!) */}
      <div className="mt-8 flex flex-col items-center text-center space-y-2.5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(12px)', letterSpacing: '0.45em' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            letterSpacing: '0.22em',
          }}
          transition={{
            delay: 2.4,
            duration: 1.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white flex items-center justify-center gap-2"
        >
          <span>SAN</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3.4, type: 'spring', stiffness: 400, damping: 20 }}
            className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_14px_#38bdf8]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="text-xs font-mono text-neutral-400 tracking-wider whitespace-nowrap"
        >
          @ofcsan · Full-Stack Developer & UI/UX Designer
        </motion.div>
      </div>
    </div>
  );
}
