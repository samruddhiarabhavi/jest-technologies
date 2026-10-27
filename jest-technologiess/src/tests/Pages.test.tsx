import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Careers from '../pages/Careers';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import { posts } from '../data/posts';
import { roles } from '../data/careers';
import { projects } from '../data/projects';
import { services } from '../data/services';

const at = (ui: ReactElement, path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/blog/:slug" element={ui} />
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>,
  );

describe('Pages', () => {
  it.each([
    ['About', <About />, /eleven years/i],
    ['Services', <Services />, /full-cycle software/i],
    ['Projects', <Projects />, /evidence is in production/i],
    ['Careers', <Careers />, /software you are proud to maintain/i],
    ['Blog', <Blog />, /notes from the engineering floor/i],
    ['Contact', <Contact />, /request a proposal/i],
    ['Not found', <NotFound />, /page not found/i],
  ])('%s renders its heading', (_n, ui, heading) => {
    at(ui);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heading);
  });
});

describe('About', () => {
  it('has the story, stats, values, milestones, and leadership sections', () => {
    at(<About />);
    ['OUR STORY', 'OUR VALUES', 'MILESTONES', 'LEADERSHIP'].forEach((t) => expect(screen.getByText(t)).toBeInTheDocument());
    expect(screen.getAllByText('150+').length).toBeGreaterThan(0);
    expect(screen.getAllByText('99.9%').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'Integrity in Code' })).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Aarav Shah' })).toBeInTheDocument();
  });
});

describe('Services', () => {
  it('lists every service with an anchor id', () => {
    at(<Services />);
    services.forEach((s) => {
      expect(screen.getByRole('heading', { name: s.title })).toBeInTheDocument();
      expect(document.getElementById(s.slug)).toBeInTheDocument();
    });
  });
});

describe('Projects', () => {
  it('shows all projects and filters by type', async () => {
    at(<Projects />);
    expect(screen.getAllByRole('article')).toHaveLength(projects.length);
    await userEvent.click(screen.getByRole('button', { name: 'Mobile' }));
    expect(screen.getByRole('button', { name: 'Mobile' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByRole('article')).toHaveLength(projects.filter((p) => p.category === 'Mobile').length);
    await userEvent.click(screen.getByRole('button', { name: 'All' }));
    expect(screen.getAllByRole('article')).toHaveLength(projects.length);
  });
});

describe('Insights', () => {
  it('links every post and renders an article by slug', () => {
    at(<Blog />);
    posts.forEach((p) => expect(screen.getByRole('link', { name: new RegExp(p.title.slice(0, 20), 'i') })).toHaveAttribute('href', `/blog/${p.slug}`));
  });

  it('renders a post and a not-found state', () => {
    const { unmount } = at(<BlogPost />, `/blog/${posts[1].slug}`);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(posts[1].title);
    unmount();
    at(<BlogPost />, '/blog/nope');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/article not found/i);
  });
});

describe('Careers and Contact', () => {
  it('lists open roles that link to contact', () => {
    at(<Careers />);
    roles.forEach((r) => expect(screen.getByRole('link', { name: `Apply for ${r.title}` })).toHaveAttribute('href', '/contact'));
  });

  it('submits the enquiry form and shows confirmation', async () => {
    at(<Contact />);
    await userEvent.type(screen.getByLabelText('Name'), 'Sam');
    await userEvent.type(screen.getByLabelText('Work email'), 'sam@example.com');
    await userEvent.click(screen.getByRole('button', { name: /send request/i }));
    expect(screen.getByRole('status')).toHaveTextContent(/request received/i);
  });
});
