import React from "react";
import CardItem from "../cardItem/CardItem";

export default function Cards(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          {props.cardsArray.map((item, index) => {
            return (
              <div className="col-4">
                <CardItem data={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
