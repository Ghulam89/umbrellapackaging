import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import CardSlider from "../../components/common/CardSlider";
import CustomPackagingProduced from "../../components/CustomPackagingProduced";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify';
import { BaseUrl } from "../../utils/BaseUrl";
const MainCategoryProducts = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const [categoryData, setCategoryData] = useState({})

  console.log(categoryData);

  const [categoryProduct, setCategoryProduct] = useState([]);
  const fetchCategory = async () => {
    const response = await axios.get(`${BaseUrl}/brands/get/${id}`)
    console.log(response);

    setCategoryData(response?.data?.data)

  }

  

  const fetchCategoryProduct = async () => {
    const response = await axios.get(`${BaseUrl}/products/categoryProducts/${id}/products-by-category`)
    console.log(response);

    setCategoryProduct(response?.data?.data?.categories)

  }


  

  useEffect(() => {
    if (id) {
      fetchCategory();
      fetchCategoryProduct();
    }


  }, [id])

  useEffect(() => {
  if (categoryData?.metaTitle) {
    document.title = `${categoryData.metaTitle}`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = categoryData.metaDescription 
      ? `${categoryData.metaDescription}`
      : "";
  }

      let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = categoryData.keywords 
      ? `${categoryData.keywords}`
      : "";

      let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = "robots";
      document.head.appendChild(robots);
    }
    metaRobots.content = categoryData.robots 
      ? `noindex, nofollow`
      : "noindex, nofollow";

     let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = categoryData.canonicalUrl 
      ? `${categoryData.canonicalUrl}`
      : window.location.href.split('?')[0]
  
  

}, [categoryData]);

  return (
    <div>
        
        
      <Container>
        <div style={{ backgroundColor: categoryData?.bgColor }} className="flex  sm:max-w-7xl max-w-[95%]  mx-auto sm:flex-row  items-center flex-col  my-3.5 p-4 rounded-md w-full">
          <div className=" sm:w-7/12 w-full">
            <h1 className=" font-semibold">Umbrella Custom Packaging</h1>
            <h2
              style={{ color: "#4440E6" }}
              className=" pt-1.5 font-semibold text-[#4440E6]"
            >
              {categoryData?.name}
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
              <Link to={'/shop'}>
                <Button

                  label={"Our Catalogue"}
                  className=" bg-white border border-[#4440E6] text-[#4440E6] hover:bg-[#4440E6]  hover:text-white w-80"
                />
              </Link>
            </div>
          </div>
          <div className=" sm:w-5/12 w-full">
            <img
              src={
                `${BaseUrl}/${categoryData?.bannerImage}`
              }
              className=" w-full"
              alt={categoryData?.bannerAltText}
            />
          </div>
        </div>

        <div className=" bg-[#F7F7F7] rounded-xl  sm:max-w-7xl max-w-[95%]  mx-auto py-8 px-5  my-8">
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
      {categoryProduct?.map((item, index) => {
        return (
          <div className="bg-[#EFF4FE] py-4">
            <Container fullWidth={false} className=" sm:max-w-7xl max-w-[95%]  mx-auto">
              <div className=" flex sm:flex-row flex-col gap-3  pt-5 justify-between items-center">
                <div>
                  <h2 className="">{item?.categoryName}</h2>
                </div>
                <div>
                  <Link to={`#`} >
                    <Button

                      label={`View All ${item?.categoryName}`}
                      className=" bg-white border border-[#4440E6]  text-[#4440E6] hover:bg-[#4440E6]  hover:text-white w-80"
                    />
                  </Link>

                </div>


              </div>
              <CardSlider item={item?.products} />
            </Container>
          </div>
        )
      })}

      <div className=' sm:max-w-7xl max-w-[95%]  mx-auto'>
        <div className="flex flex-col  px-4 py-6  rounded-lg lg:flex-row  gap-8 items-center">
          <div className="w-full  lg:w-1/2">
            <img
              src={`${BaseUrl}/${categoryData?.image}`}
              alt={categoryData?.imageAltText}
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
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData.content) }} className="text-sm leading-6  mb-6">




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


      <div className=" mb-8">
        <CustomPackagingProduced />
      </div>

    </div>
  );
};

export default MainCategoryProducts;
