import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
const ITEMS = require("../Data/data.json");

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState(() => []);
  const { categoryId } = useParams();
  //CREANDO PROMISE CON TIME OUT
  useEffect(() => {
    const TAREA = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ITEMS);
      }, 0);
    });
    TAREA.then((result) => {
      // Param debe pasarse a traves del path en App.js(mismo nombre)
      categoryId
        ? setProductos(result.filter((item) => item.categoria == categoryId))
        : setProductos(result);
      // : setProductos(result);
    });
  }, [categoryId]);

  return (
    <Container fluid='xl' className='d-flex flex-row'>
      <h3 style={{ color: "white" }}> {greeting} </h3>
      <Row>
        <Col>
          <ItemList productos={productos}></ItemList>;
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
