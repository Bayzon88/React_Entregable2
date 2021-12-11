import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CustomModal() {
  const [show, setShow] = useState(false);
  const { dataCart, total, cantidadProductos } = useContext(CartContext);
  console.log(dataCart);
  return (
    <>
      <div className='d-flex'>
        <Button variant='primary ' onClick={() => setShow(true)}>
          Comprar
        </Button>
      </div>
      <Modal
        show={show}
        keyboard={true}
        size='md'
        onHide={() => setShow(false)}
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Ingresa tus Datos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataCart.map((item) => {
            return (
              <>
                <p>{item.nombre}</p>
              </>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CustomModal;
// render(<CustomModal />);
