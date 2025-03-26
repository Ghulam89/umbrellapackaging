import React from "react";
import { MdClose } from "react-icons/md";
import Modal from "../common/Modal";
import Input from "../common/Input";
import logo from "../../assets/images/umbrella-logo.svg";
import Button from "../common/Button";

const AddReviews = ({ isModalOpen, setIsModalOpen, closeModal }) => {
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} className={"rounded-xl"}>
        
        <div className="p-5">
          
          <div className="bg-[#b8b6fa99] rounded-[10px] flex flex-col items-center p-6">
          <div className="cursor-pointer flex w-full justify-end">
          <MdClose onClick={() => setIsModalOpen(false)} size={25} />
        </div>
            <img src={logo} alt="" width={100} height={60} />
            <h2 className="text-xl font-semibold  mb-4">Share Your Feedback</h2>
            
            <form className="w-full">
              
              <div className=" flex w-full gap-5 justify-between">
                <div className=" w-full">
                 
                  <Input
                   label={'Full Name'}
                    type="text"
                    placeholder={'Name'}
                    className="rounded-[8px] w-full h-[40px]  border-[#333333] border bg-[#fff] px-3"
                  />
                </div>
                <div className=" w-full ">
                 
                  <Input
                    label={'Email'}
                    type="email"
                    placeholder={'Email'}
                   
                    className="rounded-[8px] w-full  border-[#333333] border bg-[#fff] px-3"
                  />
                </div>
              </div>

              <div className="mt-3">
                <p className="pb-1.5 flex  text-[#333333] text-sm font-medium   text-textColor">Rate Us:</p>
                <div className="flex justify-between">
                  {["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"].map((stars, index) => (
                    <div key={index} className="flex items-center">
                      <Input
                        type="radio"
                        className="border-[#333333] border bg-[#fff] mr-1"
                        name="rating"
                        id={`rating-${index}`}
                      />
                      <label htmlFor={`rating-${index}`}>{stars}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="pb-1.5 flex  text-[#333333] text-sm font-medium   text-textColor" htmlFor="review">
                  Your Review:
                </label>
                <textarea
                  id="review"
                  rows={3}
                  placeholder="Write a Review"
                  className="rounded-[8px] w-full border-[#333333] border bg-[#fff] p-3"
                ></textarea>
              </div>
              
              <Button 
                label="Post" 
                className="bg-[#4440E6] text-white mt-3 w-full py-2 rounded-lg font-medium" 
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddReviews;