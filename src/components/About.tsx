import { Section } from './Section';
import { about } from '@/data/portfolio';

export function About() {
  const paragraphs = about.description.split('\n\n');

  return (
    <Section id="about" eyebrow="Profil" title={about.title} subheading={about.subheading}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-navy-600 text-pretty">
              {p}
            </p>
          ))}
          <div className="mt-6 flex items-center gap-6 border-t border-navy-100 pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-navy-900">3,73</p>
              <p className="text-xs font-medium uppercase tracking-wider text-navy-400">IPK / 4,00</p>
            </div>
            <div className="h-10 w-px bg-navy-100" />
            <div>
              <p className="font-display text-2xl font-bold text-navy-900">D4</p>
              <p className="text-xs font-medium uppercase tracking-wider text-navy-400">Bisnis Digital</p>
            </div>
            <div className="h-10 w-px bg-navy-100" />
            <div>
              <p className="font-display text-2xl font-bold text-navy-900">4+</p>
              <p className="text-xs font-medium uppercase tracking-wider text-navy-400">Pengalaman</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {about.highlights.map((h) => (
            <div
              key={h.title}
              className="group flex gap-4 rounded-xl border border-navy-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-gold-200">
                <h.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-500">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
