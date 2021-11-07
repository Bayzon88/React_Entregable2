import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ITEMS = [
  {
    id: 1,
    nombre: "articulo1",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 10,
    categoria: "futbol",
  },
  {
    id: 2,
    nombre: "articulo2",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 20,
    categoria: "futbol",
  },
  {
    id: 3,
    nombre: "articulo3",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 50,
    categoria: "tennis",
  },
  {
    id: 4,
    nombre: "articulo4",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 30,
    categoria: "tennis",
  },
  {
    id: 4,
    nombre: "articulo4",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 30,
    categoria: "tennis",
  },
  {
    id: 5,
    nombre: "articulo5",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 30,
    categoria: "tennis",
  },
  {
    id: 6,
    nombre: "articulo6",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 30,
    categoria: "tennis",
  },
  {
    id: 7,
    nombre: "articulo7",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 30,
    categoria: "tennis",
  },
];

function ItemListContainer() {
  const [productos, setProductos] = useState(() => []);
  //CREANDO PROMISE CON TIME OUT
  const TAREA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ITEMS);
    }, 2000);
  });
  useEffect(() => {
    TAREA.then((result) => {
      setProductos(result);
    });
  }, []);

  return (
    <Container fluid='xl' className='d-flex flex-row'>
      <Row>
        <Col>
          <ItemList productos={productos}></ItemList>;
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
