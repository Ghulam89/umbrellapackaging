import React, { useEffect, useState } from "react";
import { FaAngleDown, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../utils/BaseUrl";
const BottomNav = ({ Menu, OpenMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([])
  const fetchCategories = async () => {
    const response = await axios.get(`${BaseUrl}/brands/getAll`)
    console.log(response);
    setAllCategories(response?.data?.data)
  }

  useEffect(() => {
    fetchCategories();
  }, [])



  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
    setSelectedCategory(category.midcategories
    );
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
    setSelectedCategory(null);
  };

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <div className="sm:block hidden py-2">
        <ul className="flex justify-between items-center max-w-8xl mx-auto px-4">
          <li>
            <Link to="/" className="transition-colors">
              HOME
            </Link>
          </li>
          {allCategories.map((category, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoryHover(category)}
              onMouseLeave={handleCategoryLeave}
              className="relative group"
            >
              <Link
                onClick={handleCategoryLeave}
                to={`/${category?.slug}/`}
                state={{ id: category?._id }}
                className="flex items-center gap-1  uppercase py-2.5 text-sm font-normal transition-colors"
              >
                {category.name}
                {category.midcategories?.length > 0 && (
                  <FaAngleDown className="ml-1" size={15} />
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/portfolio" className="hover:text-orange-500 uppercase transition-colors">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-orange-500 uppercase transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-orange-500 uppercase transition-colors">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-orange-500 uppercase transition-colors">
              Contact us
            </Link>
          </li>
        </ul>

        {/* Dropdown Menu */}
        {hoveredCategory && selectedCategory && (
          <div
            className="absolute top-12 pt-1.5 left-0 w-full z-50"
            onMouseEnter={() => handleCategoryHover(hoveredCategory)}
            onMouseLeave={handleCategoryLeave}
          >
            <div className="bg-[#F7F7F7] mt-5">
              <div className="max-w-8xl mx-auto px-4 py-3 grid grid-cols-4 gap-4">
                {selectedCategory.map((submenu, index) => (
                  <Link
                    key={submenu._id}
                    onClick={handleCategoryLeave}
                    to={`/${submenu.slug}/`}
                    state={{ slug: submenu._id }}
                    className=" text-gray-700 flex font-semibold  capitalize gap-1 items-center transition-colors"
                  >
                    <img src={`${BaseUrl}/${submenu?.icon}`} alt="" className="w-8" />{" "}
                    {submenu.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${Menu ? "block" : "hidden"} bg-[#F7F7F7]`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link to="/" className="transition-colors" onClick={OpenMenu}>
              HOME
            </Link>
          </li>
          {allCategories?.map((category, index) => (
            <li key={index}>
              <Link
                to={`/main-category/${category?._id}`}
                className="flex items-center gap-1 py-2.5 text-sm font-normal transition-colors"
                onClick={OpenMenu}
              >
                {category.category}
                {category.menu?.length > 0 && (
                  <FaAngleDown className="ml-1" size={15} />
                )}
              </Link>
              {category.midcategories?.length > 0 && (
                <ul className="pl-4">
                  {category.midcategories.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={`/category/${submenu._id}`}
                        className="text-sm text-gray-700 flex gap-0.5 items-center transition-colors"
                        onClick={OpenMenu}
                      >
                        <img src={`${BaseUrl}/${submenu?.icon}`} alt="" className="w-7" />
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="/portfolio" className="hover:text-orange-500 transition-colors" onClick={OpenMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-500 transition-colors" onClick={OpenMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-orange-500 transition-colors" onClick={OpenMenu}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-orange-500 transition-colors" onClick={OpenMenu}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;