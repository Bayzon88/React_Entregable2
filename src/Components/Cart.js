import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
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
    <div>
      <CartItem dataCart={dataCart} />
      <h1>Total de carrito: {`S/. ${total}`}</h1>
    </div>
  );
};

export default Cart;
