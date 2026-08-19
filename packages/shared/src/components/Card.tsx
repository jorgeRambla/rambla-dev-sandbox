import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  description?: string;
  href?: string;
  children?: ReactNode;
};

export function Card({ title, description, href, children }: CardProps) {
  const content = (
    <>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </>
  );

  if (href) {
    return (
      <a className="r-card r-card-link" href={href}>
        {content}
      </a>
    );
  }

  return <div className="r-card">{content}</div>;
}
