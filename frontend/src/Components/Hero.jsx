import React from "react";
// import cupcake from "../assets/cupcake.png";

export default function Hero() {
  return (
    <section className="bg-pink-100 py-10 px-6 text-center text-rose-900">
      <h2 className="text-3xl font-bold mb-4">
        ARE YOU LOOKING FOR SWEET, STYLISH AND DELICIOUS BIRTHDAY CAKES?
      </h2>
      <p className="mb-4">DON'T WORRY, WE CAN HELP YOU! CHECK OUR BEST CAKE COLLECTION.</p>
      {/* <img src={cupcake} alt="Cupcake" className="mx-auto w-64 rounded-xl shadow-md" /> */}
      <p className="mt-4 text-xl font-medium">This is the home page</p>
    </section>
  );
}