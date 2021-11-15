import React, { useContext } from "react";
import { CartContext } from "./CartContext";
const Cart = () => {
  const { dataCart, total } = useContext(CartContext);
  return <p>Total de carrito: {`${total}`}</p>;
};

export default Cart;
