import React from "react";
import "./CakeCard.css";


function App() { //Array
    const cakes = [
      { title: 'Floral Cake', image: 'https://via.placeholder.com/200?text=Floral+Cake', price: 60 },
      { title: 'Rose Cake', image: 'https://via.placeholder.com/200?text=Burger+Cake', price: 80 },
      { title: 'Doll Cake', image: 'https://via.placeholder.com/200?text=Rose+Cake', price: 120 },
    ];
    return(
        <div className="cake-container">
        {cakes.map((cake, index) => (
          <div key={index} className="cake-card">
            <h3 className="card-title">OUR CAKES</h3>
            <img src={cake.image} alt={cake.title} className="cake-image" />
            <h4 className="cake-price">${cake.price}</h4>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>

    );

}
export default App;