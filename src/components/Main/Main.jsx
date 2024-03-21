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
    console.log(ingredients, number);
    // console.log(currentIngredients);
    const makeRequest = async (ingredients, number) => {
      await axios
        .post("http://localhost:8080/recipes", {
          ingredients: ingredients,
          number: number,
        })
        .then((res) => {
          console.log(res.data);
          setRecipeList(res.data);
        })
        .catch((e) => console.error(e));
    };
    makeRequest(ingredients, number);
  };

  return (
    <main className="main">
      <h2 className="main__title">Enter Your Ingredients</h2>
      <form className="main__form" onSubmit={handleSubmit}>
        <label htmlFor="ingredients">INGREDIENTS LIST:</label>
        <input type="text" name="ingredient" onChange={handleInputChange} />
        <label htmlFor="ingredients">NUMBER:</label>
        <input type="text" name="number" onChange={handleNumChange} />
        <button>Submit</button>
      </form>
      <div className="card-container">
        {console.log(recipeList)}
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
