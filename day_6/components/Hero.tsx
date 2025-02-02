"use client";
 // Replace with your actual chair image path

const Hero = () => {
  return (
    <section className="px-0 sm:px-8 lg:px-28 py-0 sm:py-8 lg:py-12 flex flex-col sm:flex-row h-auto sm:h-[100vh]">
      {/* Left Section (Text Content) */}
      <div className="flex flex-col justify-center items-start w-full sm:w-1/2 bg-[#2A254B] text-white p-8 sm:p-12">
        <h1 className="text-2xl sm:text-4xl mb-6">
          The furniture brand for the future, with timeless designs
        </h1>
        {/* <p className="text-lg mb-8">
          Explore our exclusive range of premium furniture that blends comfort with elegance.
        </p> */}
        <button className="px-6 py-3 bg-[#F9F9F926]   text-lg font-medium transition">
          View Collection
        </button>
        <p className=" mt-12 sm:mt-12 md:mt-20 lg:mt-32 text-base">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div
        className="w-full sm:w-1/2 bg-[#E0F7FF] flex justify-center items-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/chair.jpeg')", // Use your image path here
        }}
      >
        {/* Empty div just for background */}
      </div>
    </section>
  );
};

export default Hero;
