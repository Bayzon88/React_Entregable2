import Item from "./Item";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

//Carga items incorporando datos al card usando el array ITEMS
function ItemList({ productos }) {
  //HOOK useState

  const setCardInfo = () => {
    return productos.map((item) => {
      return <Item {...item}></Item>;
    });
  };

  return (
    <React.Fragment>
      {/* // <Container className='d-flex '> */}
      {productos.length === 0 ? (
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
      ) : (
        setCardInfo()
      )}
      {/* // </Container> */}
    </React.Fragment>
  );
}

export default ItemList;
