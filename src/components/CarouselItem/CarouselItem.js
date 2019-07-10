import React from "react";
import "./CarouselItem.css";

class CarouselItem extends React.Component {
  render() {
    const { title, imgSrc } = this.props;

    return (
      <div className="CarouselItem-container">
        <img alt="Cover" className="CarouselItem-image" src={imgSrc} />
        <div className="CarouselItem-title">{title}</div>
      </div>
    );
  }
}

export default CarouselItem;
