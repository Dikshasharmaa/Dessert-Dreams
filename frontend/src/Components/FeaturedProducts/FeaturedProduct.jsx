import React from "react";
import "./FeaturedProduct.css";
import ChoclateCupcake from "../../assets/chococupcake.webp";
import TresLeches from "../../assets/TresLeches.jpeg";
import UnicornCupcake from "../../assets/UnicornCupcakes.jpg";
import CreamDonut from "../../assets/CreamDonuts.jpg";
import kulfi from "../../assets/Kulfi.jpeg";
const cakes = [
  {
    name: "Choclate Cupcakes",
    price: 10,
    image: ChoclateCupcake,
  },
  {
    name: "Strawberry Tres Leches",
    price: 29,
    image: TresLeches,
  },
  {
    name: "Cream Donuts",
    price: 29,
    image: CreamDonut,
  },
  {
    name: "Unicorn Cupcake",
    price: 29,
    image: UnicornCupcake,
  },
  {
    name: "Kulfi",
    price: 29,
    image: kulfi,
  },
];

export default function FeaturedCakes() {
  return (
    <section className="featured">
      <h2>Our Featured Products</h2>
      <br/>
      

      <div className="featured-grid">
        {cakes.map((cake, index) => (
          <div className="cake-card" key={index}>
            <img src={cake.image} alt={cake.name} />
            <div className="price">${cake.price}</div>
            <h3>{cake.name}</h3>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}