import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ItemListContainer() {
  return (
    <Container className='container d-flex'>
      <Greeting saludo={"Hola Coders!!! "}> </Greeting>
    </Container>
  );
}

//? Cards de Bootstrap
function Greeting({ saludo }) {
  return (
    <div>
      {" "}
      <h1>
        {saludo}
        <i class='far fa-grin-beam'></i>{" "}
      </h1>
    </div>
  );
}

export default ItemListContainer;
