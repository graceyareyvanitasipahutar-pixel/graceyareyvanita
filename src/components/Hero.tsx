import { ArrowRight, FolderKanban, Mail, MapPin, Briefcase } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-navy-100/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #172b4d 1px, transparent 1px), linear-gradient(to bottom, #172b4d 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-section items-center gap-12 px-6 pb-20 md:px-10 md:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left — text */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-gold-50/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-700">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {profile.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl md:text-6xl text-balance">
            Graceya Reyvanita
            <span className="block text-navy-700">Sipahutar</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg font-medium text-navy-700 sm:text-xl">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy-500 text-pretty">
            {profile.supporting}
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm font-medium text-navy-600">
            <MapPin className="h-4 w-4 text-gold-500" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('experience')}
              className="group inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-navy-800 hover:shadow-card"
            >
              Lihat Pengalaman
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-5 py-3 text-sm font-semibold text-navy-800 transition-all hover:border-navy-300 hover:bg-navy-50"
            >
              <FolderKanban className="h-4 w-4" />
              Jelajahi Proyek
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-gold-300 bg-gold-50/60 px-5 py-3 text-sm font-semibold text-gold-800 transition-all hover:bg-gold-100"
            >
              <Mail className="h-4 w-4" />
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* Right — visual */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} flex justify-center lg:justify-end`} style={{ transitionDelay: '120ms' }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-navy-100" aria-hidden="true" />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-gold-100/70" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-2xl bg-navy-100/70" aria-hidden="true" />

            <div className="relative flex h-72 w-72 flex-col items-center justify-center rounded-[2rem] bg-navy-900 p-8 text-center shadow-card sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              <span className="font-serif text-7xl font-medium leading-none text-gold-200 sm:text-8xl">G</span>
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-navy-200">
                Portofolio Profesional
              </span>
              <div className="mt-6 h-px w-16 bg-gold-300/60" />
              <span className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-navy-300">
                <Briefcase className="h-3.5 w-3.5 text-gold-300" />
                Administrasi SDM dan Rekrutmen
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-navy-100 bg-white/60">
        <div className="mx-auto flex w-full max-w-section flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs font-medium text-navy-500 md:px-10">
          <span className="uppercase tracking-[0.18em]">Politeknik Caltex Riau</span>
          <span className="hidden h-4 w-px bg-navy-200 sm:block" />
          <span>D4 — Bisnis Digital</span>
          <span className="hidden h-4 w-px bg-navy-200 sm:block" />
          <span>IPK 3,73 / 4,00</span>
          <span className="hidden h-4 w-px bg-navy-200 sm:block" />
          <span className="uppercase tracking-[0.18em] text-gold-700">Terbuka untuk peluang</span>
        </div>
      </div>
    </section>
  );
}
