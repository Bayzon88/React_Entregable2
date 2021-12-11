import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap/";
import Item from "react-bootstrap/CarouselItem";

export default function Carrusel() {
  const slideInterval = 3000;
  return (
    <Container bsPrefix='container-fluid' fluid style={{ zIndex: 1 }}>
      <Carousel
        fade={true}
        touch={false}
        nextLabel='Next'
        indicators={false}
        keyboard
      >
        <Carousel.Item interval={slideInterval}>
          <img
            className='d-block w-100'
            src='https://cdn.evergage.com/promotions/superdeporteperu/marathonstorepeprd/NCIg2/R1EKv.jpg?decache=1638313482303'
            alt='First slide'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={slideInterval}>
          <img
            className='d-block w-100'
            src='https://cdn.evergage.com/promotions/superdeporteperu/marathonstorepeprd/A2LdB/YDIsd.jpg?decache=1637074615284'
            alt='Second slide'
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={slideInterval}>
          <img
            className='d-block w-100'
            src='https://cdn.evergage.com/promotions/superdeporteperu/marathonstorepeprd/Qjnxp/TSqwc.jpg?decache=1637959835637'
            alt='Third slide'
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={slideInterval}>
          <img
            className='d-block w-100'
            src='https://cdn.evergage.com/promotions/superdeporteperu/marathonstorepeprd/ecpnY/k8mEn.jpg?decache=1637943935910'
            alt='Fourth slide'
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
