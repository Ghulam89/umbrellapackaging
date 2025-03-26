import React from "react";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
const MainCategoryProducts = () => {
  return (
    <div>
      <Container>
        <div className=" bg-[#F7EDED] flex sm:flex-row  items-center flex-col  my-3.5 p-4 rounded-md w-full">
          <div className=" sm:w-7/12 w-full">
            <h1 className=" font-semibold">Umbrella Custom Packaging</h1>
            <h2
              style={{ color: "#4440E6" }}
              className=" pt-1.5 font-semibold text-[#4440E6]"
            >
              Box By Industry
            </h2>
            <div className=" flex  mt-7 gap-2 flex-wrap items-center">
              <Button
                label={"Apparel Boxes"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white"
              />
              <Button
                label={"Food Boxes"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white "
              />
              <Button
                label={"CBD Boxes"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white "
              />
            </div>
            <div className="mt-7">
              <Button
                
                label={"Our Catalogue"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white w-80"
              />
            </div>
          </div>
          <div className=" sm:w-5/12 w-full">
            <img
              src={
                "https://umbrellapackaging.com/wp-content/uploads/elementor/thumbs/boxes-by-metarial-r00ae8uu1eljae0z4xpmn4at0utc8wrc5aamg1yako.webp"
              }
              className=" w-full"
              alt=""
            />
          </div>
        </div>

        <div className=" bg-[#F7F7F7] rounded-xl  py-8 px-5  my-8">
          <h1 className=" text-center">
            Discover Our Custom Packaging Variety
          </h1>

          <p className=" text-center pt-5">
            Check out all the different types of boxes we have at Umbrella
            Custom Packaging! We have special categories for boxes that you can
            customize just the way you like. You get to choose whether it’s the
            size, the material, or how it looks. So, have a look and pick the
            perfect box for you!
          </p>
        </div>


      </Container>
      <div className="bg-[#EFF4FE] py-4">
      <Container fullWidth={false} className="">
       <div className=" flex sm:flex-row flex-col gap-3 justify-between items-center">
        <div>
            <h2 className="">Apparel and Fashion Boxes</h2>
        </div>
       <div>
       <Button
               
                label={"View All Apparel Boxes"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white w-80"
              />
       </div>


       </div>
       
      </Container>
        </div> 
      

    </div>
  );
};

export default MainCategoryProducts;
