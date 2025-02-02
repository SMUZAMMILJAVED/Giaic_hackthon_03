'use client';
import { useState, useEffect,use } from 'react';
import Image from 'next/image';
import { FaTimes, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// Type definitions
interface ProductPageProps {
  params: { slug: string };
}

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  stock_quantity: number;
}

// Fetch product data
async function getProduct(slug: string): Promise<Product | null> {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      image,
      price,
      description,
      stock_quantity
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  
  const { slug }: { slug: string } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(slug); // Use the unwrapped slug
      setProduct(fetchedProduct);
    };

 

    fetchProduct();

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [slug]);

  const updateCart = (updatedCart: (Product & { quantity: number })[]) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
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

  const handleQuantityChange = (productId: string, action: 'increase' | 'decrease') => {
    setCart((prevCart) => {
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

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle product not found
  if (!product) {
    return (
      <div className="text-center py-12">
        {/* <h1 className="text-2xl font-bold">Product Not Found</h1> */}
        <h1 className="text-2xl font-bold">Product Not Found&apos;s</h1>
        <Link href="/products" className="text-purple-500 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white flex items-center justify-center w-full min-h-screen">
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 left-0 w-80 bg-gray-50 shadow-xl h-full p-6 transition-transform transform ${
          isCartOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-purple-600">Your Cart</h2>
          <FaTimes
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
                      src={urlFor(item.image).width(50).height(50).url()} // Processing image URL
                      alt={item.name}
                      className="w-16 h-16 rounded-lg"
                      width={50}
                      height={50}
                    />
                  )}
                  <div className="ml-4">
                    <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
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
              <span className="text-purple-600 font-bold">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <Link href={"/checkout"} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg w-full font-bold hover:opacity-90">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>

      <div className="bg-white flex flex-col lg:flex-row w-full h-auto lg:h-[550px]">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 h-auto">
          <Image
            src={urlFor(product.image).width(600).height(530).url()}
            alt={product.name}
            width={600}
            height={530}
            className="object-cover w-full h-auto lg:h-[530px]"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-4 lg:p-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
              <p className="text-xl text-gray-600 mt-4">${product.price}</p>

              <p className="text-gray-700 mt-2">{product.description}</p>

              <ul className="list-disc pl-5 mt-4 text-gray-700">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>

            {/* Dimensions Table */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Dimensions</h2>
              <div className="w-full sm:w-72 shadow-md p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
                  <div className="flex flex-col items-center">
                    <p className="font-semibold">Height</p>
                    <p>110cm</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold">Width</p>
                    <p>75cm</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold">Depth</p>
                    <p>50cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amount and Add to Cart */}
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
        </div>
      </div>
    </div>
  );
}
