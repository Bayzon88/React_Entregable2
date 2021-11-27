import ItemList from "./ItemList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import { useParams } from "react-router";

import db from "../Firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const ITEMS = require("../Data/data.json");

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState(() => []);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  //CREANDO PROMISE CON TIME OUT
  useEffect(() => {
    //* collection recibe primer parametro la base de datos de Firebase
    //* como segundo parametro recibe el nombre de la coleccion(web firebase)
    const myItems = categoryId
      ? query(collection(db, "productos"), where("categoria", "==", categoryId))
      : collection(db, "productos");
    console.log(categoryId);
    //* se crea una promesa para traer los documentos
    getDocs(myItems)
      .then((res) => {
        const result = res.docs.map((doc) => {
          //*trae todos los doc que tengan funcion data()
          return { ...doc.data(), id: doc.id }; //*el id se roje manual porque no es parte de la data del item
        });
        console.log(result); //devuelve array con informacion
        setProductos(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <Container
      fluid='xl'
      className='d-flex flex-row'
      style={{ justifyContent: "center" }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Row>
          <ItemList productos={productos}></ItemList>
        </Row>
      )}
    </Container>
  );
}

export default ItemListContainer;

// const TAREA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(ITEMS);
//   }, 2000);
// });
// TAREA.then((result) => {
//   // Param debe pasarse a traves del path en App.js(mismo nombre)
//   categoryId
//     ? setProductos(result.filter((item) => item.categoria == categoryId))
//     : setProductos(result);
//   setLoading(false);
// });
