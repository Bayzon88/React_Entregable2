import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function ItemDetail(productos) {
  return (
    <div className='container  '>
      <div className='itemDetailContainer'>
        <img className='imagenPrincipal' src={`${productos.imagen}`} />
        <div className='idc'>
          <div className='idc__descripcion'>
            <h6>{productos.sku}</h6>
            <h3>Categoria: {productos.categoria}</h3>

            <h1>{productos.nombre}</h1>
            <p>{productos.descripcion}</p>
          </div>
          <div className='idc__opciones'>
            <p>Otras opciones: </p>
            <img src={`${productos.imagenOpcion1}`} alt='' />
            <img src={`${productos.imagenOpcion2}`} alt='' />

            <div className='d-flex p-3'>
              <p>S/. {productos.precio}</p>
              <Button className=''>Comprar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
