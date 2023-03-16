import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "rsuite/dist/rsuite.css";
import '../localNavbar/LocalNavbar.css';
import { Link } from "react-router-dom";

function LocalNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="bgnavbar p-3">
        <Navbar.Brand href="home"><img src="/Aidei.png" alt="logo Aidei"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="empleados" className="link_brand">
                        Empleados
                    </Link>
                    <br/>
                    <Link to="ausencias" className="link_brand">
                        Ausencias
                    </Link>
                    <br/>
                    <div>
                    <Link to="solicitudes" className="link_brand">
                        Solicitudes Atendidas
                    </Link>
                    </div>
                    <div>
                    <Link to="homeUser" className="link_brand">
                        Usuario Menu
                    </Link>
                    </div>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default LocalNavbar;
