import React, { useContext } from "react";
import { CartContext } from "./CartContext";
const Cart = () => {
  const { dataCart, total } = useContext(CartContext);
  console.log(dataCart);
  return (
    <>
      <div className='container-fluid cartView'>
        <h1>Total de carrito: {`S/. ${total}`}</h1>
        <div className='d-block'>
          {dataCart.map((item) => {
            return (
              <div className='cartView_detail d-flex'>
                <div>
                  <img width='50px' height='50px'></img>
                </div>
                <div className='d-block align-items-center cartView_detail--descripcion'>
                  <p>{item.nombre}</p>
                  <p> {item.precio}</p>
                  <p> {item.cantidad}</p>
                  <p>Total = {item.precio * item.cantidad}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
