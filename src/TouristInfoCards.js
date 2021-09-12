import React from "react";

export function TouristInfoCards(props) {
  return (
    <div className="card p-3 border-success">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <a href={props.url} className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
