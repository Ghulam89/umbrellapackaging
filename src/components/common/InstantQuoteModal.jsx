import React from "react";
import { MdClose } from "react-icons/md";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Button from "../common/Button";

const InstantQuoteModal = ({ isModalOpen, setIsModalOpen, closeModal }) => {
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} className={"rounded-xl"}>
        
        <div className="p-5">
        <div className="cursor-pointer flex w-full justify-end">
          <MdClose onClick={() => setIsModalOpen(false)} size={25} />
        </div>
          <div className="bg-[#F7F7F7] rounded-[10px] flex flex-col items-center p-6">
         
           
            <h2 className="text-xl font-semibold  mb-4">Get an Instant Quote</h2>
            
            <form className="w-full">
              
              <div className=" flex flex-col w-full gap-3 justify-between">
                <div className=" w-full">
                 
                  <Input
                   label={'Name'}
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
                <div className=" w-full ">
                 
                  <Input
                    label={'Phone Number'}
                    type="email"
                    placeholder={'Phone Number'}
                   
                    className="rounded-[8px] w-full  border-[#333333] border bg-[#fff] px-3"
                  />
                </div>
                <div className="flex  flex-col">
                <label className="pb-1.5 flex  text-[#333333] text-sm font-medium   text-textColor" htmlFor="review">
                   Message
                </label>
                <textarea
                  id="review"
                  rows={3}
                  placeholder="Please share specific packaging details such as dimensions, materials, weight limits, and design preferences. We'll promptly provide you with a quote"
                  className="rounded-[8px] w-full border-[#333333] border bg-[#fff] p-3"
                ></textarea>
              </div>

              <div className=" w-full ">
                 
                 <Input
                   label={'Upload Your Design, Max Size 5MB Allowed File Types: png, pdf, jpg, jpeg, webp'}
                   type="file"
                  
                   className="rounded-[8px] w-full  border-[#333333] border bg-[#fff] px-3"
                 />
               </div>
              

              <div>
              <Button 
                label="Send" 
                className="bg-[#4440E6] text-white  w-full py-2 rounded-lg font-medium" 
              />
              </div>
              </div>

             
             
             
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InstantQuoteModal;