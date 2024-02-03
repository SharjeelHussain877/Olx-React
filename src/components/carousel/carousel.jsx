// import React from "react";
// import { Carousel } from "antd";
// import './carousel.scss'
import { olxMain } from "./../../assets/index.js";


import { Carousel } from "react-bootstrap";

function OlxCarousel() {
  return (
    <div className="container">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={olxMain} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={olxMain} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={olxMain} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default OlxCarousel;
