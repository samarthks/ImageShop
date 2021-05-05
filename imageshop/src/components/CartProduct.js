import React from "react";
import FormatPrice from "../util/FormatPrice";
import { useShoppingCart } from "use-shopping-cart";

export default function CartProduct({cartProducts}) {
    const { setItemQuantity } = useShoppingCart();
    return (
        <div className="flex w-full">
            <div className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-4 w-full justify-between">
                <div className="flex">
                    <img
                        className="h-16 w-16 rounded-full object-cover mx-1"
                        src={cartProducts.image}
                        alt={cartProducts.name}
                    />
                    <p className="text-gray-600 text-lg mx-2">
                        <span className="font-bold">{cartProducts.name}</span> <br />
                        {FormatPrice(cartProducts)} x {cartProducts.quantity}
                    </p>
                    <div>
                    <input
                        style={{ width: 50 }}
                        className="border-solid border-2"
                        type="number"
                        value={cartProducts.quantity}
                        onChange={(event)=> {
                          setItemQuantity(cartProducts.sku,event.target.value)
                      }}
                        min={0}
                    />
                </div>
                </div>
              
            </div>
        </div>
    );
}
