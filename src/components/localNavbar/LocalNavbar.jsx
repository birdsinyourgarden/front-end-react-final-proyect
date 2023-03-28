import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "rsuite/dist/rsuite.css";
import '../localNavbar/LocalNavbar.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function LocalNavbar() {
  const [token, setToken] = useState(null)
  const [isAdmin, setIsAdmin] = useState(null)
  const nav = useNavigate();
  const handleLogOut = () => {
    Swal.fire("Sesion Closed", "success").then(
      () => {
        localStorage.clear();
        nav('/login');
      }
    )
 };

 useEffect(() => {
  const userToken = localStorage.getItem('token')
  if (userToken) {
    setToken(userToken)
    setIsAdmin(localStorage.getItem('isAdmin'))
  } else {
    setToken(null)
    setIsAdmin(null)
    nav('/login');
  }
 }, [])
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="bgnavbar p-3">
        <Navbar.Brand href="home"><img src="/Aidei.png" alt="logo Aidei"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        { localStorage.getItem('isAdmin') == '1' ? (
          <Nav className="me-auto">
          <Link to="employees" className="link_brand">
                        Registro de Personal
                    </Link>
                    <br/>
                    <Link to="profile" className="link_brand">
                        Perfil
                    </Link>
                    <br/>
                    <div>
                    <Link to="homeUser" className="link_brand">
                      Menú Personal
                    </Link>
                    </div>
                    <br/>
                    <div>
                    <Link to="solicitudes" className="link_brand">
                        Solicitudes
                    </Link>
                    </div>
                    <br/>
                    <Link to="absences" className="link_brand">
                        Actualizar Ausencia
                    </Link>
            
          </Nav>) : null}
                    <br/>
          <Nav>
            <Nav.Link>
          {localStorage.getItem('token') ? (

                  <Link onClick={handleLogOut} className="link_brand danger">
                        Logout
                    </Link>
                  ) : <Link to="login" className="link_brand danger">
                  Login
              </Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default LocalNavbar;
