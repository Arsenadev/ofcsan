import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, UserCheck, RotateCcw, Check, Plus, Trash2 } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { DEFAULT_PROFILE } from '../data/mockPortfolioData';

interface ProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onSaveProfile: (updated: PortfolioProfile) => void;
}

export function ProfileEditorModal({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}: ProfileEditorModalProps) {
  const [formData, setFormData] = useState<PortfolioProfile>(profile);
  const [newSkill, setNewSkill] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_PROFILE);
  };

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    if (!formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skillToRemove),
    });
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
          className="relative z-10 w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-semibold">Ubah Data Portofolio Kamu</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            <p className="text-xs text-neutral-400">
              Masukkan identitasmu sendiri. Semua perubahan akan langsung diterapkan pada seluruh 4 gaya portofolio!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Role / Spesialisasi</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-400">Bio Singkat (Hero)</label>
              <textarea
                rows={3}
                required
                value={formData.shortBio}
                onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Lokasi / Ketersediaan</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Email Kontak</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Tahun Pengalaman</label>
                <input
                  type="number"
                  min="0"
                  max="40"
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({ ...formData, yearsExperience: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Proyek Selesai</label>
                <input
                  type="number"
                  min="0"
                  max="200"
                  value={formData.completedProjects}
                  onChange={(e) => setFormData({ ...formData, completedProjects: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-sm text-white outline-none"
                />
              </div>
            </div>

            {/* Skills manager */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-mono text-neutral-400 block">Daftar Keahlian Utama (Skills)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Tambah skill baru, misal: Next.js / Figma / Three.js"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                  className="flex-1 px-3.5 py-2 bg-neutral-950 border border-neutral-800 focus:border-emerald-400 rounded-lg text-xs text-white outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 text-xs font-medium rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {formData.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-300"
                  >
                    <span>{s}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(s)}
                      className="text-neutral-500 hover:text-red-400"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset ke Data Awal</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Simpan & Perbarui Tampilan</span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
