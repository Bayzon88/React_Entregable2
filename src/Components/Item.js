import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//deconstruccion del prop de react
function Item({ nombre, descripcion, sku, precio }) {
  return (
    //card de bootstrap incorporando variables
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant='top' src='https://picsum.photos/400' />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <Card.Text>{sku}</Card.Text>
              <Card.Text>{precio}</Card.Text>

              <Button variant='primary'>Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Item;
