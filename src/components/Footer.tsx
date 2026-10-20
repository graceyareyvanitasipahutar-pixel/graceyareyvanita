import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-navy-100 bg-cream">
      <div className="mx-auto w-full max-w-section px-6 py-12 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 font-serif text-2xl font-medium leading-none text-gold-200">
                G
              </span>
              <span className="text-[15px] font-semibold text-navy-900">{profile.name}</span>
            </div>
            <p className="mt-2 max-w-sm text-sm text-navy-500">
              {profile.headline}. Berbasis di {profile.location}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navigasi kaki halaman">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-navy-500 transition-colors hover:text-navy-900"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 bg-white text-navy-700 transition-colors hover:bg-navy-50"
              aria-label="Kirim email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 bg-white text-navy-700 transition-colors hover:bg-navy-50"
              aria-label="Buka LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={() => scrollTo('home')}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 bg-white text-navy-700 transition-colors hover:bg-navy-50"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-100 pt-6">
          <p className="text-xs text-navy-400">
            © 2026 {profile.name}. Portofolio Profesional.
          </p>
        </div>
      </div>
    </footer>
  );
}
