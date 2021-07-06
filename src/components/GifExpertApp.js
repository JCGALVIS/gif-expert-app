import React, { useState } from "react";
import { AddCategory } from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One punch",
    "Samurai X",
    "Dragon Ball",
  ]);

//   const handleAdd = () => {
//     setCategories([...categories, "Prueba"]);
//   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
