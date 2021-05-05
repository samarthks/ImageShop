import React from "react";
import ProductList from "../components/ProductList";

import Navbar from "../components/NavBar";
export default function Home() {

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
           ImageShop
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4"><ProductList /></div>
      </div>
    </section>
  );
}
