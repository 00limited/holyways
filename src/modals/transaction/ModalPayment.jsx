import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import img1 from "../../assets/payment.png";

function ModalPayment(props) {
  function closeModalDonate() {
    props.setOpenModalDonate(false);
  }
  return (
    <>
      <div>
        <Transition appear show={props.showModalDonate} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModalDonate}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="mt-2 space-y-3">
                      <input
                        type="text"
                        id="donation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nominate Donation"
                      />
                      <div className="flex justify-between">
                        <div class="flex items-center ">
                          <label class="flex flex-col justify-center items-center w-[10rem] h-10 bg-red-700 rounded-lg  border cursor-pointer  hover:bg-red-500   ">
                            <div class="flex flex-row justify-center items-center ">
                              <p class="mb-2 text-sm text-white font-bold ">
                                Attache Payment
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                />
                              </svg>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              class="hidden"
                            />
                          </label>
                        </div>
                        <div className="text-[10px] items-center py-4 px-4">
                          <p>*transfers can be made to holyways accounts</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        className="py-3 px-6 sm:w-[100%] "
                        onClick={closeModalDonate}
                      >
                        Donate
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default ModalPayment;
