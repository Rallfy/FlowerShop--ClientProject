import React from "react";
import "../styles/Review.css";

const reviews = [
  {
    name: "Muntean Oana",
    text: "Cele mai minunate buchete de mireasa si buchet pentru starea civila, lucrate in Florăria Crinului din Somcuta Mare.",
    rating: 5,
  },
  {
    name: "Marius Agoston",
    text: "Cele mai minunate buchete de mireasa si buchet pentru starea civila, lucrate in Florăria Crinului din Somcuta Mare.",
    rating: 5,
  },
  {
    name: "Sorana Mitrofan",
    text: "Recomand cu încredere pentru profesionalismul și pasiunea cu care lucrează.",
    rating: 5,
  },
  {
    name: "Agoston Darius",
    text: "Foarte frumoasa floraria, superb costumer-service☺️.",
    rating: 5,
  },
  {
    name: "Mesaros Ionut",
    text: "Seriozitate si punctualitate. Recomand cu toată increderea!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="reviews-container">
      {/* <h3 className="reviews-title">Ce spun clienții noștri</h3> */}
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">- {review.name}</p>
            <div className="review-stars">
              {"⭐".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
