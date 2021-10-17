import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ItemListContainer() {
  return (
    <Container className='container d-flex'>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Container>
  );
}

//? Cards de Bootstrap
function CardItem() {
  return (
    <Card className='p-5' style={{ width: "18rem" }}>
      <Card.Img variant='top' src='https://picsum.photos/288/288' /> {""}
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>Descripcion del producto</Card.Text>

        <Button variant='primary'>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;
