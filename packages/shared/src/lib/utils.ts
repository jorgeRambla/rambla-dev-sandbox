export type NavLink = {
  label: string;
  href: string;
};

export const SITE = {
  domain: 'rambla.dev',
  author: 'Jorge Rambla',
} as const;

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
