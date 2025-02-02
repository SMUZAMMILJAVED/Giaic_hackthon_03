// components/AddToCart.tsx
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import { Product } from '../types/product';

interface AddToCartProps {
  product: Product;
  cart: (Product & { quantity: number })[];
  updateCart: (updatedCart: (Product & { quantity: number })[]) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToCart: React.FC<AddToCartProps> = ({ product, cart, updateCart, isCartOpen, setIsCartOpen }) => {
  const handleQuantityChange = (productId: string, action: 'increase' | 'decrease') => {
    updateCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  const addToCart = (product: Product) => {
    updateCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      let updatedCart;

      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });

    setIsCartOpen(true); // Open the cart panel
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    updateCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {/* Add to Cart Section */}
      <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center sm:space-x-8">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            className="px-3 py-1 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => handleQuantityChange(product._id, 'decrease')}
          >
            -
          </button>
          <input
            id="amount"
            type="number"
            min="1"
            value={cart.find((item) => item._id === product._id)?.quantity || 1}
            readOnly
            className="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
          />
          <button
            className="px-3 py-1 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => handleQuantityChange(product._id, 'increase')}
          >
            +
          </button>
        </div>
        <button
          className="bg-[#2A254B] text-white py-3 px-6 rounded-md hover:bg-gray-700 mt-4 sm:mt-0 w-full sm:w-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 left-0 w-80 bg-gray-50 shadow-xl h-full p-6 transition-transform transform ${
          isCartOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-purple-600">Your Cart</h2>
          <FaTrash
            className="text-gray-600 cursor-pointer hover:text-gray-800 text-lg"
            onClick={() => setIsCartOpen(false)}
          />
        </div>

        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg"
                      width={64}
                      height={64}
                    />
                  )}
                  <div className="ml-4">
                    <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-purple-500">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <FaTrash
                  className="text-red-500 cursor-pointer hover:text-red-700 text-lg"
                  onClick={() => removeFromCart(item._id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-6">Your cart is empty.</p>
        )}

        {cart.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between text-gray-800 font-semibold mb-4">
              <span>Total:</span>
              <span className="text-purple-600 font-bold">${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg w-full font-bold hover:opacity-90">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
