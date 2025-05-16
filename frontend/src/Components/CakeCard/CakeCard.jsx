import React from "react";
import "./CakeCard.css";

import RoseCake from "../../assets/RoseCake.jpg";
import FloralCake from "/Users/diksha/Documents/Dessert Dreams/frontend/src/assets/FloralCake.webp"; 
import DollCake from "/Users/diksha/Documents/Dessert Dreams/frontend/src/assets/DollCake.jpg";
import PolarBear from "../../assets/PolarBear.jpeg"  

function CakeCard() {
  const cakes = [
    { title: "Floral Cake", image: FloralCake, price: 60 },
    { title: "Rose Cake", image: RoseCake, price: 80 },
    { title: "Doll Cake", image: DollCake, price: 100 },
    { title: "Bear Cake", image: PolarBear, price:120}
  ];

  return (
    <div className="cake-container">
      {/* <h3 className="card-title">OUR CAKES</h3><br></br> */}
      {cakes.map((cake, index) => (
        <div key={index} className="cake-card">
          <img src={cake.image} alt={cake.title} className="cake-image" />
          <h4 className="cake-price">${cake.price}</h4>
          <button className="buy-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default CakeCard;