import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';
import { useScrolled, useActiveSection } from '@/hooks/useScrollReveal';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100/80 bg-white/85 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-section items-center justify-between px-6 md:px-10 md:h-20">
        <button
          onClick={() => handleNav('home')}
          className="group flex items-center gap-2.5 text-left"
          aria-label="Ke bagian atas halaman"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 font-serif text-2xl font-medium leading-none text-gold-200 transition-transform group-hover:scale-105">
            G
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight text-navy-900 sm:block">
            Graceya Reyvanita Sipahutar
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? 'text-navy-900' : 'text-navy-500 hover:text-navy-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-gold-400 transition-transform duration-300 ${
                    active === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvPath}
            download
            className="hidden items-center gap-2 rounded-lg border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800 transition-all hover:border-navy-300 hover:bg-navy-50 hover:shadow-soft sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Unduh CV
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 hover:bg-navy-50 lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu seluler */}
      <div
        className={`lg:hidden overflow-hidden border-t border-navy-100 bg-white transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                  active === link.id
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={profile.cvPath}
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              Unduh CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
