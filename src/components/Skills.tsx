import { Section } from './Section';
import { skillGroups } from '@/data/portfolio';

const levelStyles: Record<string, string> = {
  'Pengalaman Praktis': 'bg-navy-900 text-white',
  'Proyek Akademik': 'bg-gold-50 text-gold-800 border border-gold-200',
  'Pemahaman Dasar': 'bg-navy-100 text-navy-700',
  'Penguasaan Perangkat': 'bg-navy-50 text-navy-600 border border-navy-100',
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Kompetensi"
      title="Kompetensi Profesional"
      subheading="Administrasi SDM, Bisnis Digital, dan Pemasaran"
      intro="Kompetensi yang saya kembangkan mencakup administrasi rekrutmen, koordinasi organisasi, serta penerapan konsep bisnis dan pemasaran digital dalam proyek akademik."
    >
      <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="flex min-w-0 flex-col rounded-xl border border-navy-100 bg-white p-5 shadow-soft transition-all hover:shadow-card md:p-6"
          >
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <group.icon className="h-5 w-5" />
              </span>
              <h3 className="min-w-0 font-display text-base font-semibold leading-snug text-navy-900">
                {group.category}
              </h3>
            </div>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex min-w-0 flex-wrap items-center justify-between gap-x-2 gap-y-1.5 rounded-lg border border-navy-100/70 bg-cream/60 px-3 py-2.5"
                >
                  <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-navy-700">
                    {skill.name}
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-1 text-center text-[9px] font-semibold uppercase leading-none tracking-wide ${levelStyles[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs leading-relaxed text-navy-400">
        Label menunjukkan konteks pengalaman secara proporsional, bukan persentase kemampuan. Saya tidak mencantumkan ATS,
        HRIS, atau perangkat lunak rekrutmen tertentu karena belum tercatat dalam pengalaman.
      </p>
    </Section>
  );
}
