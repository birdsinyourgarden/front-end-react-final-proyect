import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('footer tests', () => {
  it('renders logo', () => {
    render(Footer());
    expect(screen.getByRole('img', { name: 'logo Fem Coders' })).toBeInTheDocument();
  });
  it('renders copyright', () => {
    render(Footer());
    expect(screen.getByRole('img', { name: 'Copyright' })).toBeInTheDocument();
  });
});
