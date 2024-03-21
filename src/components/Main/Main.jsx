import React, { useState } from "react";
import axios from "axios";
import "./Main.scss";
import Card from "../Card/Card";

const Main = () => {
  const [ingredients, setIngredients] = useState("");
  const [number, setNumber] = useState(0);
  const [recipeList, setRecipeList] = useState([]);

  const handleInputChange = (e) => {
    setIngredients(e.target.value.replaceAll(" ", "+"));
  };
  const handleNumChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const makeRequest = async (ingredients, number) => {
      await axios
        .post("http://localhost:8080/recipes", {
          ingredients: ingredients,
          number: number,
        })
        .then((res) => {
          setRecipeList(
            res.data.filter(
              (r) => r.title !== "Smoothies" && r.title !== "Beverages"
            )
          );
        })
        .catch((e) => console.error(e));
    };
    makeRequest(ingredients, number);
  };

  return (
    <main className="main">
      <h2 className="main__title">Enter Your Ingredients</h2>
      <form className="main__form" onSubmit={handleSubmit}>
        <div className="main__form-input-wrapper">
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            name="ingredient"
            className="main__form-input"
            onChange={handleInputChange}
          />
        </div>
        <div className="main__form-input-wrapper">
          <label htmlFor="ingredients">Number of Recipes Requested:</label>
          <input
            type="text"
            name="number"
            className="main__form-input main__form-input-number"
            onChange={handleNumChange}
          />
        </div>
        <button type="submit" className="main__form__btn">
          Submit
        </button>
      </form>
      <div className="card-container">
        {recipeList.map((r) => {
          return (
            <Card
              key={r.id}
              title={r.title}
              image={r.image}
              currentIngredients={r.usedIngredients}
              ingredients={r.missedIngredients}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
