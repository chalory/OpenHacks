import React from "react";

import { IoIosCall } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Volunteer = () => {
    return (
        <section class="antialiased bg-gray-100">
            <div class="flex w-full min-h-screen justify-center items-center">
                <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-amber-400 w-full max-w-4xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden">
                    <div class="flex flex-col md:flex-1  justify-between">
                        <div className="flex flex-col space-y-10">
                            <div>
                                <h1 class="font-bold text-6xl tracking-wide">Volunteer with us!</h1>
                                <p class="pt-2 font-light">
                                    A platform made by university students FOR university students.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Voluptas, quae!
                                </p>
                            </div>
                            <div class="flex flex-col space-y-4 ">
                                <div class="inline-flex space-x-4 items-center">
                                    <IoIosCall className=" text-xl" />
                                    <span>+91 1234567890</span>
                                </div>
                                <div class="inline-flex space-x-4 items-center">
                                    <BiSupport className=" text-xl" />
                                    <span>support@test.com</span>
                                </div>
                                <div class="inline-flex space-x-4 items-center">
                                    <MdLocationOn className=" text-xl" />
                                    <span>Ateneo De Davao University, Davao City</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-4 text-lg">
                            <a
                                href="#"
                                className="border-none hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                            >
                                <BsFacebook />
                            </a>
                            <a
                                href="#"
                                className="border-none hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                            >
                                <BsTwitter />
                            </a>
                            <a
                                href="#"
                                className="border-none hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                            >
                                <BsLinkedin />
                            </a>
                            <a
                                href="#"
                                className="border-none hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                            >
                                <BsInstagram />
                            </a>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="absolute invisible md:visible z-0 w-40 h-40 bg-neutral-50 rounded-full -right-28 -top-28"></div>
                        <div class="absolute invisible md:visible z-0 w-40 h-40 bg-neutral-50 rounded-full -left-28 -bottom-16"></div>
                        <div class="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
                            <form class="flex flex-col space-y-4">
                                <div>
                                    <label for="" class="text-sm">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                                    />
                                </div>
                                <div>
                                    <label for="" class="text-sm">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                                    />
                                </div>
                                <div>
                                    <label for="" class="text-sm">
                                        Your Message
                                    </label>
                                    <textarea
                                        type="email"
                                        placeholder="Message"
                                        rows="4"
                                        class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"
                                    ></textarea>
                                </div>
                                <button class="w-full md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-[#15803D] shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
