import React, { useState } from "react";

const CartContext = React.createContext();

function CartHandler({ productos }) {
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
          precio: producto.precio,
          cantidad: cantidad,
          subtotal: producto.precio * cantidad,
        },
      ]);
    } else {
      const cartAux = dataCart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subtotal += producto.precio * cantidad;
        }
        return item;
      });
      setDataCart(cartAux);
      setTotal(total + producto.precio * cantidad);
    }

    console.log("Este es el producto:" + producto);
  };
  return (
    <CartContext.Provider value={{ dataCart, unidades, total, onAdd }}>
      {productos}
    </CartContext.Provider>
  );
}
export { CartHandler, CartContext };
