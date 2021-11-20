import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <Nav.Link as={Link} to='/cart'>
      <i className='fas fa-shopping-cart shoppingCart'></i>
    </Nav.Link>
  );
}
