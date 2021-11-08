import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/logo2.svg";
import CartWidget from "./CartWidget";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";

let logoSize = "30px";

function CustomNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto '>
              <Nav.Link as={Link} to='/' className='nav-link'>
                Home
              </Nav.Link>

              <NavDropdown title='Categorias' id='collasible-nav-dropdown'>
                <NavDropdown.Item as={Link} to='/futbol'>
                  Futbol
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/tennis'>
                  Tennis
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/running'>
                  Running
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
              Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
          <div className='shoppingCart'>
            {" "}
            <i class='fas fa-shopping-cart'></i>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
