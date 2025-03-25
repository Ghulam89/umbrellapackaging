import React, { useState } from "react";
import logo from "../../assets/images/umbrella-logo.svg";
import Input from "../common/Input";
import Button from "../common/Button";
import BottomNav from "./BottomNav";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const OpenMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-[#F7F7F7] sm:pb-2.5 pb-0">
      <div className="sm:max-w-6xl max-w-[95%] mx-auto">
        <div className="flex space-x-5 w-full justify-between h-20 items-center">
          <div>
            <img src={logo} alt="" className="sm:w-[135px] w-[300px]" />
          </div>
          <div className="w-xl">
            <Input
              placeholder={"Search For Products"}
              className={"rounded-full p-2.5 w-full border-2 bg-white border-gray-300"}
            />
          </div>
          <div className="sm:block hidden">
            <div className="flex items-center gap-2.5">
              <div>
                <Button
                  className="text-[#4440E6] bg-white border border-[#4440E6]"
                  label={"Review"}
                />
              </div>
              <div>
                <Button
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
    </div>
  );
};

export default Navbar;