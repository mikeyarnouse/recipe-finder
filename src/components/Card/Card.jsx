import React from "react";

const Card = ({ title, image, currentIngredients, ingredients }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt="" />
      <ul>
        {currentIngredients?.map((ingredient, i) => {
          return <li key={i}>{ingredient.original}</li>;
        })}
        {ingredients?.map((ingredient, i) => {
          return <li key={i}>{ingredient.original}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
