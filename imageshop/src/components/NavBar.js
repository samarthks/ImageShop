import React from "react";

import CartData from "./CartData";
import CheckoutCart from "./CheckoutCart";




export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <CartData />
      <CheckoutCart />
      </div>
    </header>
  );
}