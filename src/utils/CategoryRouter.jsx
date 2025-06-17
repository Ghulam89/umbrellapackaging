import { useLocation, useParams } from "react-router-dom";
import CategoryProducts from "../screens/categoryProducts";
import MainCategoryProducts from "../screens/MainCategoryProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import ProductDetails from "../screens/productDetails";

const CategoryRouter = () => {
  const { slugs } = useParams();
  const location = useLocation();
  const { id,slug, productSlug} = location.state || {};
  const [componentToRender, setComponentToRender] = useState(null);
  const [error, setError] = useState(null);
  
  const cleanSId = id?.endsWith('/') ? id.slice(0, -1) : id;
  const cleanSlug = slug?.endsWith('/') ? slug.slice(0, -1) : slug;
  const cleanProductSlug = productSlug?.endsWith('/') ? productSlug.slice(0, -1) : productSlug;

  useEffect(() => {
    const determineComponent = async () => {
      try {
        const productSlugToCheck = cleanProductSlug || cleanSlug;
        if (productSlugToCheck) {
          try {
            const productRes = await axios.get(`${BaseUrl}/products/get/${productSlugToCheck}`);
            if (productRes.data?.data) {
              setComponentToRender('product');
              return;
            }
          } catch (productError) {
            console.log('Not a product, checking categories');
          }
        }

        const mainCategoryIdToCheck = cleanSId || id;
        if (mainCategoryIdToCheck) {
          try {
            const mainCatRes = await axios.get(`${BaseUrl}/brands/get/${mainCategoryIdToCheck}`);
            if (mainCatRes.data?.data) {
              setComponentToRender('mainCategory');
              return;
            }
          } catch (mainCatError) {
            // Not a main category, continue checking
            console.log('Not a main category, checking sub-category');
          }
        }

        // Priority 3: Check if it's a sub-category
        const subCategorySlugToCheck = cleanSlug || slug;
        if (subCategorySlugToCheck) {
          try {
            const subCatRes = await axios.get(`${BaseUrl}/category/get/${subCategorySlugToCheck}`);
            if (subCatRes.data?.data) {
              setComponentToRender('category');
              return;
            }
          } catch (subCatError) {
            // Not a sub-category
            console.log('Not a sub-category');
          }
        }

        // If none of the above matched
        setError('Category or product not found');
      } catch (error) {
        console.error('Error determining component:', error);
        setError(error.message || 'An error occurred while loading the page');
      }
    };

    determineComponent();
  }, [slug, id, productSlug, cleanSlug, cleanSId, cleanProductSlug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  switch (componentToRender) {
    case 'mainCategory':
      return <MainCategoryProducts key={cleanSId || id} id={cleanSId || id} />;
    case 'category':
      return <CategoryProducts key={cleanSlug || slug} id={cleanSlug || slug} />;
    case 'product':
      return <ProductDetails key={cleanProductSlug || cleanSlug} id={cleanProductSlug || cleanSlug} />;
    default:
      return <div>Loading...</div>;
  }
};

export default CategoryRouter;