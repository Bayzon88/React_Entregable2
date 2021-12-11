import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartItem = ({ dataCart }) => {
  const { deleteItems } = useContext(CartContext);
  console.log(dataCart);
  return (
    <div className='d-block'>
      {dataCart.map((item) => {
        return (
          <div className='cartView_detail align-items-center'>
            <div></div>
            <div className=' align-items-center cartView_detail--descripcion'>
              <img width='50px' height='50px' src={item.imagen}></img>

              <p>{item.nombre}</p>
              <p> {item.precio}</p>
              <p> {item.cantidad}</p>

              <p>Total = {item.precio * item.cantidad}</p>
              <button
                onClick={() => {
                  deleteItems(item.id, item.cantidad, item.precio);
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
  );
};

export default CartItem;
