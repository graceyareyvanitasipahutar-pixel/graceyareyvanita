import { ArrowUpRight, FolderOpen, Sparkles } from 'lucide-react';
import { Section } from './Section';
import { achievements, competitions } from '@/data/portfolio';
import { education, profile } from '@/data/portfolio';

export function Achievements() {
  const winners = achievements.filter((a) => a.status === 'winner');
  return (
    <Section
      id="achievements"
      eyebrow="Pencapaian"
      title="Prestasi dan Penghargaan"
      subheading="Prestasi dan partisipasi dalam kompetisi bisnis"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {winners.map((a) => (
          <div
            key={a.award}
            className="group flex flex-col gap-3 rounded-xl border border-navy-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold-200 hover:shadow-card"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50 text-gold-600">
                <a.icon className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                {a.year}
              </span>
            </div>
            <div>
              <p className="font-display text-base font-bold leading-snug text-navy-900">{a.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">{a.event}</p>
            </div>
            <span className="mt-auto inline-flex w-fit items-center rounded-md bg-cream px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-navy-500">
              {a.category}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
          Kompetisi yang Tercantum dalam CV
        </h3>
        <div className="grid gap-3 md:grid-cols-3">
          {competitions.map((competition) => (
            <div
              key={competition.title}
              className="flex min-w-0 flex-col rounded-lg border border-dashed border-navy-200 bg-cream/60 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-navy-500">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-navy-500">
                  {competition.year}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug text-navy-800">{competition.title}</p>
              <p className="mt-1 text-xs text-navy-500">
                {competition.category} · {competition.status}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href={profile.certificateFolderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex items-center justify-between gap-4 rounded-xl border border-gold-200 bg-gold-50/60 p-5 transition-all hover:-translate-y-0.5 hover:bg-gold-100 hover:shadow-soft"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-200">
            <FolderOpen className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">Certificate Archive</span>
            <span className="mt-1 block text-sm font-medium text-navy-800">Lihat sertifikat dan dokumentasi kompetisi di Google Drive</span>
          </span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      {/* Education */}
      <div className="mt-14">
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">Pendidikan</h3>
        <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-soft">
          <div className="grid gap-0 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex items-center gap-4 p-6 md:border-r md:border-navy-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-200">
                <education.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-navy-900">{education.institution}</p>
                <p className="text-sm text-navy-500">{education.period}</p>
              </div>
            </div>
            <div className="px-6 py-4 md:py-6">
              <p className="text-sm font-semibold text-navy-800">{education.degree}</p>
              <p className="mt-1 text-sm text-navy-500">
                Politeknik Caltex Riau — program studi bidang bisnis digital.
              </p>
            </div>
            <div className="border-t border-navy-100 p-6 text-center md:border-l md:border-t-0">
              <p className="font-display text-2xl font-bold text-navy-900">{education.gpa}</p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-navy-400">IPK</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
