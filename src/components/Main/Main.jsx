import React from "react";

const Main = () => {
  return (
    <main>
      <h1>Main</h1>
      <form action="">
        <label htmlFor="ingredients">INGREDIENTS LIST:</label>
        <input type="text" name="ingredient" />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Main;
