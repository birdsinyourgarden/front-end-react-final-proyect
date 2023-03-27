import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LocalNavbar from './LocalNavbar';

test('Local Navbar links are rendered correctly', () => {
  render(
    <BrowserRouter> 
      <LocalNavbar />
    </BrowserRouter>
  );
  const empleadosLink = screen.getByText(/Empleados/i);
  const ausenciasLink = screen.getByText(/Ausencias/i);
  const solicitudesLink = screen.getByText(/Solicitudes/i);
  const menuUsuarioLink = screen.getByText(/Menú Usuario/i);

  expect(empleadosLink).toHaveAttribute('href', '/employees');
  expect(ausenciasLink).toHaveAttribute('href', '/absences');
  expect(solicitudesLink).toHaveAttribute('href', '/solicitudes');
  expect(menuUsuarioLink).toHaveAttribute('href', '/homeUser');
});