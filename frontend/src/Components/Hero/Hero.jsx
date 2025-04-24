import React from "react";
import "./Hero.css";
import cupcake from "../../assets/cupcake.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>
          ARE YOU LOOKING FOR SWEET, STYLISH AND <br /> DELICIOUS BIRTHDAY CAKES?
        </h2>
        <p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SELECTION.</p>
      </div>
      <img className="hero-img" src={cupcake} alt="Cupcake" />
      <p className="caption">This is the home page</p>
    </section>
  );
}