import React from "react";
import Btn from "../Btn";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="propsIcon"> {props.icon}</div>

      <h3>The Schedule</h3>
      <p> take a look at the home exercies you can do!</p>
      <div className="cardBtn">
        <Btn text={props.text} />
      </div>
    </div>
  );
};

export default Card;
