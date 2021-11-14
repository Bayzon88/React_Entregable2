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
  const [productos, setProductos] = useState(() => []);

  //*React lee params de la barra de direcciones, hay que decalrar cada uno
  const { itemId, categoryId } = useParams();

  //CREANDO PROMISE CON TIME OUT
  console.log(itemId);
  useEffect(() => {
    const TAREA = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ITEMS);
      }, 2000);
    });
    TAREA.then((result) => {
      console.log(result.find((idItem) => idItem.categoria == categoryId));
      setProductos(
        result.find(
          (idItem) => idItem.id == itemId && idItem.categoria == categoryId
        )
      );
    });
  }, [itemId]);

  return (
    <Container fluid='xl' className='d-flex flex-row'>
      <ItemDetail {...productos}></ItemDetail>
      {/* <ItemDetail item={productos[0]}> </ItemDetail> */}
    </Container>
  );
}

export default ItemDetailContainer;
