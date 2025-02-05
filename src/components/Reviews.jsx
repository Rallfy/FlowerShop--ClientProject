import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

const reviews = [
  {
    name: "Andrei Popescu",
    text: "Florile au fost absolut superbe! Recomand cu toată încrederea!",
  },
  {
    name: "Maria Ionescu",
    text: "Servicii excelente, livrare rapidă și aranjamente minunate.",
  },
  {
    name: "Alex Dinu",
    text: "Am rămas impresionat de calitatea produselor. Mulțumesc!",
  },
  {
    name: "Ioana Dumitru",
    text: "Cele mai frumoase flori pe care le-am primit vreodată. Vă mulțumesc!",
  },
];

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Recenzile clienților</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <h4 className="review-name">{review.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
