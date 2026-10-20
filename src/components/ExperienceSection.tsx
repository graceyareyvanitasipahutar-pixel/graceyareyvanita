import { Briefcase, CalendarDays, MapPin, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { experiences, experienceTypeMeta, type Experience } from '@/data/portfolio';

const typeOrder: Experience['type'][] = ['work', 'leadership', 'organization'];

export function ExperienceSection() {
  const sorted = [...experiences].sort(
    (a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type),
  );

  return (
    <Section
      id="experience"
      eyebrow="Karier dan Kepemimpinan"
      title="Pengalaman Profesional"
      subheading="Mengembangkan Pengalaman dalam Administrasi SDM"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-navy-100 md:left-5" aria-hidden="true" />

        <div className="space-y-5">
          {sorted.map((exp) => {
            const meta = experienceTypeMeta[exp.type];
            const isWork = exp.type === 'work';
            return (
              <article
                key={exp.id}
                className={`relative pl-12 md:pl-16 ${
                  isWork ? '' : ''
                }`}
              >
                {/* Node */}
                <span
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white ${
                    isWork
                      ? 'border-gold-400 text-gold-600'
                      : 'border-navy-300 text-navy-600'
                  }`}
                  aria-hidden="true"
                >
                  <meta.icon className="h-4 w-4" />
                </span>

                <div
                  className={`rounded-xl border bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-card md:p-6 ${
                    isWork
                      ? 'border-gold-200 shadow-soft'
                      : 'border-navy-100 shadow-soft'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          isWork
                            ? 'bg-gold-50 text-gold-700'
                            : 'bg-navy-50 text-navy-600'
                        }`}
                      >
                        {meta.label}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-navy-900 md:text-xl">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-navy-700">{exp.org}</p>
                    </div>
                    <div className="flex flex-col items-start gap-1 text-xs text-navy-500 sm:items-end">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="mt-4 text-sm leading-relaxed text-navy-600">{exp.description}</p>
                  )}

                  {exp.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <li
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-md border border-gold-200 bg-gold-50/70 px-3 py-1.5 text-xs font-medium text-gold-800"
                        >
                          <Briefcase className="h-3.5 w-3.5" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.responsibilities && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-navy-600">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                          <span className="leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
