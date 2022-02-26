import React from "react";
import cardImage from '../../assets/naveed.png' 

export default function Card() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the  card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
