import React from "react";
import Carousel from "react-bootstrap/Carousel";

function BannerPrincipal() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../Imagens/imgSlide1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../Imagens/imgSlide2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Imagens/imgSlide3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerPrincipal;
