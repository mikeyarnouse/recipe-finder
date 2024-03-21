import React, { useState } from "react";
import axios from "axios";

const Main = () => {
  const [ingredients, setIngredients] = useState("");
  const [number, setNumber] = useState(0);

  const handleInputChange = (e) => {
    setIngredients(e.target.value.replaceAll(" ", "+"));
  };
  const handleNumChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ingredients, number);
    const makeRequest = async (ingredients, number) => {
      await axios
        .post("http://localhost:8080/recipes", {
          ingredients: ingredients,
          number: number,
        })
        .then((res) => console.log(res.data))
        .catch((e) => console.error(e));
    };
    makeRequest(ingredients, number);
  };

  return (
    <main>
      <h2>Enter Your Ingredients</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="ingredients">INGREDIENTS LIST:</label>
        <input type="text" name="ingredient" onChange={handleInputChange} />
        <label htmlFor="ingredients">NUMBER:</label>
        <input type="text" name="number" onChange={handleNumChange} />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Main;
