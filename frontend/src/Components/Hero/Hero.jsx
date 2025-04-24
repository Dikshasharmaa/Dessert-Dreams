import React from "react";
import "./Hero.css";
import cupcake from "../../assets/cupcake.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
        <h1>
          ARE YOU LOOKING FOR SWEET, STYLISH AND <br /> DELICIOUS BIRTHDAY CAKES?
        </h1>
        <p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SELECTION.</p>
      </div>
      

      <div className="hero-img" >
      <img src={cupcake} alt="Cupcake" />
      </div>
      </div>

      
      
    </section>
  );
}