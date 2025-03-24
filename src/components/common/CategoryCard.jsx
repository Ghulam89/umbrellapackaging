import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
  return (
    <>
      <Link to={data?.id}>
        <div className="">
          <div className="  sm:h-64 h-44">
          <img src={data?.image} alt="" className=" w-full h-full  rounded-xl" />
          </div>
          <h6 className="  font-semibold text-[#333333]   py-5">{data?.title}</h6>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
