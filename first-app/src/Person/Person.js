import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old!
      </p>
      <input type="text" onChange={props.change} value={props.name} />
      {/* <p>{props.children}</p> */}
    </div>
  );
};

export default person;
