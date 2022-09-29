import React from "react";
import img3 from "../assets/img4.png";
import { Link } from "react-router-dom";

const RaiseFund = () => {
  return (
    <div className="pt-[5rem]">
      <div className="space-y-8 py-11 px-[174px]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">My Raise Fund</h1>
          <Link
            to="/formfund"
            className="py-2 px-4 font-medium bg-red-700 rounded-lg text-white"
          >
            Make Raise Fund
          </Link>
        </div>
        <div className="flex flex-wrap space-x-3 space-y-3 justify-start">
          <div className="w-[300px]  bg-slate-50 rounded-lg shadow-2xl pb-1">
            <div className="flex flex-col ">
              <img src={img3} alt="" className="w-full" />
              <div className="px-2 space-y-4">
                <h5 className="text-2xl font-semibold ">
                  The Strength of a People. Power of Community
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div
                    class="bg-red-700 h-1.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between ">
                  <span className="text-xl font-bold">Rp 25.000.000</span>
                  <Link
                    to="/viewfund"
                    className="rounded-lg  bg-transparent border-2 border-red-700 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseFund;
