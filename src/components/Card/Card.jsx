import React from "react";
import "./Card.scss"

const Card = ({ title, image, currentIngredients, ingredients }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img src={image} alt="" className="card__image"/>
      <ul className="card__ingredients">
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
