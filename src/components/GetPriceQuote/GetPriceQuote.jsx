import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const GetPriceQuote = () => {
  return (
    <div className="max-w-6xl mx-auto  py-7">
      <div className="bg-[#F7F7F7] rounded-lg p-4 md:p-6 w-full">
        <h1 className="text-[#333333] text-center font-semibold text-lg md:text-xl mb-4">
          Get Price Quote
        </h1>
        
        <div className="pt-3.5">
          <h6 className="text-sm md:text-base font-medium mb-4">Product Specification</h6>
          
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <div className="w-full">
                <Input
                  label="Box Style"
                  star={"*"}
                  placeholder="Box Style"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Size (Length)"
                  star={"*"}
                  placeholder="Length"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Size (Width)"
                  star={"*"}
                  placeholder="width"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Size (Depth)"
                  star={"*"}
                  placeholder="Depth"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Unit"
                  star={"*"}
                  placeholder="Inches"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Stock"
                  star={"*"}
                  placeholder="Stock"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Colors"
                  star={"*"}
                  placeholder="Colors"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Printing Sides"
                  star={"*"}
                  placeholder="Inside"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Quantity"
                  star={"*"}
                  placeholder="Quantity"
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="w-full">
                <Input
                  label="Add-Ons"
                  star={"*"}
                  placeholder=""
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label
                  htmlFor="design_upload"
                  className="block pb-1.5 text-[#333333] text-sm md:text-base font-medium"
                >
                  Upload Your Design, Max Size 5MB
                  <p className="flex flex-wrap gap-0.5 text-xs md:text-sm mt-1">
                    Allowed File Types:
                    <span className="font-semibold"> png, pdf, jpg, jpeg, webp</span>
                  </p>
                </label>
                <input 
                  id="design_upload"
                  className="w-full p-2.5 bg-white rounded-lg text-xs md:text-sm border border-[#333333] mt-2"
                  type="file" 
                />
              </div>
              
              <div className="sm:col-span-2 lg:col-span-3">
                <label
                  htmlFor="description"
                  className="block pb-1.5 text-[#333333] text-sm md:text-base font-medium"
                >
                  Description
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                  placeholder="Tell us the size / dimensions, material, finising, add-ons, and design preferences."
                ></textarea>
              </div>
            </div>
            
            <div className="w-full flex justify-end mt-6 md:mt-8">
              <Button
                label="Next"
                className="bg-[#4440E6] w-full sm:w-40 text-white py-2.5 px-4 rounded-lg hover:bg-[#3938b8] transition-colors"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetPriceQuote;