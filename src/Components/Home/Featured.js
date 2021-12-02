import db from "../../Firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Item from "../Item";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { div } from "react";

export default function Featured() {
  const [productos, setProductos] = useState();
  const [loading, setLoading] = useState(true);

  //esta es la promesa de la query
  const categoriaprueba = query(
    collection(db, "productos"),
    where("featured", "==", true)
  );

  //convertir la promesa en data
  useEffect(() => {
    getDocs(categoriaprueba)
      .then((res) => {
        const result = res.docs.map((doc) => {
          return { ...doc.data() };
        });
        setProductos(result);
        setLoading(false);
      })
      .catch(console.log("ERROR"));
  }, []);

  return (
    <Container className='d-flex align-items-center'>
      {loading
        ? "Loading..."
        : productos.map((producto) => {
            return <Item {...producto} />;
          })}
    </Container>
  );
}
