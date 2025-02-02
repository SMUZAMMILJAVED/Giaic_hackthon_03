"use client";

import Image from "next/image";

const GetInTouchSection = () => {
  return (
    <section className="w-full">
      {/* Wrapper Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full mx-auto ">
        {/* Left Side (Text) */}
        <div className="flex-1 p-4 sm:p-8 shadow-sm flex flex-col justify-between h-full">
          <h2 className="text-3xl sm:text-4xl text-[#22202E] mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>

          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-8">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>

          <p className="text-sm sm:text-lg text-[#555] lg:mb-20 mb-8 sm:mb-16">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>

          {/* Button aligned to left on large screens, centered on small screens */}
          <button className="bg-[#f0f0f0] text-black py-3 px-8 text-lg font-semibold shadow-lg hover:bg-[#e0e0e0] transition duration-300 self-center sm:self-start sm:w-56 w-80 ">
            Get In Touch
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 h-full w-full mt-8 lg:mt-0">
          <Image
            src="/Image.png" 
            alt="Get in touch"
            layout="responsive" // Ensures image is responsive and fills container
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
