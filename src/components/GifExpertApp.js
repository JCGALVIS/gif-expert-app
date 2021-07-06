import React, { useState } from "react";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategories([...categories, "Prueba"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
