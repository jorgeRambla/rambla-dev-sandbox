import type { ReactNode } from 'react';

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="r-hero">
      <h1>{title}</h1>
      {subtitle && <p className="r-hero-subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}
