import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <header
            className={`${pathname === "/" ? "absolute bg-transparent" : ""} w-full bg-amber-400`}
        >
            <div className="py-12 px-14 flex justify-between items-center">
                <div className="flex items-center justify-center gap-24">
                    <Link to="/">
                        <img
                            src="./images/logo.png"
                            height="100"
                            width="55"
                            alt="Logo"
                            className="mr-2 -mt-5 border-none transition hover:-translate-y-0.5 duration-150"
                        />
                    </Link>

                    <nav className="flex gap-4">
                        <Link
                            to="volunteer"
                            className="inline-block p-2 amber-700 text-black border-none transition hover:-translate-y-0.5 duration-150"
                        >
                            Volunteer
                        </Link>
                        <Link
                            to="volunteer"
                            className="inline-block p-2 amber-700 text-black border-none transition hover:-translate-y-0.5 duration-150"
                        >
                            About
                        </Link>
                        <Link
                            to="volunteer"
                            className="inline-block p-2 amber-700 text-black border-none transition hover:-translate-y-0.5 duration-150"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <Link
                        to="login"
                        className="inline-block p-2 border-none transition hover:-translate-y-0.5 duration-150"
                    >
                        Log In
                    </Link>
                    <Link
                        to="signup"
                        className="bg-white rounded-full py-3 px-5 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
