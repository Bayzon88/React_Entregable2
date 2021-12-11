import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function ItemDetail({
  id,
  imagen,
  sku,
  categoria,
  nombre,
  descripcion,
  stock,
  precio,
  imagenOpcion1,
  imagenOpcion2,
}) {
  const [comprar, setComprar] = useState(false);
  const { onAdd } = useContext(CartContext); //llamar a la funcion onAdd desde CartContext

  const agregar = (unidades) => {
    setComprar(true);
    onAdd({ id, nombre, precio, imagen, sku }, unidades);
  };
  return (
    <>
      <div className='container d-flex justify-content-center'>
        <div className='  itemDetail'>
          <div className='detailContainer '>
            <div className='imagenPrincipal'>
              <img src={`${imagen}`} />
            </div>
          </div>

          <div className='mt-3 buyingOptions d-flex justify-content-between'>
            <div className='detailContainer__data d-flex flex-column justify-content-between'>
              <h1>{nombre}</h1>
              <h2>{descripcion}</h2>
              <p>S/. {precio}</p>
              <h3 className='mt-2'>Categoria: {categoria}</h3>

              <h6 className='' id='sku'>
                {sku}
              </h6>
            </div>
            <div className='d-flex  itemCountContainer justify-content-start'>
              {/* pasamos a traves de onAdd la funcion "addItemsToCart" */}
              {!comprar ? (
                <ItemCount stock={stock} onAdd={agregar} />
              ) : (
                <Link to='/cart'>
                  <button>Terminar compra</button>
                </Link>
              )}
            </div>
            <div className='buyingOptions__options'>
              <p>Otras opciones: </p>
              <img src={`${imagenOpcion1}`} alt='Opcion1' />
              <img src={`${imagenOpcion2}`} alt='Opcion2' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
