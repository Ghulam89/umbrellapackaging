import React from "react";
import Button from "../common/Button";
import Hero1 from "../../assets/images/web-banner.webp";
import Icon1 from '../../assets/images/icon/free quote.svg';
import Icon3 from '../../assets/images/icon/Free Design support.svg';
import Icon2 from '../../assets/images/icon/Free Lamination.svg';

import Icon4 from '../../assets/images/icon/free shipping.svg';
import Icon5 from '../../assets/images/icon/FSC Certified.svg';
import Icon6 from '../../assets/images/icon/Quickest Turnaround.svg';
const Hero = () => {
  return (
    <div className="   sm:max-w-6xl max-w-[95%] mx-auto">
      <div className=" bg-[#B8B6FA99] flex sm:flex-row  flex-col  my-3.5 p-4 rounded-md w-full">
        <div className=" sm:w-7/12 w-full">
          <h1 className=" font-semibold">Umbrella Custom Packaging</h1>
          <h3 className=" pt-1.5 text-[#4440E6]">Customize Everything Under This Umbrella</h3>
          <div className=" flex  mt-7 gap-2 flex-wrap items-center">
            <Button
              label={"Apparel Boxes"}
              className="   py-1 font-medium border border-[#4440E6]"
            />
            <Button
              label={"Food Boxes"}
              className="   py-1 font-medium border border-[#4440E6]"
            />
            <Button
              label={"CBD Boxes"}
             className="   py-1 font-medium border border-[#4440E6]"
            />
          </div>
          <div className=" flex flex-wrap   mt-7 gap-2.5 items-center">
            <Button
              label={"Cardboard Boxes"}
              className=" bg-[#4440E6] text-white"
            />
            <Button
              label={"Get Custom Template"}
              className="bg-[#4440E6] text-white"
            />
            <Button
              label={"Order Sample Kit"}
              className="bg-[#4440E6]  text-white"
            />
          </div>
        </div>
        <div className=" sm:w-5/12 w-full">
          <img src={Hero1} className=" w-full" alt="" />
        </div>
      </div>

      <div className=" bg-[#B8B6FA99]  grid sm:grid-cols-6  grid-cols-2 my-3.5 mt-3 p-4 rounded-md w-full">
         <div className=" flex gap-1 items-center">
           <img src={Icon1}  width={30} alt="" />
           <h5>Free Quote</h5>  
        </div> 
        <div className=" flex gap-1 items-center">
           <img src={Icon2}  width={30} alt="" />
           <h5>Free Design support</h5>  
        </div> 
        <div className=" flex gap-1 items-center">
           <img src={Icon3}  width={30} alt="" />
           <h5>Free Lamination</h5>  
        </div> 
        <div className=" flex gap-1 items-center">
           <img src={Icon4}  width={30} alt="" />
           <h5>Free Shipping</h5>  
        </div> 
        <div className=" flex gap-1 items-center">
           <img src={Icon5}  width={30} alt="" />
           <h5>FSC Certified</h5>  
        </div> 
        <div className=" flex gap-1 items-center">
           <img src={Icon6}  width={30} alt="" />
           <h5>Quickest Turnaround</h5>  
        </div> 
      </div>
    </div>
  );
};

export default Hero;
