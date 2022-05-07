import "./header.css";
import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "./../../assets/Carousel-1.jpg";
import carouselImage2 from "./../../assets/Carousel-2.jpg";
export default function Header() {
  return (
    <div>
     <div className="container">
     <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-50"
             src={carouselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
             src={carouselImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            // src={carouselImage1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </div>
    </div>
  );
}
