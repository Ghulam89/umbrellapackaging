import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import logo from "../../assets/images/google-logo.png";

const Checkout = () => {
  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <button className="bg-black flex max-w-md w-full mx-auto mb-5 justify-center gap-2 items-center text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Buy with <img src={logo} className="w-5 h-5" alt="Google" /> Pay
          </button>
        </div>
        
        <div className="flex justify-center items-center mb-8">
          <span className="text-gray-500 text-sm">- OR -</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Billing Details Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Billing Details</h4>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <Input
                    label={"First Name"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"First Name"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-1">
                  <Input
                    label={"Last Name"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"Last Name"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"Company Name (optional)"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"Company Name"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"Country / Region"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"Select Country"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"Street address"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"}
                    placeholder={"House number and street name"}
                    star={"*"}
                  />
                  <Input
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"Apartment, suite, unit, etc. (optional)"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"Town / City"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"City"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"State"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"State"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"ZIP Code"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"ZIP Code"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"Phone"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"Phone"}
                    star={"*"}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label={"Email Address"}
                    className={"bg-gray-50 w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"}
                    placeholder={"Email Address"}
                    star={"*"}
                  />
                </div>
              </form>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg mt-6 p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order notes (optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full bg-gray-50 p-3 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary Section */}
          <div className="w-full lg:w-1/2">
            <div className=" border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Your Order</h4>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <p className="font-semibold">Product</p>
                  <p className="font-semibold">Subtotal</p>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <p>Auto LED Packaging x 1</p>
                  <p>$2.50</p>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <p>Subtotal</p>
                  <p>$2.50</p>
                </li>
                <li className="flex justify-between items-center pt-2 font-semibold text-lg">
                  <p>Total</p>
                  <p>$2.50</p>
                </li>
              </ul>
            </div>
            
            <div className=" border border-gray-200 rounded-lg mt-6 p-6 ">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <p className="font-medium">Credit Card</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-visa.svg',
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-mastercard.svg',
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-amex.svg',
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-discover.svg',
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-dinersclub.svg',
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-jcb.svg',
                    'https://umbrellapackaging.com/wp-content/plugins/woocommerce-square/build/images/card-unionpay.svg'
                  ].map((src, index) => (
                    <img 
                      key={index} 
                      src={src} 
                      alt="" 
                      className="w-8 h-8 object-contain" 
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
              </p>
              
              <div className="flex items-start mb-6">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 mr-2" 
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I have read and agree to the website terms and conditions.
                </label>
              </div>
              
              <Button 
                label={'Place order'} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;