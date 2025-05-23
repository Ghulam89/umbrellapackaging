import React from "react";
import CategoryCard from "../common/CategoryCard";

const CustomPackaging = () => {
  const Data = [
    {
      id: 1,
      title: "Apparel and Fashion Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/09/Custom-Apparel-And-Fashion-Boxes-250x179.webp",
    },
    {
      id: 2,
      title: "Bakery boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/Custom-Bakery-Boxes-2-250x179.webp",
    },
    {
      id: 3,
      title: "Candle Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/Candle-Boxes-250x179.webp",
    },
    {
      id: 4,
      title: "Cardboard Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/05/Cardboard-Boxes-250x179.webp",
    },
    {
      id: 5,
      title: "CBD Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/cbd-boxes--250x179.webp",
    },
    {
      id: 6,
      title: " Chocolate Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/cbd-boxes--250x179.webp",
    },
  ];


  

  return (
    <>
      <div className="   sm:max-w-7xl max-w-[95%] mx-auto">
        <div className=" bg-[#F7F7F7] text-center  my-7 p-4 rounded-md w-full">
          <h1 className=" text-[#333333] font-semibold">
            Discover Our Custom Packaging Variety
          </h1>
          <p className="  pt-3 text-sm">
            Check out all the different types of boxes we have at Umbrella
            Custom Packaging! We have special categories for boxes that you can
            customize just the way you like. You get to choose whether it’s the
            size, the material, or how it looks. So, have a look and pick the
            perfect box for you!
          </p>

          <div className=" grid sm:grid-cols-3 grid-cols-2  space-x-4 space-y-3 mt-3.5 justify-between">
            
              {Data?.map((item, index) => {
                return  <div>
                  <CategoryCard data={item} />
                </div>
              })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPackaging;
