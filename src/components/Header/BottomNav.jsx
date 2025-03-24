import React, { useState } from "react";
import { FaAngleDown, FaBed } from "react-icons/fa";
import { MdOutdoorGrill } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/BOXES BY INDUSTRY/Automotive-Boxes.webp";

const BottomNav = ({ Menu, OpenMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      category: "Box by industry",
      icon: <FaBed />,
      menu: [
        { title: "Automotive Boxes", icon: icon1 },
        { title: "Apparel Boxes", icon: icon1 },
        { title: "Beverage Boxes", icon: icon1 },
        { title: "Bakery Boxes", icon: icon1 },
        { title: "Candy Boxes", icon: icon1 },
        { title: "Cosmetic Boxes", icon: icon1 },
        { title: "Coffee Boxes", icon: icon1 },
        { title: "CBD Boxes", icon: icon1 },
        { title: "Dispenser boxes", icon: icon1 },
        { title: "Face mask boxes", icon: icon1 },
        { title: "Fries Boxes​", icon: icon1 },
      ],
    },
    {
      category: "Shapes & styles",
      icon: <MdOutdoorGrill />,
      menu: [{ title: "Outdoor Furniture" }],
    },
    {
      category: "Materials",
      icon: <TbToolsKitchen3 />,
      menu: [{ title: "Kitchenware" }],
    },
    {
      category: "Sticker labels & others",
      icon: <TbToolsKitchen3 />,
      menu: [{ title: "Kitchenware" }],
    },
  ];

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
    setSelectedCategory(category.menu);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
    setSelectedCategory(null);
  };

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <div className="sm:block hidden py-2">
        <ul className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <li>
            <Link to="/" className="transition-colors">
              HOME
            </Link>
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoryHover(category)}
              onMouseLeave={handleCategoryLeave}
              className="relative group"
            >
              <Link
                to="#"
                className="flex items-center gap-1  uppercase py-2.5 text-sm font-normal transition-colors"
              >
                {category.category}
                {category.menu?.length > 0 && (
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
            <Link to="/blog" className="hover:text-orange-500 uppercase transition-colors">
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
            className="absolute top-12 pt-2.5 left-0 w-full z-50"
            onMouseEnter={() => handleCategoryHover(hoveredCategory)}
            onMouseLeave={handleCategoryLeave}
          >
            <div className="bg-[#F7F7F7] mt-5">
              <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-4 gap-4">
                {selectedCategory.map((submenu, index) => (
                  <Link
                    key={index}
                    to={`/sub-category/${submenu.title}`}
                    className="text-sm text-gray-700 flex uppercase gap-0.5 items-center transition-colors"
                  >
                    <img src={submenu?.icon} alt="" className="w-7" />{" "}
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
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to="#"
                className="flex items-center gap-1 py-2.5 text-sm font-normal transition-colors"
                onClick={OpenMenu}
              >
                {category.category}
                {category.menu?.length > 0 && (
                  <FaAngleDown className="ml-1" size={15} />
                )}
              </Link>
              {category.menu?.length > 0 && (
                <ul className="pl-4">
                  {category.menu.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={`/sub-category/${submenu.title}`}
                        className="text-sm text-gray-700 flex gap-0.5 items-center transition-colors"
                        onClick={OpenMenu}
                      >
                        <img src={submenu?.icon} alt="" className="w-7" />{" "}
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