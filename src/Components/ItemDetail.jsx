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
    <div className='container  '>
      <div className='itemDetailContainer'>
        <img className='imagenPrincipal' src={`${imagen}`} />
        <div className='idc'>
          <div className='idc__descripcion'>
            <h6>{sku}</h6>
            <h3>Categoria: {categoria}</h3>

            <h1>{nombre}</h1>
            <p>{descripcion}</p>
          </div>
          <div className='idc__opciones'>
            <p>Otras opciones: </p>
            <img src={`${imagenOpcion1}`} alt='' />
            <img src={`${imagenOpcion2}`} alt='' />

            <div className='d-flex p-3'>
              <p>S/. {precio}</p>
              <Button className=''>Comprar</Button>
            </div>
            <div>
              {/* pasamos a traves de onAdd la funcion "addItemsToCart" */}
              {!comprar ? (
                <ItemCount stock={stock} onAdd={agregar} />
              ) : (
                <Link to='/cart'>
                  <button>Terminar compra</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
