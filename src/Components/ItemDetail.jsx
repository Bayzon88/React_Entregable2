import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function ItemDetail(item, { idItem }) {
  console.log(idItem);
  return (
    <div className='container  '>
      <div className='itemDetailContainer'>
        <img className='imagenPrincipal' src={`${item.imagen}`} />
        <div className='idc'>
          <div className='idc__descripcion'>
            <h6>{item.sku}</h6>
            <h3>Categoria: {item.categoria}</h3>

            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
          </div>
          <div className='idc__opciones'>
            <p>Otras opciones: </p>
            <img src={`${item.imagenOpcion1}`} alt='' />
            <img src={`${item.imagenOpcion2}`} alt='' />

            <div className='d-flex p-3'>
              <p>S/. {item.precio}</p>
              <Button className=''>Comprar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
