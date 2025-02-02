"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-gray-400 py-16 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Three Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 1: Menu */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Offers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Categories */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Crockery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Plants
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Decor
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Company */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-4">Our Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Mailing List */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-lg lg:text-xl font-semibold mb-4">
              Join Our Mailing List
            </h3>
            <div className="flex flex-col sm:flex-row items-center w-full gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow w-full p-3 border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-500 "
              />
              <button className="bg-gray-500 w-32 md:w-52 text-white py-3 px-6 text-lg font-medium hover:bg-gray-400 transition duration-300">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center sm:text-left">
            &copy; 2024 Avion. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaPinterest size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
