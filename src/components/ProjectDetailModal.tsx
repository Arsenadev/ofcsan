import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Copy, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Project, StyleId } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  accentColor?: string;
  themeStyle?: StyleId;
}

export function ProjectDetailModal({
  project,
  onClose,
  accentColor = '#38bdf8',
  themeStyle = 'apple-liquid',
}: ProjectDetailModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopySummary = () => {
    const text = `${project.title} (${project.year})\nKlien: ${project.client} · Peran: ${project.role}\n\nHasil: ${project.impactMetric} - ${project.impactDetail}\n\nProblem:\n${project.caseStudyStory.problem}\n\nSolusi:\n${project.caseStudyStory.solution}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isAppleLiquid = themeStyle === 'apple-liquid';
  const isBrutalist = themeStyle === 'neo-brutalist';
  const isEditorial = themeStyle === 'editorial';
  const isSwiss = themeStyle === 'swiss-grid';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className={`relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto ${
            isAppleLiquid
              ? 'liquid-glass text-neutral-100 border border-white/[0.16] shadow-2xl rounded-3xl'
              : isBrutalist
              ? 'bg-amber-50 text-neutral-900 border-3 border-black shadow-[8px_8px_0px_#000] rounded-2xl'
              : isSwiss
              ? 'bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl'
              : isEditorial
              ? 'bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-2xl'
              : 'bg-neutral-900 text-neutral-100 border border-neutral-800 shadow-2xl rounded-2xl'
          }`}
        >
          {/* Top Bar with Close */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-inherit/90 backdrop-blur-md">
            {/* Zero-Pill unboxed metadata */}
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-medium text-neutral-200">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-700/80 rounded-lg transition-colors"
                title="Salin ringkasan studi kasus ke clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Studi Kasus'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Role */}
            <div className="space-y-3">
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance ${
                  isEditorial ? 'font-cormorant italic text-3xl sm:text-5xl' : 'font-syne'
                }`}
              >
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Impact Metric Hero Card */}
            <div
              className={`p-6 rounded-xl border ${
                isBrutalist
                  ? 'bg-yellow-200/90 border-2 border-black text-black'
                  : 'bg-neutral-800/40 border-neutral-700/60'
              } flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
            >
              <div>
                <span className="text-xs font-medium tracking-wide uppercase text-neutral-400 block mb-1">
                  Metrik Dampak Terukur
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight">
                  {project.impactMetric}
                </div>
              </div>
              <div className="text-sm text-neutral-300 max-w-md">
                {project.impactDetail}
              </div>
            </div>

            {/* High-Fidelity Project Visual */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-neutral-800 bg-neutral-900 group">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-mono">Tipe: {project.projectType || project.category}</span>
                <span className="font-mono flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${project.status === 'Online' ? 'bg-emerald-400 animate-pulse' : 'bg-sky-400'}`} />
                  Status: {project.status || 'Development'}
                </span>
              </div>
            </div>

            {/* Structured Case Study Sections (STAR Methodology) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span>01.</span>
                  <span className="uppercase tracking-wider">Problem Statement</span>
                </div>
                <h4 className="text-base font-semibold text-neutral-200">Tantangan Klien & Pengguna</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.caseStudyStory.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <span>02.</span>
                  <span className="uppercase tracking-wider">Design Approach</span>
                </div>
                <h4 className="text-base font-semibold text-neutral-200">Riset & Eksplorasi Interaksi</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.caseStudyStory.approach}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span>03.</span>
                  <span className="uppercase tracking-wider">Implementation</span>
                </div>
                <h4 className="text-base font-semibold text-neutral-200">Solusi Arsitektur & Motion</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.caseStudyStory.solution}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <span>04.</span>
                  <span className="uppercase tracking-wider">Measurable Results</span>
                </div>
                <h4 className="text-base font-semibold text-neutral-200">Hasil & Dampak Bisnis</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.caseStudyStory.results}
                </p>
              </div>
            </div>

            {/* Zero-Pill tags */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">Teknologi & Konsep:</span>
              {project.tags.map((tag, idx) => (
                <span key={tag} className="flex items-center gap-2">
                  <span>{tag}</span>
                  {idx < project.tags.length - 1 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
              <div className="text-xs text-neutral-400">
                Tertarik mendiskusikan karya atau kolaborasi proyek digital?
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {project.projectDomain && (
                  <a
                    href={project.projectDomain}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-emerald-400 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-400/30 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  >
                    <span>Kunjungi {project.projectDomain.replace('https://', '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-700/80 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-700/80 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  Tutup
                </button>
                <a
                  href="#connect"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-xl transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md"
                >
                  <span>Hubungi SAN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
