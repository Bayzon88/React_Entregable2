import React, { useState } from "react";

const CartContext = React.createContext();

function CartHandler({ children }) {
  const [dataCart, setDataCart] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);
  //el producto debe ser un objeto y la cantidad un numero
  const onAdd = (producto, cantidad) => {
    const isItem = dataCart.find((item) => item.id === producto.id);
    if (!isItem) {
      setDataCart([
        ...dataCart,
        {
          id: producto.id,
          nombre: producto.nombre,
          imagen: producto.imagen,
          precio: producto.precio,
          cantidad: cantidad,
          subtotal: producto.precio * cantidad,
        },
      ]);
      setTotal(total + producto.precio * cantidad);
      setUnidades(unidades + 1);
    } else {
      const cartAux = dataCart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subtotal += producto.precio * cantidad;
        }
        return item;
      });
      setDataCart(cartAux);
      console.log(producto.precio);
      console.log("Esta es la cantidad " + cantidad);
      setTotal(total + producto.precio * cantidad);
    }

    console.log("Este es el producto:" + producto);
  };

  let cantidadProductos = 0;
  dataCart.forEach((productosToCart) => {
    cantidadProductos += productosToCart.cantidad;
  });

  return (
    <CartContext.Provider
      value={{ dataCart, unidades, total, onAdd, cantidadProductos }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartHandler, CartContext };
