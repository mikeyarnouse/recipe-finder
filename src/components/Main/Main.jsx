import React, { useState } from "react";
import axios from "axios";

const Main = () => {
  const [ingredients, setIngredients] = useState("");
  const [number, setNumber] = useState(0);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };
  const handleNumChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `ingredients=${ingredients.replaceAll(" ", "+")}&number=${number}`
    );
    const makeRequest = async () => {
      await axios
        .get(
          "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=1dd66b091ffd463f8a2222242ddfdaa0"
        )
        .then((res) => console.log(res.data))
        .catch((e) => console.error(e));
    };
    makeRequest();
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
