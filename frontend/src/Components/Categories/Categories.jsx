import React from "react";
import "./Categories.css"
import FruitTart from "../../assets/FruitTart.jpg";
import Cupcake from "../../assets/Cupcake.webp";
import TresLeches from "../../assets/CatresLeches.jpeg";
import Donut from "../../assets/CaDonut.png";
import kulfi from "../../assets/Kulfi.jpeg";
import Cake from "../../assets/Cake.jpeg"

export default function Categories() {
  const categories = [
    {
    //   name: "Tarts",
      image: FruitTart,
    },
    {
    //   name: "Cupcakes",
      image: Cupcake,
    },
    {
    //   name: "Tres Leches",
      image: TresLeches,
    },
    {
    //   name: "Donuts",
      image: Donut,
    },
    {
        image:kulfi,
    },
    {
        image:Cake,
    }
  ];

  return (
    <section className="Categories">
      <h2>Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="cards" key={index}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}