import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { Section } from './Section';
import { profile, contact } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Section
      id="contact"
      eyebrow="Kontak"
      title={contact.title}
      subheading="Terbuka untuk koneksi dan peluang profesional"
    >
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid gap-6 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div className="rounded-2xl border border-navy-100 bg-cream/60 p-8 md:p-10">
          <p className="max-w-xl text-[15px] leading-relaxed text-navy-600 text-pretty">
            {contact.description}
          </p>

          <div className="mt-8 space-y-3">
            {contact.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-navy-100 bg-white p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-sm font-medium text-navy-800 hover:text-gold-700 hover:underline"
                    >
                      <span className="truncate">{item.value}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-navy-800">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-navy-900 p-8 text-white md:p-10">
          <div>
            <span className="font-serif text-7xl font-medium leading-none text-gold-200">G</span>
            <h3 className="mt-6 font-display text-xl font-bold">{profile.name}</h3>
            <p className="mt-1 text-sm text-navy-200">{profile.headline}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-navy-300">
              <MapPin className="h-4 w-4 text-gold-300" />
              {profile.location}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-300 px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-200"
            >
              <Mail className="h-4 w-4" />
              Kirim Surel
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              Kunjungi LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
