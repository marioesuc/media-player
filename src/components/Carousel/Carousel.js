import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import CarouselItem from "../CarouselItem/CarouselItem";

class Carousel extends React.Component {
  render() {
    return (
      <div className="Carousel-container">
        <h2>Prueba</h2>
        <div className="Carousel-box">
          <div className="Carousel-list">
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
            <Link
              className="link"
              to={{ pathname: "VideoDetails", state: { test: "1234" } }}
            >
              <CarouselItem />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
