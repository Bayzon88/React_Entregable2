import Nav from "react-bootstrap/Nav";

export default function CartWidget() {
  return (
    <Nav.Link href='#cart'>
      <i className='fas fa-shopping-cart'></i>
    </Nav.Link>
  );
}
