"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaEuroSign, FaTimes, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { sanityClient } from "../sanity/lib/sanity"; // Ensure correct path
import { Product } from "../types/product"; // Import your Product interface

const ProductListings = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          name,
          price,
          "image": image.asset->url,
          "slug": slug,
          description
        }`;
        const data = await sanityClient.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (updatedCart: (Product & { quantity: number })[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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

      localStorage.setItem("cart", JSON.stringify(updatedCart));
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
    <section className="py-0 px-0 sm:px-8 lg:px-28">
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 left-0 w-80 bg-gray-50 shadow-xl h-full p-6 transition-transform transform ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
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
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg"
                      width={64}
                      height={64}
                    />
                  )}
                  <div className="ml-4">
                    <h3 className="text-md font-semibold text-gray-800">
                      {item.name}
                    </h3>
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
            <Link
              href={"/checkout"}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg w-full font-bold hover:opacity-90"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.slug.current}`} key={product._id}>
            <div className="cursor-pointer">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={350}
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover mb-4"
                />
              ) : (
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gray-200 flex items-center justify-center">
                  <p className="text-red-500">No Image Available</p>
                </div>
              )}
              <h3 className="text-lg text-gray-800 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-1">
                <FaEuroSign className="text-xl text-[#22202E]" />
                <span className="text-xl">{product.price}</span>
              </div>
              <button
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigating to product page
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-8 mb-14">
        <button className="bg-[#f9f9f9] text-black py-3 px-8 rounded-md text-lg font-semibold shadow-lg hover:bg-[#e6e6e6] transition duration-300">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default ProductListings;
