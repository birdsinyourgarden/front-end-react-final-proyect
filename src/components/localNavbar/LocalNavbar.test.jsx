import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import LocalNavbar from './LocalNavbar';

describe('Local Navbar', () => {
  it('renders logo', () => {
    const { getByRole } = render(<BrowserRouter><LocalNavbar /></BrowserRouter>);
    expect(getByRole('img', { name: 'logo Aidei' })).toBeVisible();
  });
});
