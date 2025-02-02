import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="bg-white flex items-center justify-center w-full min-h-screen">
      <div className="bg-white flex flex-col lg:flex-row w-full h-auto lg:h-[550px]">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 h-auto">
        <Image
            src="/product.jpeg" // Replace with the actual path to your image
            alt="The Dandy Chair"
            width={600} // Set a width (adjust based on your needs)
            height={530} // Set a height (adjust based on your needs)
            className="object-cover w-full h-auto lg:h-[530px]" // Keep your responsiveness styles
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-4 lg:p-6">
          {/* Product Info */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">The Dandy Chair</h1>
              <p className="text-xl text-gray-600 mt-4">£250</p>

              <p className="text-gray-700 mt-2">
                A timeless design, with premium materials features as one of our most
                popular and iconic pieces. The Dandy chair is perfect for any
                stylish living space with beech legs and lambskin leather
                upholstery.
              </p>

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
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 focus:outline-none">
                -
              </button>
              <input
                id="amount"
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
              />
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 focus:outline-none">
                +
              </button>
            </div>
            <button className="bg-[#2A254B] text-white py-3 px-6 rounded-md hover:bg-gray-700 mt-4 sm:mt-0 w-full sm:w-auto">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
