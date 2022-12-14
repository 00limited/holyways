import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-stone-200 flex flex-col justify-between pt-9">
      <div className="w-full h-[100rem] bg-red-700 flex flex-col justify-between mt-11 pb-11">
        <div className="grid md:grid-cols-2 max-w-[1240px] ">
          <div className="flex flex-col mt-10  justify-center md:items-start w-full px-20 py-8">
            <p className="text-4xl font-bold text-white md:text-3xl">
              While you are still standing, try to reach out to the people who
              are falling.
            </p>
            <p className="py-3 text-1xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="py-3 px-6 sm:w-[60%] ">Donate Now</button>
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="absolute w-[28rem]  pl-11  top-[10rem] right-0 "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[400rem] bg-stone-200 flex flex-col justify-between">
        <div className="pl-[450px] pr-[200px] md:grid-cols-2 max-w-[1240px] ">
          <div className="w-full flex justify-end mr-5">
            <img
              src={img2}
              alt=""
              className="absolute w-[25rem] pr-11 top-[30rem] left-0 "
            />
          </div>
          <div className="flex flex-col mt-[8rem] justify-center md:items-start w-full pr-20 py-8">
            <p className="text-4xl font-bold text-black md:text-3xl">
              Your donation is very helpful for people affected by forest fires
              in Kalimantan.
            </p>
            <div className="grid md:grid-cols-2 pt-4 ">
              <p className="pr-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400rem] bg-stone-200 pb-11	">
        <div className="md:grid-cols-2 max-w-[1240px] pt-4">
          <div className="flex justify-center py-4">
            <p className="text-2xl font-bold text-red-700">Donate Now</p>
          </div>
          <div className="flex flex-wrap space-x-3 space-y-3 justify-center">
            <div className="w-[330px]  bg-slate-50 rounded-lg shadow-2xl pb-1">
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
                      to="/detailDonate"
                      className="rounded-lg  bg-transparent px-5 py-2.5 text-center text-sm font-medium  text-black hover:bg-red-700 hover:text-white focus:outline-none focus:ring-1  "
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
    </div>
  );
};

export default Banner;
