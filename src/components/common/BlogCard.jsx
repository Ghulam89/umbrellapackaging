import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const BlogCard = ({data}) => {
  return (
    <>
    <div className=" ">
    <Link to={data?.id} className="">
        <div className="">
          <div className="  w-full sm:h-32 h-32">
          <img src={data?.image} alt="" className=" w-full h-full object-center object-cover" />
          </div>
          <div className=" h-64 shadow border p-2 border-t-0  border-gray-100">
          <h3 className="  font-bold text-black   text-2xl  whitespace-pre-wrap py-3">{data?.title?.slice(0,70)}</h3>
          <p className="  text-gray-400 whitespace-pre-line">{data?.desc?.slice(0,120)}</p>
          <Button className=" hover:bg-[#4440E6]  text-[#4440E6] uppercase hover:text-white mx-auto  mt-3" label={'Continue Reading'} />
          </div>
        </div>
      </Link>
    </div>
      
    </>
  );
};

export default BlogCard;
