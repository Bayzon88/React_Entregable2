import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CustomModal from "./Cart/Modal";
const Cart = () => {
  const { dataCart, total, cantidadProductos } = useContext(CartContext);
  console.log(cantidadProductos);

  return total === 0 ? (
    <div className='noProductos'>
      <h1>Oh No! </h1>
      <h2>No Hay Productos en el Carrito</h2>
      <Link to='/' className='btn btn-dark'>
        Ir al Inicio
      </Link>
    </div>
  ) : (
    <div className='container '>
      <CartItem dataCart={dataCart} />
      <div className='cartView_detail--total'>
        <h1 className='d-flex flex-column align-items-end'>
          Total de carrito: {`S/. ${total}`}
          <CustomModal />
        </h1>
      </div>
    </div>
  );
};

export default Cart;
