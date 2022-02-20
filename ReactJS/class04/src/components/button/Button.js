import React from "react";

export default function Button(props) {
  return (
    <div>
      <button type="button" className="btn btn-primary" style={props.style}>
        {props.text || 'Default Text'}
      </button>
    </div>
  );
}
