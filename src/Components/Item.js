import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./ItemDetail";
import { render } from "sass";
import { NavLink, Link } from "react-router-dom";

//deconstruccion del prop de react
function Item({ nombre, descripcion, sku, precio, categoria, imagen, id }) {
  const item = [nombre, descripcion, sku, precio, categoria];

  return (
    //card de bootstrap incorporando variables
    <Card id={`${id}`} style={{ width: "15rem" }}>
      <Card.Img variant='top' src={`${imagen}`} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>{sku}</Card.Text>
        <Card.Text>{precio}</Card.Text>

        <Button variant='dark'>
          <NavLink to={`/${categoria}/${id}`} className=' btn btn-dark  '>
            Comprar
          </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
