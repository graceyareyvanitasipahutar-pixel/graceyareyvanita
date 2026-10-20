import { useEffect, useState } from 'react';
import { X, ChevronRight, Target, Wrench, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';
import { Section } from './Section';
import { projects, type Project } from '@/data/portfolio';

function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-navy-200 bg-cream text-navy-400">
      <ImageIcon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-navy-100 bg-white shadow-card animate-fade-up">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-navy-100 bg-white/95 px-6 py-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-200">
              <project.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">
                Proyek {project.number} · {project.category} · {project.year}
              </p>
              <h3 id="project-modal-title" className="font-display text-lg font-bold text-navy-900">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-500 hover:bg-navy-50 hover:text-navy-900"
            aria-label="Tutup detail proyek"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-7 px-6 py-6 md:px-8 md:py-8">
          <section>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-navy-400">Gambaran Proyek</h4>
            <p className="text-sm leading-relaxed text-navy-700">{project.description}</p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-navy-100 bg-cream/60 p-5">
              <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-400">
                <Target className="h-4 w-4 text-gold-500" /> Tujuan
              </h4>
              <p className="text-sm leading-relaxed text-navy-700">{project.objective}</p>
            </div>
            <div className="rounded-xl border border-navy-100 bg-cream/60 p-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">Kontribusi Saya</h4>
              <ul className="space-y-2">
                {project.contributions.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-navy-700">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {project.tools && (
            <section>
              <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-400">
                <Wrench className="h-4 w-4 text-gold-500" /> Perangkat yang Digunakan
              </h4>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">Galeri Proyek</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <Placeholder label="Tambahkan desain konten / materi iklan" />
              <Placeholder label="Tambahkan screenshot proyek asli" />
            </div>
            <p className="mt-3 text-xs text-navy-400">
              Placeholder disediakan untuk menambahkan materi visual asli proyek.
            </p>
          </section>

          <section>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-400">
              <Sparkles className="h-4 w-4 text-gold-500" /> Hasil
            </h4>
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-navy-200 bg-cream/60 px-4 py-3 text-sm text-navy-400">
              <CheckCircle2 className="h-4 w-4" />
              Data hasil kuantitatif belum tersedia — akan diperbarui setelah bukti pendukung tersedia.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Karya"
      title="Proyek Pilihan"
      subheading="Bisnis Digital, Pemasaran, dan Pengembangan Merek"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActive(project)}
            className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 text-left shadow-soft transition-all hover:-translate-y-1 hover:border-gold-200 hover:shadow-card"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-gold-200">
                <project.icon className="h-5 w-5" />
              </span>
              <span className="font-serif text-3xl font-semibold text-navy-100 transition-colors group-hover:text-gold-200">
                {project.number}
              </span>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">
              {project.category} · {project.year}
            </span>
            <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-navy-900">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{project.description}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-gold-700">
              Lihat studi kasus
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}
