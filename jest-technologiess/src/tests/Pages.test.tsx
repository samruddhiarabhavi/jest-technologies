import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Careers from '../pages/Careers';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import CaseStudies from '../pages/CaseStudies';
import Docs from '../pages/Docs';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';
import { posts } from '../data/posts';
import { roles } from '../data/careers';

const at = (ui: JSX.Element, path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/blog/:slug" element={ui} />
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>,
  );

describe('Secondary pages', () => {
  it.each([
    ['About', <About />, /build the team behind your team/i],
    ['Careers', <Careers />, /autopilot for marketing/i],
    ['Blog', <Blog />, /autonomous marketing/i],
    ['Case studies', <CaseStudies />, /results from teams/i],
    ['Docs', <Docs />, /documentation/i],
    ['Privacy', <Privacy />, /privacy policy/i],
    ['Terms', <Terms />, /terms of service/i],
    ['Not found', <NotFound />, /page not found/i],
  ])('%s renders its heading', (_n, ui, heading) => {
    at(ui);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heading);
  });

  it('lists every blog post with a working link', () => {
    at(<Blog />);
    posts.forEach((p) => expect(screen.getByRole('link', { name: new RegExp(p.title, 'i') })).toHaveAttribute('href', `/blog/${p.slug}`));
  });

  it('renders an article by slug and handles unknown slugs', () => {
    at(<BlogPost />, `/blog/${posts[5].slug}`);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(posts[5].title);
  });

  it('shows article not found for an unknown slug', () => {
    at(<BlogPost />, '/blog/nope');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/article not found/i);
    expect(screen.getByRole('link', { name: /all articles/i })).toHaveAttribute('href', '/blog');
  });

  it('lists open roles that link to the contact page', () => {
    at(<Careers />);
    roles.forEach((r) => expect(screen.getByRole('link', { name: `Apply for ${r.title}` })).toHaveAttribute('href', '/contact'));
  });

  it('shows legal sections', () => {
    at(<Privacy />);
    expect(screen.getByRole('heading', { name: 'Your choices' })).toBeInTheDocument();
  });
});
