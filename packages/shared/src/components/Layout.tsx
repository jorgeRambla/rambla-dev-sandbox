import type { ReactNode } from 'react';
import type { NavLink } from '../lib/utils';
import { cx } from '../lib/utils';

type LayoutProps = {
  title: string;
  nav?: NavLink[];
  children: ReactNode;
  className?: string;
};

export function Layout({ title, nav, children, className }: LayoutProps) {
  return (
    <div className={cx('r-layout', className)}>
      <header className="r-header">
        <a className="r-brand" href="/">
          {title}
        </a>
        {nav && nav.length > 0 && (
          <nav className="r-nav">
            {nav.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main className="r-main">{children}</main>
    </div>
  );
}
