import React from "react";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import CardSlider from "../../components/common/CardSlider";
import CustomPackagingProduced from "../../components/CustomPackagingProduced";
const MainCategoryProducts = () => {
  
  const testimonials = [
    {
      id: 1,
      
      title:
        "Custom Tie Boxes",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/05/lingerie-boxes.webp",
    },
    {
      id: 2,
      
      title:
        "Hosiery Boxes",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Hoseiry-Boxes.webp",
    },
    {
      id: 3,
      
      title:
        "Necktie Packaging",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Magnetic-Closure-Apparel-Boxes.webp",
    },
    {
      id: 4,
      title:
        "I am very happy to use this VPN,",
        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Tie-Boxes.webp",
    },
    {
        id: 4,
        title:
          " I am very happy to use this VPN",
          desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
        image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Hoseiry-Boxes.webp",
      }
  ];


  const testimonials2 = [
    {
      id: 1,
      
      title:
        "I am very happy to use this VPN",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/BRAKE-FLUID-BOXES.webp",
    },
    {
      id: 2,
      
      title:
        "I am very happy to use this VPN",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-parts-shiping-boxes.webp",
    },
    {
      id: 3,
      
      title:
        " I am very happy to use this VPN",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Hoseiry-Boxes.webp",
    },
    {
      id: 4,
      title:
        "I am very happy to use this VPN,",
        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
    },
    {
        id: 4,
        title:
          " I am very happy to use this VPN",
          desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
        image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
      }
  ];


  const testimonials3 = [
    {
      id: 1,
      
      title:
        "Cardboard Chocolate Boxes",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/cardboard-chocolate-boxes.webp",
    },
    {
      id: 2,
      
      title:
        "Chocolate Bomb Boxes",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/chocolate-bomb-boxes.webp",
    },
    {
      id: 3,
      
      title:
        "Small Chocolate Boxes ",

        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Small-Chocolate-Boxes.webp",
    },
    {
      id: 4,
      title:
        "I am very happy to use this VPN,",
        desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
    },
    {
        id: 4,
        title:
          " I am very happy to use this VPN",
          desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
        image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
      }
  ];

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
       <div className=" flex sm:flex-row flex-col gap-3  pt-5 justify-between items-center">
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
       <CardSlider testimonials={testimonials}  />
      </Container>
        </div>



        <div className="bg-[#FBFAF7] mt-6 py-4">
      <Container fullWidth={false} className="">
       <div className=" flex sm:flex-row flex-col gap-3 pt-5 justify-between items-center">
        <div>
            <h2 className="">Automotive Boxes</h2>
        </div>
       <div>
       <Button
               
                label={"View All Apparel Boxes"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white w-80"
              />
       </div>


       </div>
       <CardSlider testimonials={testimonials2}  />
      </Container>
        </div>

        <div className="bg-[#EFF4FE] mt-6 py-4">
      <Container fullWidth={false} className="">
       <div className=" flex sm:flex-row flex-col gap-3 pt-5 justify-between items-center">
        <div>
            <h2 className="">Chocolate Boxes</h2>
        </div>
       <div>
       <Button
               
                label={"View All Apparel Boxes"}
                className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white w-80"
              />
       </div>


       </div>
       <CardSlider testimonials={testimonials3}  />
      </Container>
        </div>


        <div className=' sm:max-w-6xl max-w-[95%]  mx-auto'>
     <div className="flex flex-col  px-4 py-6  rounded-lg lg:flex-row  gap-8 items-center">
     <div className="w-full  lg:w-1/2">
              <img 
                src={'https://umbrellapackaging.com/wp-content/uploads/elementor/thumbs/Box-By-Industry-r0080mpzpv7ymathm3hf4npttbpfsp1hul0nm4fusg.webp'} 
                alt="Custom packaging example" 
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />
            
            </div>
                    
                    <div className='w-full lg:w-1/2 '>
                    
                    <div className=" pt-3">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Why Choose US?
                        </h1>
                       <div className=' overflow-y-auto h-56'>
                       <p className="text-sm leading-6 text-gray-700 mb-6">
                       Choose us for custom boxes because we offer high-quality, personalized packaging solutions that perfectly fit your needs. We provide a wide range of designs, sizes, and materials to match your brand and product. Our team is dedicated to delivering boxes that not only look great but also protect your items during shipping. With affordable pricing, fast turnaround times, and excellent customer service, we make sure you get the best packaging experience. Whether you’re looking for simple or luxury designs, we are here to bring your vision to life.




                        </p>
                       <p className="text-sm leading-6 text-gray-700 mb-6">
                       We understand that great packaging is essential for your products. We specialize in custom packaging solutions that are as unique as your product, offering a variety of options to suit your needs. Furthermore, we believe in providing top-quality materials and designs, ensuring your packaging is both sturdy and visually appealing.




                        </p>
                       </div>
                        
                     
                      </div>

                      <div className=" flex flex-wrap   mt-7 gap-2.5 items-center">
            <Button
            
              label={"Get Instant Quote"}
              className=" bg-[#4440E6] text-white"
            />
            
          </div>
                    </div>
                      
                    
           
                    </div>
     </div>


   <div  className=" mb-8">
   <CustomPackagingProduced/>
   </div>

     
        
    </div>
  );
};

export default MainCategoryProducts;
