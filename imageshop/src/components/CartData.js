import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartDialogBox from "./CartDialogBox";

export default function CartData() {
  const { formattedTotalPrice, cartCount } = useShoppingCart()
  const [isOpen, setOpen] = React.useState(false)

  const toggleModal = () => setOpen(!isOpen);

  return (
    <>
      <nav onClick={toggleModal} className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <span className="mr-5 hover:text-white flex items-center">
          <span className="ml-3">Total Amount: {formattedTotalPrice} ({cartCount})</span>
        </span>
      </nav>
      <CartDialogBox isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}