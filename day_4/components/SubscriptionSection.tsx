"use client";

const SubscriptionSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-28 bg-[#f9f9f9]">
      {/* Wrapper Container */}
      <div className="bg-white p-8 shadow-sm w-full sm:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12 mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl text-[#22202E] mb-4 text-center">
          Join the Club and Get the Benefits
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-[#555] mb-8 text-center max-w-2xl mx-auto">
          Subscribe to our newsletter and stay updated with the latest offers and
          products. Don&apos;t miss out on exclusive deals and discounts!
        </p>

        {/* Subscription Form */}
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-[300px] p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A254B] h-14"
          />
          <button
            className="bg-[#2A254B] text-white py-3 px-8 font-semibold text-sm sm:text-base shadow-lg hover:bg-[#1f1a34] transition duration-300 h-14"
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
