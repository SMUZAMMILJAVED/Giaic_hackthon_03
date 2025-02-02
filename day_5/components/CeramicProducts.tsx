// "use client";

// import Image from "next/image";
// import { FaEuroSign } from "react-icons/fa";

// const CeramicProducts = () => {
//   return (
//     <section className="py-16 px-0 sm:px-8 lg:px-28">
//       {/* Heading */}
//       <h2 className="text-3xl sm:text-4xl text-[#22202E] mb-8 ml-4">
//         New Ceramics
//       </h2>

//       {/* Product Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
//         {/* Card 1 */}
//         <div className="bg-white p-4 ">
//           <Image
//             src="/ceramic_1.png" // Image from public folder
//             alt="Ceramic Mug"
//             width={300}
//             height={350} // Increased height
//             className="w-full h-[350px] object-cover mb-4" // Increased height in the class
//           />
//           <h3 className="text-lg mb-2">Ceramic Mug</h3>
//           <div className="flex items-center space-x-1">
//             <FaEuroSign className="text-xl text-[#22202E]" />
//             <span className="text-xl">15.99</span>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white p-4">
//           <Image
//             src="/ceramin_2.png" // Image from public folder
//             alt="Ceramic Vase"
//             width={300}
//             height={350} // Increased height
//             className="w-full h-[350px] object-cover mb-4" // Increased height in the class
//           />
//           <h3 className="text-lg mb-2">Ceramic Vase</h3>
//           <div className="flex items-center space-x-1">
//             <FaEuroSign className="text-xl text-[#22202E]" />
//             <span className="text-xl">22.50</span>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white p-4 ">
//           <Image
//             src="/ceramic_3.png" // Image from public folder
//             alt="Ceramic Plate"
//             width={300}
//             height={350} // Increased height
//             className="w-full h-[350px] object-cover mb-4" // Increased height in the class
//           />
//           <h3 className="text-lg mb-2">Ceramic Plate</h3>
//           <div className="flex items-center space-x-1">
//             <FaEuroSign className="text-xl text-[#22202E]" />
//             <span className="text-xl">18.75</span>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white p-4">
//           <Image
//             src="/ceramic_4.png" // Image from public folder
//             alt="Ceramic Bowl"
//             width={300}
//             height={350} // Increased height
//             className="w-full h-[350px] object-cover mb-4" // Increased height in the class
//           />
//           <h3 className="text-lg mb-2">Ceramic Bowl</h3>
//           <div className="flex items-center space-x-1">
//             <FaEuroSign className="text-xl text-[#22202E]" />
//             <span className="text-xl">12.30</span>
//           </div>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="flex justify-center mt-8">
//         <button className="bg-[#f9f9f9] text-black py-3 px-8 rounded-md text-lg font-semibold shadow-lg hover:bg-[#e6e6e6] transition duration-300">
//           View Collection
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CeramicProducts;
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaEuroSign } from "react-icons/fa";
import { sanityClient } from "../sanity/lib/sanity"; // Ensure the correct path

interface Product {
  _id: string;
  name: string;
  price: number;
  image?: string; // Store the direct image URL
}

const CeramicProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && category->slug.current == "ceramics"]{
          _id, 
          name, 
          price, 
          "image": image.asset->url
        }`;
        const data = await sanityClient.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching ceramic products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-0 sm:px-8 lg:px-28">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl text-[#22202E] mb-8 ml-4">
        New Ceramics
      </h2>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white p-4">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name || "Ceramic Product"}
                  width={300}
                  height={350}
                  className="w-full h-[350px] object-cover mb-4"
                />
              ) : (
                <p className="text-red-500">No Image Available</p>
              )}
              <h3 className="text-lg mb-2">{product.name}</h3>
              <div className="flex items-center space-x-1">
                <FaEuroSign className="text-xl text-[#22202E]" />
                <span className="text-xl">{product.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading products...</p>
        )}
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#f9f9f9] text-black py-3 px-8 rounded-md text-lg font-semibold shadow-lg hover:bg-[#e6e6e6] transition duration-300">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default CeramicProducts;
