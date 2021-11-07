import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetail from "./ItemDetail";
import { render } from "sass";

//deconstruccion del prop de react
function Item({ nombre, descripcion, sku, precio, categoria }) {
  const item = [nombre, descripcion, sku, precio, categoria];
  let isDetail = false;

  const itemDetail = () => {
    return (
      //card de bootstrap incorporando variables
      <Card style={{ width: "15rem" }}>
        <Card.Img variant='top' src='https://picsum.photos/400' />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>{sku}</Card.Text>
          <Card.Text>{precio}</Card.Text>

          <Button
            variant='dark'
            onClick={() => {
              isDetail = true;
              itemDetail();
            }}
          >
            Comprar
          </Button>
        </Card.Body>
      </Card>
    );
  };
}

export default Item;
