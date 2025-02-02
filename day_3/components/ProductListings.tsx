"use client";

import Image from "next/image";
import { FaEuroSign } from "react-icons/fa";

const ProductListings = () => {
  const products = [
    { id: 1, name: "Ceramic Mug", price: 15.99, image: "/ceramic_1.png" },
    { id: 2, name: "Ceramic Vase", price: 22.50, image: "/ceramic_5.png" },
    { id: 3, name: "Ceramic Plate", price: 18.75, image: "/ceramic_3.png" },
    { id: 4, name: "Ceramic Bowl", price: 12.30, image: "/ceramic_4.png" },
    { id: 5, name: "Ceramic Mug", price: 15.99, image: "/ceramic_3.png" },
    { id: 6, name: "Ceramic Vase", price: 22.50, image: "/ceramic_4.png" },
    { id: 7, name: "Ceramic Plate", price: 18.75, image: "/ceramic_5.png" },
    { id: 8, name: "Ceramic Bowl", price: 12.30, image: "/ceramic_1.png" },
    { id: 9, name: "Ceramic Mug", price: 15.99, image: "/ceramic_5.png" },
    { id: 10, name: "Ceramic Vase", price: 22.50, image: "/ceramic_4.png" },
    { id: 11, name: "Ceramic Plate", price: 18.75, image: "/ceramic_3.png" },
    { id: 12, name: "Ceramic Bowl", price: 12.30, image: "/ceramic_5.png" }
  ];

  return (
    <section className="py-0 px-0 sm:px-8 lg:px-28">
      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="">
            <Image
              src={product.image} // Image from public folder
              alt={product.name}
              width={300}
              height={350}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover mb-4"
            />
            <h3 className="text-lg text-gray-800 mb-2">{product.name}</h3>
            <div className="flex items-center space-x-1">
              <FaEuroSign className="text-xl text-[#22202E]" />
              <span className="text-xl">{product.price}</span>
            </div>
          </div>
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