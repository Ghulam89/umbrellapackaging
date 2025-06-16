import { useLocation, useParams } from "react-router-dom";
import CategoryProducts from "../screens/categoryProducts";
import MainCategoryProducts from "../screens/MainCategoryProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import ProductDetails from "../screens/productDetails";

const CategoryRouter = () => {
  const { slug } = useParams();
  const location = useLocation();
  const { id, productSlug } = location.state || {};
  const [componentToRender, setComponentToRender] = useState(null);
  const [error, setError] = useState(null);

  // Clean the slug by removing trailing slash if present
  const cleanSlug = slug?.endsWith('/') ? slug.slice(0, -1) : slug;

  useEffect(() => {
    const determineComponent = async () => {
      try {
        // First try to fetch as product
        if (cleanSlug) {
          try {
            const productRes = await axios.get(`${BaseUrl}/products/get/${cleanSlug}`);
            if (productRes.data.data) {
              setComponentToRender('product');
              return;
            }
          } catch (productError) {
            console.log('Not a product, checking categories');
          }
        }

        // Then try as main category (brand)
        if (cleanSlug) {
          try {
            const mainCatRes = await axios.get(`${BaseUrl}/brands/getBySlug/${cleanSlug}`);
            if (mainCatRes.data.data) {
              setComponentToRender('mainCategory');
              return;
            }
          } catch (mainCatError) {
            console.log('Not a main category, checking sub-category');
          }
        }

        // Then try as sub-category
        if (cleanSlug) {
          try {
            const subCatRes = await axios.get(`${BaseUrl}/category/getBySlug/${cleanSlug}`);
            if (subCatRes.data.data) {
              setComponentToRender('category');
              return;
            }
          } catch (subCatError) {
            console.error('Sub-category fetch error:', subCatError);
          }
        }

        // Fallback to state-based routing if slug-based routing fails
        if (productSlug) {
          try {
            const productRes = await axios.get(`${BaseUrl}/products/get/${productSlug}`);
            if (productRes.data.data) {
              setComponentToRender('product');
              return;
            }
          } catch (productError) {
            console.error('Product fetch error:', productError);
            setError('Product not found');
            return;
          }
        }

        if (id) {
          try {
            const mainCatRes = await axios.get(`${BaseUrl}/brands/get/${id}`);
            if (mainCatRes.data.data) {
              setComponentToRender('mainCategory');
              return;
            }
          } catch (mainCatError) {
            console.log('Not a main category, checking sub-category');
          }
        }

        if (slug) {
          try {
            const subCatRes = await axios.get(`${BaseUrl}/category/get/${slug}`);
            if (subCatRes.data.data) {
              setComponentToRender('category');
              return;
            }
          } catch (subCatError) {
            console.error('Sub-category fetch error:', subCatError);
          }
        }

        setError('Category or product not found');
      } catch (error) {
        console.error('Error determining component:', error);
        setError(error.message);
      }
    };

    determineComponent();
  }, [cleanSlug, id, slug, productSlug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  switch (componentToRender) {
    case 'mainCategory':
      return <MainCategoryProducts key={id || cleanSlug} id={id || cleanSlug} />;
    case 'category':
      return <CategoryProducts key={slug || cleanSlug} id={slug || cleanSlug} />;
    case 'product':
      return <ProductDetails key={productSlug || cleanSlug} id={productSlug || cleanSlug} />;
    default:
      return <div>Loading...</div>;
  }
};

export default CategoryRouter;