import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({data}) => {
  return (
    <>
      <Link to={`/product/${data?.title}`}>
        <div className="">
          <div className="  sm:h-64 h-44">
          <img src={data?.image} alt="" className=" w-full h-full  rounded-xl" />
          </div>
          <h5 className="  text-center font-semibold text-[#333] text-base   py-5">{data?.title}</h5>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
