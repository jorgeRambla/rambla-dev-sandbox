import type { ReactNode } from 'react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  render: () => ReactNode;
};

export const projects: Project[] = [
  {
    slug: 'project-a',
    title: 'Project A',
    description: 'An example side project. Replace with a real experiment.',
    render: () => (
      <>
        <p>
          This is the placeholder page for <strong>Project A</strong>. Each side project lives under
          its own path, e.g. <code>/#/project-a</code>.
        </p>
        <p>Drop the project UI, demo or write-up here.</p>
      </>
    ),
  },
  {
    slug: 'the-great-counter',
    title: 'The Great Counter',
    description: 'A multi-player counter — add players, each with their own counter and color.',
    render: () => (
      <p>
        <a className="r-button" href="/projects/the-great-counter/">
          Open The Great Counter →
        </a>
      </p>
    ),
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
