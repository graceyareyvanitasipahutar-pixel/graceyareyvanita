import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subheading?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subheading, intro, children, className = '' }: SectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`section scroll-mt-20 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-section px-6 md:px-10">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl`}>
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {title}
          </h2>
          {subheading && (
            <p className="mt-3 font-serif text-lg italic text-navy-500 sm:text-xl">{subheading}</p>
          )}
          {intro && <p className="mt-5 text-base leading-relaxed text-navy-600 text-pretty">{intro}</p>}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function Monogram({ size = 96 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-navy-900 font-serif font-medium text-gold-200 shadow-card ring-1 ring-navy-900/10"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span style={{ fontSize: size * 0.42 }}>G</span>
    </div>
  );
}
