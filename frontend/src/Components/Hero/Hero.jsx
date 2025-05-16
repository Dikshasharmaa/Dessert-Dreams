import React from "react";
import "./Hero.css";
// import cupcake from "../../assets/cupcake.png";
import Slideshow from '../Slideshow/Slideshow';
import cake1 from '../../assets/Butterfly.jpeg';
import cake2 from '../../assets/LashGoddess.jpeg';
import cake3 from '../../assets/RoseCake.jpg';

export default function Hero() {
  const images = [cake1, cake2, cake3];
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
        <h1>
          ARE YOU LOOKING FOR SWEET, STYLISH AND <br /> DELICIOUS DESSERTS?
        </h1>
        <p>DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE SELECTION.</p>
      </div>
      

      <div className="hero-img" >
      <Slideshow images={images} />
      </div>
      </div>

      
      
    </section>
  );
}