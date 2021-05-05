import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import FormatPrice from "../util/FormatPrice";
import AddCart from "../components/AddCart";
import RemoveCart from "../components/RemoveCart";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

export default function Products() {
  const { productId } = useParams();

  const { data: product, isLoading, isError, error } = useQuery(
    ["Products", productId],
    () => axios(`/api/products/${productId}`).then((res) => res.data.product)
  );

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="lds">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
  if (isError)
    return (
      <div className="text-red-500 font-bold text-center mx-auto">
        Error : {error.message}
      </div>
    );

  const price = FormatPrice(product);
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-8">
              {product.name}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                {price}
              </span>
             
              <AddCart product={product}  />
               <RemoveCart  product={product} />
               <br>
               </br>
            

            </div>
            <div>
                 <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           <span className="flex items-center justify-center ml-3 text-xl">
             <span className="inline-block py-1 px-2 text-white text-2xl font-medium tracking-wider">
              Back to Home
             </span>
           </span>
        
         </Link>
              </div>
          </div>
          
        </div>
      </div>
       
    </section>
    
  );
}
