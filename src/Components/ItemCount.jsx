import React, { useState, useEffect } from "react";

function ItemCount(stockItem) {
  const [stock, setStock] = useState(stockItem.stock);

  const [unidades, setUnidades] = useState(0);

  const addItems = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setUnidades(unidades + 1);
    }
  };
  const removeItems = () => {
    if (unidades > 0) {
      setUnidades(unidades - 1);
      setStock(stock + 1);
    }
  };

  return (
    <div className='d-flex'>
      <div className='d-flex '>
        <button type='button' onClick={() => removeItems()}>
          -
        </button>
        <p>{unidades}</p>
        <button type='button' onClick={() => addItems()}>
          +
        </button>
      </div>
      <div className='d-flex'>
        <p style={{ color: "black" }}>Stock Disponible:{`${stock}`}</p>
        <button onClick={() => stockItem.onAdd(unidades)}>
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
