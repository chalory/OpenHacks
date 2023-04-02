import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <div class="bg-amber-400 py-4 px-14 flex justify-between items-center">
                    <div class="flex items-center justify-center gap-6">
                        <Link to="/">
                            <img
                                src="https://ateressi.sirv.com/openhacks.png"
                                height="200"
                                width="100"
                                alt="Logo"
                                class="mr-2"
                            />
                        </Link>

                        <nav>
                            <Link to="feed" class="inline-block p-2 amber-700 hover:text-amber-700">
                                Feed
                            </Link>
                            <Link
                                to="volunteer"
                                class="inline-block p-2 amber-700 hover:text-amber-700"
                            >
                                Volunteer
                            </Link>
                        </nav>
                    </div>

                    <div class="flex items-center justify-center gap-4">
                        <Link to="login" class="inline-block p-2  hover:text-indigo-100 mr-2">
                            Log In
                        </Link>
                        <Link to="signup" class="bg-white rounded-full py-3 px-5 ">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
