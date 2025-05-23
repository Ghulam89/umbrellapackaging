import React, { useState, useEffect } from "react";
import logo from "../../assets/images/umbrella-logo.svg";
import Input from "../common/Input";
import Button from "../common/Button";
import BottomNav from "./BottomNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../utils/BaseUrl";
import GetQuoteModal from "../common/GetQuoteModal";
import AddReviews from "../CustomerReviews/AddReviews";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const OpenMenu = () => {
    setMenu(!menu);
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const response = await axios.get(`${BaseUrl}/products/search?name=${query}`);
        setSearchResults(response.data.data);
        setShowResults(true);
      } catch (error) {
        console.error("Error searching products:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".search-container")) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [IsModalOpen,setIsModalOpen] = useState(false)
  const [ReviewModalOpen,setReviewModalOpen] = useState(false)

  return (
    <div className="bg-[#F7F7F7] sm:pb-2.5 pb-0">
      <div className="sm:max-w-7xl max-w-[95%] mx-auto">
        <div className="flex space-x-5 w-full justify-between h-20 items-center">
          <Link to={`/`}>
            <img src={logo} alt="" className="sm:w-[135px] w-[300px]" />
          </Link>
          <div className="w-xl relative search-container">
            <Input
              placeholder={"Search For Products"}
              className={"rounded-full p-2.5 w-full border-2 bg-white border-gray-300"}
              value={searchQuery}
              onChange={handleSearch}
            />
            {showResults && searchResults.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product._id}
                    to={`/product/${product._id}`}
                    onClick={handleResultClick}
                  >
                    <div className="p-3  cursor-pointer border-b flex overscroll-x-auto border-gray-200 last:border-b-0">

                      <Link to={`/product/${product?._id}`}>
                             <div className=" bg-[#F7F7F7] p-3 rounded-xl">
                               <div className="  sm:h-32 h-32">
                               <img src={`${BaseUrl}/${product?.images?.[0]}`} alt="" className=" w-full h-full  rounded-xl" />
                               </div>
                               <h6 className="  text-center font-semibold text-[#333]  pt-2 ">{product?.name}</h6>
                             </div>
                           </Link>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {showResults && searchResults.length === 0 && searchQuery.length > 2 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-3">
                No products found
              </div>
            )}
          </div>
          <div className="sm:block hidden">
            <div className="flex items-center gap-2.5">
              <div>
                <Button
                 onClick={()=>setReviewModalOpen(true)}
                  className="text-[#4440E6] bg-white border border-[#4440E6]"
                  label={"Review"}
                />
              </div>
              <div>
                <Button 
                   onClick={()=>setIsModalOpen(true)}
                  className="bg-[#4440E6] text-white"
                  label={"Get Quote"}
                />
              </div>
            </div>
          </div>

          <div className="block sm:hidden cursor-pointer bg-[#B8B6FA99] text-[#4440E6] px-1.5 py-1.5 rounded-sm">
            {menu ? (
              <svg
                onClick={OpenMenu}
                width={25}
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
              </svg>
            ) : (
              <svg
                onClick={OpenMenu}
                width={25}
                aria-hidden="true"
                role="presentation"
                className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
              </svg>
            )}
          </div>
        </div>

        <BottomNav Menu={menu} OpenMenu={OpenMenu} />
      </div>

      <GetQuoteModal  setIsModalOpen={setIsModalOpen} isModalOpen={IsModalOpen} />
        <AddReviews isModalOpen={ReviewModalOpen} setIsModalOpen={setReviewModalOpen} />
    </div>
  );
};

export default Navbar;