import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
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
    <div className='container-fluid cartView'>
      <div className='d-block'>
        {dataCart.map((item) => {
          return (
            <div className='cartView_detail d-flex align-items-center'>
              <div></div>
              <div className=' align-items-center cartView_detail--descripcion'>
                <img width='50px' height='50px' src={item.imagen}></img>

                <p>{item.nombre}</p>
                <p> {item.precio}</p>
                <p> {item.cantidad}</p>
                <p>Total = {item.precio * item.cantidad}</p>
                <button
                  onClick={() => {
                    console.log("eliminar");
                  }}
                  type='button'
                  className='btn btn-dark'
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1>Total de carrito: {`S/. ${total}`}</h1>
    </div>
  );
};

export default Cart;
