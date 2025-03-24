import React from "react";
import Button from "../common/Button";

const InspirationPackaging = () => {
  return (
    <div className="sm:max-w-7xl bg-[#f9fafb] p-7 rounded-2xl max-w-[95%] mx-auto">
      <div className="pb-7 text-center">
        <h2 className="">Inspiration for Creative Packaging</h2>
        <Button label={'Contact Our Design Department'} className="bg-[#4440E6] text-white mx-auto mt-2" />
      </div>
      <div className="grid gap-4 pb-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {[
          "09.webp",
          "08.webp",
          "07.webp",
          "06.webp",
          "03.webp",
          "01.webp",
          "04.webp",
          "05.webp",
          "02.webp",
        ].map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={`https://umbrellapackaging.com/wp-content/uploads/2024/01/${img}`}
              className="w-full h-full object-cover rounded-2xl"
              alt={`Packaging Inspiration ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationPackaging;
