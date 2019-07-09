import React from "react";
import "./CarouselItem.css";

class CarouselItem extends React.Component {
  render() {
    return (
      <div className="CarouselItem-container">
        <img
          alt="Cover"
          className="CarouselItem-image"
          src="https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg"
        />
        <div className="CarouselItem-title">Prueba</div>
      </div>
    );
  }
}

export default CarouselItem;
