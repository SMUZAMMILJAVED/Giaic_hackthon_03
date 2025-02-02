"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Filters = () => {
  // State to manage dropdown visibility
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [productTypeOpen, setProductTypeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [sortByOpen, setSortByOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Toggle functions
  const toggleCategory = () => setCategoryOpen(!categoryOpen);
  const toggleProductType = () => setProductTypeOpen(!productTypeOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);
  const toggleBrand = () => setBrandOpen(!brandOpen);
  const toggleSortBy = () => setSortByOpen(!sortByOpen);
  const toggleMobileFilters = () => setMobileFiltersOpen(!mobileFiltersOpen);

  return (
    <div className="py-10 px-0 sm:px-8 lg:px-28 flex flex-wrap justify-between items-center">
      {/* Mobile View */}
      <div className="w-full lg:hidden">
        <button
          className="w-full text-lg font-medium text-gray-700 bg-gray-100 p-4 rounded-md"
          onClick={toggleMobileFilters}
        >
          {mobileFiltersOpen ? "Close Filters" : "Open Filters"}
        </button>
        {mobileFiltersOpen && (
          <div className="mt-4 space-y-4">
            {/* Filters inside mobile dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 text-lg font-medium"
                onClick={toggleCategory}
              >
                Category
                {categoryOpen ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>
              {categoryOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white shadow-lg border rounded-md">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Categories</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ceramics</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Furniture</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Lighting</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center text-gray-700 text-lg font-medium"
                onClick={toggleProductType}
              >
                Product Type
                {productTypeOpen ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>
              {productTypeOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white shadow-lg border rounded-md">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Types</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mugs</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vases</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bowls</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center text-gray-700 text-lg font-medium"
                onClick={togglePrice}
              >
                Price
                {priceOpen ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>
              {priceOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white shadow-lg border rounded-md">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Prices</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">€0 - €50</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">€50 - €100</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">€100+</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center text-gray-700 text-lg font-medium"
                onClick={toggleBrand}
              >
                Brand
                {brandOpen ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>
              {brandOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white shadow-lg border rounded-md">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Brands</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brand A</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brand B</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brand C</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 text-lg font-medium"
                onClick={toggleSortBy}
              >
                Sort By
                {sortByOpen ? (
                  <FaChevronUp className="ml-2 text-gray-500" />
                ) : (
                  <FaChevronDown className="ml-2 text-gray-500" />
                )}
              </button>
              {sortByOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white shadow-lg border rounded-md">
                  <ul className="py-2 text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: Low to High</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: High to Low</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-wrap justify-between items-center w-full">
        <div className="flex space-x-6">
          {/* Category Filter */}
          <div className="relative">
            <button
              className="flex items-center text-gray-700 text-lg font-medium"
              onClick={toggleCategory}
            >
              Category
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {categoryOpen && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg border rounded-md">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Categories</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ceramics</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Furniture</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Lighting</li>
                </ul>
              </div>
            )}
          </div>

          {/* Product Type Filter */}
          <div className="relative">
            <button
              className="flex items-center text-gray-700 text-lg font-medium"
              onClick={toggleProductType}
            >
              Product Type
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {productTypeOpen && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg border rounded-md">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Types</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mugs</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vases</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Bowls</li>
                </ul>
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="relative">
            <button
              className="flex items-center text-gray-700 text-lg font-medium"
              onClick={togglePrice}
            >
              Price
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {priceOpen && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg border rounded-md">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Prices</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">€0 - €50</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">€50 - €100</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">€100+</li>
                </ul>
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="relative">
            <button
              className="flex items-center text-gray-700 text-lg font-medium"
              onClick={toggleBrand}
            >
              Brand
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {brandOpen && (
              <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg border rounded-md">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Brands</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brand A</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brand B</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Brand C</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 text-lg font-medium"
            onClick={toggleSortBy}
          >
            Sort By
            <FaChevronDown className="ml-2 text-gray-500" />
          </button>
          {sortByOpen && (
            <div className="absolute left-0 mt-1 w-40 bg-white shadow-lg border rounded-md">
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: Low to High</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: High to Low</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
