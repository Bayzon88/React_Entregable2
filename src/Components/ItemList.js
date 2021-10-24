import Item from "./Item";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

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

//Carga items incorporando datos al card usando el array ITEMS
function ItemList() {
  //HOOK useState
  const [card, setCard] = useState(() => {
    return (
      <div
        style={{
          color: "white",
          width: "100vw",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        Aqui apareceran los componentes
      </div>
    );
  });

  const SetCardInfo = () => {
    setCard(
      ITEMS.map((item) => {
        /*spread operator para no tener que escribir todos los nombres de los 
          props nombre={nombre} descripcion={descripcion} etc*/
        return <Item {...item}></Item>;
      })
    );
  };

  //CREANDO PROMISE CON TIME OUT
  const TAREA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(SetCardInfo());
    }, 2000);
  });

  return <Container className='d-flex'>{card}</Container>;
}

export default ItemList;
