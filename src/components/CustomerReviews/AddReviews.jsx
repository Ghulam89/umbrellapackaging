import React from "react";
import { MdClose } from "react-icons/md";
import Modal from "../common/Modal";
import Input from "../common/Input";
import logo from "../../assets/images/umbrella-logo.svg";
import Button from "../common/Button";
const AddReviews = ({ isModalOpen, setIsModalOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className={" rounded-xl"}
      >
        <div className="">
          <div className=" cursor-pointer pt-2  pr-3 flex justify-end">
            <MdClose onClick={() => setIsModalOpen(false)} size={25} />
          </div>
          <div className="p-5">
            <div className="bg-[#b8b6fa99] rounded-[10px] flex flex-col justify-between items-center p-5">
              <img src={logo} alt="" width={100} height={60} />
              <h2>Share Your Feedback</h2>
              <form action="">
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col items-start">
                    <label htmlFor="">Full Name:</label>
                    <Input
                      type="text"
                      className="rounded-[8px] w-full h-[40px] border-[#333333] border bg-[#fff]"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="">Email</label>
                    <Input
                      type="email"
                      className="rounded-[8px] w-full h-[40px] border-[#333333] border bg-[#fff]"
                    />
                  </div>

                  <div className="rating ">
                    <p className="text-start">Rate Us:</p>
                    <div className="grid grid-col-4">
                      <div className="flex flex-wrap">
                        <div className="flex gap-0">
                          <Input
                            type="radio"
                            className=" border-[#333333] border bg-[#fff]"
                            name={"rating"}
                          />
                          <label htmlFor=""> ★★★★☆</label>
                        </div>
                        <div className="flex gap-0">
                          <Input
                            type="radio"
                            className=" border-[#333333] border bg-[#fff]"
                            name={"rating"}
                          />
                          <label htmlFor="">★★★☆☆</label>
                        </div>
                        <div className="flex gap-0">
                          <Input
                            type="radio"
                            className=" border-[#333333] border bg-[#fff]"
                            name={"rating"}
                          />
                          <label htmlFor="">★★☆☆☆</label>
                        </div>
                        <div className="flex gap-0">
                          <Input
                            type="radio"
                            className=" border-[#333333] border bg-[#fff]"
                            name={"rating"}
                          />
                          <label htmlFor="">★☆☆☆☆</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-start" htmlFor="">
                    Your Review:
                  </label>
                  <textarea
                    rows={5}
                    className="rounded-[8px] w-full  border-[#333333] border bg-[#fff]"
                  ></textarea>
                </div>
                <Button label={'Post'} className=" bg-[#4440E6] text-white mt-3 w-full" />
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddReviews;
