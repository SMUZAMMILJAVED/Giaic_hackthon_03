"use client";

import { FaCar, FaCheck, FaDollarSign, FaSeedling } from "react-icons/fa"; // Updated icons

const CardsSection = () => {
  return (
    <section className="flex flex-col items-center py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl text-center mb-12">
        We Make Our Brand Different
      </h2>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-0 sm:px-8 lg:px-28">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-black">
          <div className="mb-4">
            <FaCar className="text-3xl text-black" />
            <h3 className="text-xl mt-2">Next day as standard</h3>
          </div>
          <p className="text-sm">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-black">
          <div className="mb-4">
            <FaCheck className="text-3xl text-black" />
            <h3 className="text-xl mt-2">Verified</h3>
          </div>
          <p className="text-sm">
            Our products are verified for quality and authenticity, ensuring you get the best.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-black">
          <div className="mb-4">
            <FaDollarSign className="text-3xl text-black" />
            <h3 className="text-xl mt-2">Price</h3>
          </div>
          <p className="text-sm">
            Competitive pricing for all our products, ensuring affordability and value for money.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-black">
          <div className="mb-4">
            <FaSeedling className="text-3xl text-black" />
            <h3 className="text-xl mt-2">Plant</h3>
          </div>
          <p className="text-sm">
            Our products are eco-friendly, designed to promote sustainability and healthy living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
