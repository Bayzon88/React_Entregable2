import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CustomNavbar from "./NavBar";

import ItemDetail from "./ItemDetail";
import { render } from "sass";
import { NavLink, Link } from "react-router-dom";

//deconstruccion del prop de react
function Item({ nombre, descripcion, sku, precio, categoria, imagen, id }) {
  const item = [nombre, descripcion, sku, precio, categoria];

  return (
    //card de bootstrap incorporando variables

    <Col
      style={{ justifyContent: "around" }}
      className='p-2 d-flex align-items-center justify-content-center'
    >
      <Card
        body={true}
        border={"primary"}
        id={`${id}`}
        style={{ width: "15rem", height: "100%" }}
        className='cardInfo '
      >
        <Card.Title bsPrefix='card-title' className='cardInfo__name'>
          {nombre}
        </Card.Title>

        <Card.Img variant='top' src={`${imagen}`} />
        <Card.Body>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>S/. {precio}</Card.Text>

          <NavLink
            to={`/${categoria}/${id}`}
            className=' btn btn-dark card__button '
          >
            Comprar
          </NavLink>
          <Card.Text>{sku}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
