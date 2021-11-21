import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function CartWidget({ cantItems }) {
  const { cantidadProductos } = useContext(CartContext);
  return (
    <Nav.Link as={Link} to='/cart'>
      <div className='d-flex'>
        <i className='fas fa-shopping-cart shoppingCart'></i>
        {cantidadProductos > 0 ? (
          <div className='cartNumbers'>
            <p className='cartNumbers__display'>{cantidadProductos}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </Nav.Link>
  );
}
