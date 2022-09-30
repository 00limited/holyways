import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ModalLogin from "./ModalLogin";

function ModalRegister(props) {
  function closeModal() {
    props.setOpenModalRegister(false);
  }
  function openModalL(e) {
    e.preventDefault();
    props.setOpenModalRegister(false);
    props.setOpenModalLogin(true);
  }

  return (
    <>
      <div>
        <Transition
          appear
          show={props.showModalRegis}
          onClose={props.closeModalLogin}
          as={Fragment}
        >
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    <Dialog.Title
                      as="h3"
                      className="text-2xl pb-2 font-semibold leading-6 text-gray-900 "
                    >
                      Register
                    </Dialog.Title>
                    <div className="mt-2 space-y-3">
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                      />
                      <input
                        type="password"
                        id="password"
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="password"
                      />
                      <input
                        type="text"
                        id="name"
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="mt-8">
                      <button
                        className="py-3 px-6 sm:w-[100%] "
                        onClick={closeModal}
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                    <div className="flex justify-center pt-3">
                      <p>
                        Already have an account ? Klik
                        <span
                          onClick={openModalL}
                          className="hover:text-blue-500 cursor-pointer"
                        >
                          Here
                        </span>
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* <ModalLogin
          setOpenModalLogin={setOpenModalLogin}
          showModalLogin={openModalLogin}
        /> */}
      </div>
    </>
  );
}

export default ModalRegister;
