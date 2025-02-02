import Image from "next/image";

const Cart = () => {
  return (
    <div className="flex flex-col p-6 sm:p-9">
      <div className="mb-6">
        {/* Heading on the left side */}
        <h1 className="text-3xl font-semibold text-gray-800">Your Shopping Cart</h1>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-4 text-gray-700 font-medium border-b">Product</th>
              <th className="py-3 px-4 text-gray-700 font-medium border-b text-center">Quantity</th>
              <th className="py-3 px-4 text-gray-700 font-medium border-b text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1 */}
            <tr>
              <td className="py-4 px-4 border-b">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16">
                    <Image
                      src="/cart_1.png" // Replace with the actual image path
                      alt="Graystone vase"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-700">Graystone vase</h2>
                    <p className="text-sm text-gray-500">A timeless ceramic vase with a tri-color gray glaze.</p>
                    <p className="text-sm font-medium text-gray-700 mt-1">€85</p> {/* Product Price below Description */}
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 border-b text-center">
                <p className="text-gray-700">1</p> {/* Centered Quantity */}
              </td>
              <td className="py-4 px-4 border-b text-center">
                <p className="text-gray-700">€85</p> {/* Centered Total Price */}
              </td>
            </tr>
            {/* Product 2 */}
            <tr>
              <td className="py-4 px-4 border-b">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16">
                    <Image
                      src="/cart_2.png" // Replace with the actual image path
                      alt="Basic white vase"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-700">Basic white vase</h2>
                    <p className="text-sm text-gray-500">Beautiful and simple, this is one for the classics.</p>
                    <p className="text-sm font-medium text-gray-700 mt-1">€125</p> {/* Product Price below Description */}
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 border-b text-center">
                <p className="text-gray-700">1</p> {/* Centered Quantity */}
              </td>
              <td className="py-4 px-4 border-b text-center">
                <p className="text-gray-700">€125</p> {/* Centered Total Price */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Subtotal Section aligned to the right */}
      <div className="mt-6 flex justify-end items-center border-t pt-4">
        <div className="text-right">
          <p className="text-lg font-medium text-gray-800">Subtotal</p>
        </div>
        <div className="text-right ml-4 mt-5">
          <p className="text-xl font-semibold text-gray-800">€210</p>
          <p className="text-sm text-gray-500 mt-1">Taxes and shipping are calculated at checkout</p>
        </div>
      </div>

      {/* Checkout Button aligned to the right */}
      <div className="mt-6 flex justify-end">
        <button className="w-full px-8 sm:w-auto bg-[#2A254B] text-white py-2 hover:bg-[#3c2a64]">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
