import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log(props);
  }, []);

  let btnClass = "";
  if (props.btnClass) {
    btnClass = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hello!</h1>
      <button className={btnClass} onClick={props.toggleClass}>
        Change name
      </button>
    </div>
  );
};

export default cockpit;
