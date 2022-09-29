import React from "react";
import img1 from "../assets/img6.png";

const Profile = () => {
  return (
    <div className="pt-[5rem]">
      <div className="grid grid-cols-2 px-[200px] py-[50px]">
        <div>
          <h1 className="text-3xl font-semibold pb-5">My Profile</h1>
          <div className="flex justify-start space-x-3">
            <img src={img1} alt="" />
            <div className="flex flex-col justify-between">
              <div>
                <label
                  for="fullName"
                  className="block  text-base font-semibold text-red-700"
                >
                  Full Name
                </label>
                <p>Andi</p>
              </div>
              <div>
                <label
                  for="email"
                  className="block  text-base font-semibold text-red-700"
                >
                  Email
                </label>
                <p>fandikusuma@gmail.com </p>
              </div>
              <div>
                <label
                  for="phone"
                  className="block  text-base font-semibold text-red-700"
                >
                  Phone
                </label>
                <p>12947321234</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold pb-5">History Donation</h1>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-500 py-2 px-2 rounded-md">
              <div>
                <h3 className="text-xl font-medium">
                  The Strength of a People. Power of Community
                </h3>
                <p className="text-base">
                  <span className="font-normal">Saturday</span> , 12 April 2021
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm">Total : Rp 45.000</p>
                <div className="bg-lime-500 py-1 px-2 rounded-lg">
                  <p className="text-lime-800 font-bold">Finished</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-500 py-2 px-2 rounded-md">
              <div>
                <h3 className="text-xl font-medium">
                  The Strength of a People. Power of Community
                </h3>
                <p className="text-base">
                  <span className="font-normal">Saturday</span> , 12 April 2021
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm">Total : Rp 45.000</p>
                <div className="bg-lime-500 py-1 px-2 rounded-lg">
                  <p className="text-lime-800 font-bold">Finished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
