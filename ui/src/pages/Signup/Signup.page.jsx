import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";

const Signup = () => {
    return (
        <section>
            <div className="py-20 px-14 flex justify-center items-center">
                <img
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Pizza"
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }}
                    className="w-[55%] h-[650px] object-cover"
                />

                <form
                    className="bg-white w-full h-fit -ml-32"
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }}
                >
                    <div class="w-full py-10 px-5 md:px-10">
                        <div class="mb-10">
                            <h1 class="font-bold text-3xl text-gray-900">Sign Up</h1>
                            <p className="mt-2 font-light">Enter your information to register.</p>
                        </div>
                        <div>
                            <div class="flex -mx-3">
                                <div class="w-1/2 px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">
                                        Email
                                    </label>
                                    <div class="flex mt-1">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <MdAlternateEmail className="text-gray-500" />
                                        </div>
                                        <input
                                            type="email"
                                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg ring-2 ring-gray-300 outline-none focus:ring-2 focus:ring-green-300"
                                        />
                                    </div>
                                </div>
                                <div class="w-1/2  px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">
                                        University
                                    </label>
                                    <div class="flex mt-1">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <IoMdSchool className="text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg ring-2 ring-gray-300 outline-none focus:ring-2 focus:ring-green-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <label for="" class="text-xs font-semibold px-1">
                                        Password
                                    </label>
                                    <div class="flex mt-1">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiTwotoneLock className="text-gray-500" />
                                        </div>
                                        <input
                                            type="password"
                                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg ring-2 ring-gray-300 outline-none focus:ring-2 focus:ring-green-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-12">
                                    <label for="" class="text-xs font-semibold px-1">
                                        Confirm Password
                                    </label>
                                    <div class="flex mt-1">
                                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <AiTwotoneLock className="text-gray-500" />
                                        </div>
                                        <input
                                            type="password"
                                            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg ring-2 ring-gray-300 outline-none focus:ring-2 focus:ring-green-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="flex -mx-3">
                                <div class="w-full px-3 mb-5">
                                    <button class="w-full md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-[#15803D] shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                                        <span>Sign Up</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-7"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <line x1="13" y1="18" x2="19" y2="12"></line>
                                            <line x1="13" y1="6" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Signup;
