import React from "react";
import Aux from "../../hoc/Wrapper";
import classes from "./Layout.module.css";
const layout = props => {
  console.log(classes);
  return (
    <Aux>
      <div>Toolbar, side drawer, backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
