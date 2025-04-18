import React from "react";
const ProducedCard = ({data}) => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className=" grid sm:grid-cols-3 grid-cols-1 gap-4 items-center">
        {data.map((item) => (
          <div className="col-span-1 border rounded-lg p-4  border-black  hover:-translate-y-3 transform transition duration-300 ease-in-out">
            <div className=" text-center">
              <h5 className=" font-semibold ">{item?.title}</h5>
              <p className=" font-extralight text-gray-700">{item?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProducedCard;
