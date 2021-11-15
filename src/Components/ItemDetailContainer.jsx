import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemDetail from "./ItemDetail";
import Item from "./Item";
const ITEMS = require("../Data/data.json");

function ItemDetailContainer() {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);

  //*React lee params de la barra de direcciones, hay que decalrar cada uno
  const { itemId, categoryId } = useParams();

  //CREANDO PROMISE CON TIME OUT

  useEffect(() => {
    const TAREA = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ITEMS);
      }, 0);
    });
    TAREA.then((result) => {
      setProductos(
        result.find(
          (idItem) => idItem.id == itemId && idItem.categoria == categoryId
        )
      );
      //es necesario agregar un loading para asegurar que se carguen todas las propiedades de data.json
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <Container fluid='xl' className='d-flex flex-row'>
      {loading ? (
        <h2>Cargando Productos</h2>
      ) : (
        <ItemDetail {...productos}></ItemDetail>
      )}

      {/* <ItemDetail item={productos[0]}> </ItemDetail> */}
    </Container>
  );
}

export default ItemDetailContainer;
