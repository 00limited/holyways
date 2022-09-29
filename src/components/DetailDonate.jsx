import React, { useState } from "react";
import img1 from "../assets/img4.png";
import ModalDonate from "../modals/transaction/ModalPayment";

const DetailDonate = () => {
  const [openModalDonate, setOpenModalDonate] = useState(false);

  return (
    <div>
      <div className="flex pt-[6rem]   px-[200px]">
        <div className="w-[50rem] grid md:grid-cols-2  space-x-[63px] py-20">
          <img src={img1} alt="" className="w-full " />
          <div className=" w-full space-y-4">
            <h1 className="text-4xl font-bold text-black md:text-3xl">
              The Strength of a People. Power of Community
            </h1>
            <div className="space-y-1">
              <div className="flex justify-between mb-1">
                <span className="text-xl  font-bold text-red-700  ">
                  Rp 25.000.000
                </span>
                <span className="text-xl font-medium text-black">
                  gathered from
                </span>
                <span className="text-xl font-bold  text-black">
                  Rp 200.000.000
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-red-700 h-2.5 rounded-full"
                  style={{ width: " 45%" }}
                ></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium  text-black">
                  200 Donation
                </span>
                <span className="text-sm font-medium  text-black">
                  150 More Day
                </span>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <button
              onClick={() => {
                setOpenModalDonate(true);
              }}
              className="font-bold  py-3 px-6 sm:w-[100%] rounded-lg "
            >
              Donate{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-0  flex-col px-[200px] space-y-4 pb-11">
        <h1 className="text-3xl font-bold">List Donation (200)</h1>
        <div className="flex flex-col space-y-2 ">
          <div className="bg-gray-600 py-5 px-5">
            <p>Andi</p>
            <p>Saturday, 12 April 2021</p>
            <p>Total : Rp 45.000</p>
          </div>
          <div className="bg-gray-600 py-5 px-5">
            <p>Andi</p>
            <p>Saturday, 12 April 2021</p>
            <p>Total : Rp 45.000</p>
          </div>
          <div className="bg-gray-600 py-5 px-5">
            <p>Andi</p>
            <p>Saturday, 12 April 2021</p>
            <p>Total : Rp 45.000</p>
          </div>
        </div>
      </div>
      <ModalDonate
        setOpenModalDonate={setOpenModalDonate}
        showModalDonate={openModalDonate}
      />
    </div>
  );
};

export default DetailDonate;
