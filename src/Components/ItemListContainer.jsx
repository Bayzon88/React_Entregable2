import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const ITEMS = [
  {
    id: 1,
    nombre: "articulo1",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 10,
  },
  {
    id: 2,
    nombre: "articulo2",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 20,
  },
  {
    id: 3,
    nombre: "articulo3",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 50,
  },
  {
    id: 4,
    nombre: "articulo4",
    descripcion: "Descripcion generica",
    sku: "1234567890",
    precio: 30,
  },
];

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  //CREANDO PROMISE CON TIME OUT
  const TAREA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ITEMS);
    }, 2000);
  });
  useEffect(() => {
    TAREA.then((result) => {
      setProductos(result);
      console.log(result);
    });
  }, []);

  return (
    <Container>
      <ItemList productos={productos}></ItemList>;
    </Container>
  );
}

export default ItemListContainer;
