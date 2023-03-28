import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LocalNavbar from './LocalNavbar';

test('Local Navbar links are rendered correctly', () => {
  render(
    <BrowserRouter> 
      <LocalNavbar />
    </BrowserRouter>
  );
  const employeesLink = screen.getByText(/Registro de Personal/i);
  const profileLink = screen.getByText(/Perfil/i);
  const userMenuLink = screen.getByText(/Menú Personal/i);
  const solicitudesLink = screen.getByText(/Solicitudes/i);
  const absencesLink = screen.getByText(/Actualizar Ausencia/i);

  expect(employeesLink).toHaveAttribute('href', '/employees');
  expect(profileLink).toHaveAttribute('href', '/profile');
  expect(userMenuLink).toHaveAttribute('href', '/homeUser');
  expect(solicitudesLink).toHaveAttribute('href', '/solicitudes');
  expect(absencesLink).toHaveAttribute('href', '/absences');
});

describe('Local Navbar', () => {
  it('renders logo', () => {
    const { getByRole } = render(<BrowserRouter><LocalNavbar /></BrowserRouter>);
    expect(getByRole('img', { name: 'logo Aidei' })).toBeVisible();
  });
});
