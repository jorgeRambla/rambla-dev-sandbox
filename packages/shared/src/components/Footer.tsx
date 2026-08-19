import { SITE } from '../lib/utils';

export function Footer() {
  return (
    <footer className="r-footer">
      <p>
        © {new Date().getFullYear()} {SITE.author} · {SITE.domain}
      </p>
    </footer>
  );
}
