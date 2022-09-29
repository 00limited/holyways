import React, { useState } from "react";
import img1 from "../assets/img3.png";

const FormFund = () => {
  const [preview, setPreview] = useState(null); //For image preview
  return (
    <div>
      <div className="pt-[10rem] px-[200px]">
        <form className="space-y-5 pb-8">
          <h1 className="text-2xl font-semibold pb-8">Make Raise Fund</h1>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
          />
          <div className="flex justify-between">
            <div class="flex items-center ">
              <label class="flex flex-col justify-center items-center w-[10rem] h-10 bg-red-700 rounded-lg  border cursor-pointer  hover:bg-red-500   ">
                <div class="flex flex-col justify-center items-center">
                  <p class="mb-2 text-sm text-white font-bold ">
                    Attache thumbnail
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
            <img
              className="max-w-full max-h-[150px] object-cover"
              src={preview}
              alt=""
            />
          </div>

          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Goals Donation"
          />
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <div className=" flex justify-end pt-11">
            <button className="py-2 px-4">Public Fundraising</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFund;
