"use client";
import Image from "next/image";
import { useCart } from "../component/cardProvider";
import { useState } from "react";

const CartPage = () => {
  const { cartItems, removeFromCart, decreaseQuantity, clearCart } = useCart();
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  const handleCheckout = () => {
    setShowCheckoutMessage(true);
    setTimeout(() => {
      setShowCheckoutMessage(false);
      clearCart();
    }, 3000);
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    height={64}
                    width={64}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-500 text-sm">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 sm:mt-0 space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-8">
            <button
              onClick={clearCart}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Clear Cart
            </button>
            <div className="text-right mt-6 sm:mt-0 sm:text-left">
              <p className="text-lg font-semibold text-gray-800">
                Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
              <button 
                onClick={handleCheckout}
                className="bg-green-600 text-white px-6 py-3 mt-4 sm:mt-0 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          {showCheckoutMessage && (
            <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md text-center">
              Your checkout has been processed successfully!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;

