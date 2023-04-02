import React from "react";

const Login = () => {
    return (
        <section className="flex items-center justify-center min-h-screen ">
            <div
                className="relative flex flex-col my-12 space-y-10 bg-white rounded-2xl md:flex-row md:space-y-0 "
                style={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
            >
                <div className="p-6 md:p-20">
                    <h1 className="mb-5 text-4xl font-bold">Log In</h1>
                    <p className="max-w-sm mb-12 font-light text-gray-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, enim.
                    </p>
                    <input
                        type="text"
                        className="w-full p-6 border border-gray-500 rounded-md placeholder:font-sans placeholder:font-normal"
                        placeholder="Enter your email address"
                    />

                    <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                        <a href="#" className="font-light">
                            Forgot password?
                        </a>

                        <button className="w-full md:w-auto flex justify-center items-center p-4 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-[#15803D] shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                            <span>Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="13" y1="18" x2="19" y2="12" />
                                <line x1="13" y1="6" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-12 border-b border-b-gray-300"></div>

                    <p className="py-6 text-sm  text-center text-gray-500">or log in with</p>

                    <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                                alt=""
                                className="w-9"
                            />
                            <span className="font-light">Facebook</span>
                        </button>
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                                alt=""
                                className="w-9"
                            />
                            <span className="font-light">Google</span>
                        </button>
                    </div>
                </div>
                <img
                    src="https://images.pexels.com/photos/7262777/pexels-photo-7262777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-[430px] hidden md:block"
                />
                {/* <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black group-hover:text-gray-600"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>{" "} */}
            </div>
        </section>
    );
};

export default Login;
