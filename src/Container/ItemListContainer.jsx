import { Container } from "react-bootstrap";

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
