import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/logo2.svg";
import CartWidget from "./CartWidget";

let logoSize = "30px";

function CustomNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Logo Empresa</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto '>
              <Nav.Link href='#features'>Home</Nav.Link>
              <Nav.Link href='#pricing'>Productos</Nav.Link>
              <NavDropdown title='Categorias' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Futbol</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Tennis</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Running</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
