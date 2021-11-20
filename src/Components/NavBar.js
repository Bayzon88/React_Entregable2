import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/logo2.svg";
import CartWidget from "./CartWidget";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";

let logoSize = "30px";

function CustomNavbar() {
  const categories = [
    {
      id: "cat1",
      address: "futbol",
      text: "Futbol",
    },
    {
      id: "cat2",
      address: "tenis",
      text: "Tennis",
    },
    {
      id: "cat3",
      address: "running",
      text: "Running",
    },
  ];
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
              <Nav.Link as={Link} exact to='/' className='nav-link'>
                Home
              </Nav.Link>

              <NavDropdown title='Categorias' id='collasible-nav-dropdown'>
                <NavDropdown.Item as={NavLink} to={`${categories[0].address}`}>
                  {`${categories[0].text}`}
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={`${categories[1].address}`}>
                  {`${categories[1].text}`}
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={`${categories[2].address}`}>
                  {`${categories[2].text}`}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
