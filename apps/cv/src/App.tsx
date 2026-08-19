import { Card, Footer, Hero, Layout, type NavLink } from '@rambla/shared';

const nav: NavLink[] = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: 'https://sandbox.rambla.dev' },
  { label: 'Contact', href: '#contact' },
];

export function App() {
  return (
    <Layout title="Jorge Rambla" nav={nav}>
      <Hero
        title="Jorge Rambla"
        subtitle="Software engineer — building things on the web and in the cloud."
      />

      <section id="experience">
        <h2>Experience</h2>
        <div className="r-grid">
          <Card title="Role placeholder" description="Company · Years — short summary of impact." />
          <Card title="Role placeholder" description="Company · Years — short summary of impact." />
        </div>
      </section>

      <section id="contact" style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <Card
          title="Get in touch"
          description="Placeholder — links to email, GitHub and LinkedIn go here."
        />
      </section>

      <Footer />
    </Layout>
  );
}
