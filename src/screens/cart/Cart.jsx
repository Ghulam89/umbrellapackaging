import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, updateQuantity } from '../../store/productSlice';
import { Link } from 'react-router-dom';
const Cart = () => {



  const { productData: cartItems } = useSelector((state) => state.product);

    console.log(cartItems);
  const dispatch = useDispatch()


      const subtotal = cartItems?.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0) || 0;

    const total = subtotal;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
    }
  };
    
  return (
    <div className="sm:max-w-8xl max-w-[95%] mx-auto px-4 py-8">
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
            
            {cartItems?.map((item,index)=>{
              return (
<tr className="border-t">
              <td className="text-center">
                <button onClick={()=>dispatch(deleteProduct(item._id))} className="text-red-500 hover:text-red-700">✖</button>
              </td>
              <td className="flex items-center gap-4 p-3">
                <div className="w-10 h-10 bg-orange-500 rounded overflow-hidden">
                  <img
                    src={item?.image}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-pink-600">{item?.title}</span>
              </td>
              <td className="p-3">${item?.price}</td>
              <td className="p-3">
                <input
                  type="number"
                      min="1"
                      value={item?.quantity}
                      onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                  className="w-14 h-10 border border-gray-300 text-center rounded"
                />
              </td>
              <td className="p-3"> ${(item.price * item.quantity)}</td>
            </tr>
              )
            })}
          </tbody>
        </table>
        <div className="text-right mt-2">
          <button  className="bg-gray-200 text-gray-500 text-sm px-4 py-2 rounded" disabled>
            Update cart
          </button>
        </div>
      </div>

     {/* Cart Totals */}
      <div className="mt-8 max-w-md ml-auto">
        <h3 className="">Cart totals</h3>
        <div className="border border-gray-300 rounded divide-y">
          <div className="flex justify-between p-4">
            <span className="font-semibold">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center p-4">
            <span className="font-semibold">Shipping</span>
            <button className="text-pink-600 flex text-sm items-center gap-1">
              Calculate shipping
              <span role="img" aria-label="truck">🚚</span>
            </button>
          </div>
          <div className="flex justify-between p-4 font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <Link to={'/checkout'} className="bg-[#7249A4] hover:bg-purple-700 text-white py-3 rounded text-center font-semibold">
            Proceed to checkout
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
