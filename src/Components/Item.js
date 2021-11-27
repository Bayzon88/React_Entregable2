import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import ItemDetail from "./ItemDetail";
import { render } from "sass";
import { NavLink, Link } from "react-router-dom";

//deconstruccion del prop de react
function Item({ nombre, descripcion, sku, precio, categoria, imagen, id }) {
  const item = [nombre, descripcion, sku, precio, categoria];

  return (
    //card de bootstrap incorporando variables

    <Col style={{ justifyContent: "around" }} className='p-2'>
      <Card
        className='card'
        id={`${id}`}
        style={{ width: "15rem", height: "100%" }}
      >
        <Card.Img variant='top' src={`${imagen}`} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>{sku}</Card.Text>
          <Card.Text>{precio}</Card.Text>

          <NavLink
            to={`/${categoria}/${id}`}
            className=' btn btn-dark card__button '
          >
            Comprar
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
