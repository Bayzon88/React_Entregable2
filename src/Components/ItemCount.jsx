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
    <div className='d-block'>
      <div className='d-flex itemCount '>
        <p>Stock Disponible:{`${stock}`}</p>
        <div className='d-flex itemCount__add  '>
          <button
            className='btn btn-dark itemCount__add--minus'
            type='button'
            onClick={() => removeItems()}
          />

          <p>{unidades}</p>
          <button
            className='btn btn-dark itemCount__add--plus'
            type='button'
            onClick={() => addItems()}
          />
        </div>
      </div>
      <div className='d-flex '>
        <button
          className='btn btn-dark'
          onClick={() => stockItem.onAdd(unidades)}
        >
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
