import { Card, Footer, Hero, Layout, type NavLink } from '@rambla/shared';
import { findProject, projects } from './projects';
import { useHashRoute } from './useHashRoute';

const nav: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'CV', href: 'https://jorge.rambla.dev' },
];

function Home() {
  return (
    <>
      <Hero title="Sandbox" subtitle="A playground for side projects and experiments." />
      <section>
        <h2>Projects</h2>
        <div className="r-grid">
          {projects.map((p) => (
            <Card key={p.slug} title={p.title} description={p.description} href={`#/${p.slug}`} />
          ))}
        </div>
      </section>
    </>
  );
}

export function App() {
  const slug = useHashRoute();
  const project = slug ? findProject(slug) : undefined;

  return (
    <Layout title="sandbox.rambla.dev" nav={nav}>
      {project ? (
        <article>
          <p>
            <a href="#/">← Back</a>
          </p>
          <Hero title={project.title} subtitle={project.description} />
          <div>{project.render()}</div>
        </article>
      ) : slug ? (
        <Hero title="Not found" subtitle={`No project at /${slug}.`}>
          <p>
            <a href="#/">← Back to sandbox</a>
          </p>
        </Hero>
      ) : (
        <Home />
      )}
      <Footer />
    </Layout>
  );
}
