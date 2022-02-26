import React from "react";
export default function CardItem(props) {
  return (
    <div>
      <h1>
        {props.index + 1}. Title: {props.data.title}
      </h1>
      <p> Description: {props.data.description}</p>
      <h3> Author: {props.data.author}</h3>
    </div>
  );
}
