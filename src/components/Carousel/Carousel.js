import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import CarouselItem from "../CarouselItem/CarouselItem";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

class Carousel extends React.Component {
  render() {
    const { title, data } = this.props;

    return (
      <div className="Carousel-container">
        <h2>{title}</h2>
        <div className="Carousel-box">
          <div className="Carousel-list">
            {data.map(item => (
              <Link
                key={item.id}
                className="link"
                to={{ pathname: "VideoDetails", state: { test: "1234" } }}
              >
                <CarouselItem
                  title={item.title || item.name}
                  imgSrc={`${IMG_BASE_URL}${item.poster_path}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
