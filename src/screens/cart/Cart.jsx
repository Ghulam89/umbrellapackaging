import React from 'react';

const Cart = () => {
  return (
    <div className="sm:max-w-6xl max-w-[95%] mx-auto px-4 py-8">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 w-12"></th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t">
              <td className="text-center">
                <button className="text-red-500 hover:text-red-700">✖</button>
              </td>
              <td className="flex items-center gap-4 p-3">
                <div className="w-10 h-10 bg-orange-500 rounded overflow-hidden">
                  <img
                    src="https://umbrellapackaging.com/wp-content/uploads/2024/04/Auto-LED-Packaging-250x250.webp"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-pink-600">Auto LED Packaging</span>
              </td>
              <td className="p-3">$2.50</td>
              <td className="p-3">
                <input
                  type="number"
                  value="1"
                  className="w-14 h-10 border border-gray-300 text-center rounded"
                />
              </td>
              <td className="p-3">$2.50</td>
            </tr>
          </tbody>
        </table>
        <div className="text-right mt-2">
          <button className="bg-gray-200 text-gray-500 text-sm px-4 py-2 rounded" disabled>
            Update cart
          </button>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="mt-8 max-w-md ml-auto">
        <h2 className="text-2xl font-semibold mb-4">Cart totals</h2>
        <div className="border border-gray-300 rounded divide-y">
          <div className="flex justify-between p-4">
            <span className=" font-semibold">Subtotal</span>
            <span>$2.50</span>
          </div>
          <div className="flex justify-between items-center p-4">
            <span className=" font-semibold">Shipping</span>
            <button className="text-pink-600 flex text-sm items-center gap-1">
              Calculate shipping
              <span role="img" aria-label="truck">🚚</span>
            </button>
          </div>
          <div className="flex justify-between p-4 font-bold">
            <span>Total</span>
            <span>$2.50</span>
          </div>
        </div>

        {/* Checkout Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <button className="bg-[#7249A4] hover:bg-purple-700 text-white py-3 rounded text-center font-semibold">
            Proceed to checkout
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
