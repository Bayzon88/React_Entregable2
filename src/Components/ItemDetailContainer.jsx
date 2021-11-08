import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemDetail from "./ItemDetail";
import Item from "./Item";

const ITEMS = [
  {
    id: 1,
    nombre: "Camista Bayern",
    descripcion: "Camiseta Bayern FC para niño",
    sku: "1234567890",
    precio: 10,
    categoria: "futbol",
    imagen:
      "https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/24525/fc-bayern-kindertrikot-home-19-20.png",
    imagenOpcion1:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/06a39a6641e8498a8897a820004945c4_9366/Camiseta_de_Futbol_de_Local_FC_Bayern_Munich_Replica_Rojo_AZ7961_01_laydown.jpg",
    imagenOpcion2:
      "https://img.planetafobal.com/2021/07/camiseta-titular-adidas-2021-2022-bayern-munich-wq.jpg",
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

function ItemDetailContainer(idProducto) {
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
      <ItemDetail {...productos[0]}></ItemDetail>
      {/* <ItemDetail item={productos[0]}> </ItemDetail> */}
    </Container>
  );
}

export default ItemDetailContainer;
