import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <section>
            <div
                className="h-[100vh] overflow-hidden md:flex justify-between w-full 
                bg-[url('./images/hero.jpg')]
                bg-no-repeat
                bg-bottom
                bg-cover text-indigo-100 pt-40 px-14"
            >
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="font-satisfy text-2xl md:text-6xl lg:text-[5.25rem] text-white mb-6">
                        <span>Made by </span>
                        <span>students, </span>
                        <br />
                        <span>FOR students!</span>
                    </h1>
                    <p className="mb-10 text-white font-light max-w-[80%]">
                        A world where students are never hungry! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Consequuntur ad nulla cum labore voluptatum!
                        Quasi recusandae voluptas doloribus illo corrupti?
                    </p>
                    <Link
                        to="volunteer"
                        className="inline-block rounded text-lg bg-orange-400 amber-700  mr-2 py-3 px-6 border-none   hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                    >
                        Volunteer with Us
                    </Link>
                    {/* <a
                        href="#"
                        className="inline-block rounded text-lg bg-orange-400 hover:bg-orange-300 py-3 px-6"
                    >
                        Get Started
                    </a> */}
                </div>
                <div className="md:w-1/2">
                    <img
                        src="https://2012.ateneo.edu/sites/default/files/gallery-image/_MG_0207.JPG"
                        alt="Happy Doggo"
                        style={{
                            boxShadow:
                                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                        }}
                        className="w-full rounded shadow-2xl"
                    />
                </div>
            </div>
            {/* <div className="md:flex py-16 px-10 bg-amber-300 text-amber-700 text-center"></div> */}

            {/* <div className=" p-10 bg-amber-400 text-indigo-300 flex justify-between">
                <div className="md:w-1/2">
                    <h3 className="text-lg mb-2">Join the Newsletter</h3>
                    <form className="flex">
                        <input
                            type="email"
                            className="w-full rounded py-3 px-4 outline-none focus:bg-amber-400"
                        />
                        <button className="bg-red-300 hover:bg-red-400 text-red-800 rounded-r px-4">
                            Join
                        </button>
                    </form>
                </div>
                <div className="flex items-center">Ateneo De Davao University</div>
            </div> */}
        </section>
    );
};

export default Landing;
