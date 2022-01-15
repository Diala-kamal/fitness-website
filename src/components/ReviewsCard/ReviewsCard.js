import React from "react";
import "./ReviewsCard.css";

const ReviewsCard = (props) => {
  return (
    <div className="reviewscard">
      <div className="revImg">
        <img src={props.img} alt="" />
      </div>
      <h3>Harley </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
        laudantium.
      </p>
    </div>
  );
};

export default ReviewsCard;
