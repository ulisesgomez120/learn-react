import React from "react";
import classes from "./Burger.module.css";
import Ingredients from "./Ingredients/Ingredients";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(iKey => {
      return [...Array(props.ingredients[iKey])].map((_, i) => {
        return <Ingredients key={iKey + 1} type={iKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      {transformedIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default burger;
