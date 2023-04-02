import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import moment from "moment";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAuthContext } from "../../../context/AuthContext";

const NewPost = () => {
    const { currentUser } = useAuthContext();
    const navigate = useNavigate();
    const state = useLocation().state;
    const [userType, setUserType] = useState("");
    const [notes, setNotes] = useState("");
    const [postInputs, setPostInputs] = useState({
        title: "",
        food: "",
        notes: "",
        address: "",
    });

    const postTypeForm = (
        <>
            <h2 className="text-center text-4xl mt-10 mb-20">Which one are you?</h2>
            <div className="flex justify-center gap-24">
                <div className="text-center">
                    <h3 className="text-2xl mb-4">Receiver</h3>
                    <button onClick={() => setUserType("receiver")}>
                        <img
                            className="w-60 transition-all hover:scale-[1.05] "
                            src="https://cdn.dribbble.com/users/1731254/screenshots/10821731/media/3edfdb07351cda0bd4e31be88c230448.png"
                        />
                    </button>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl mb-4">Giver</h3>

                    <button onClick={() => setUserType("giver")}>
                        <img
                            className="w-60 transition-all hover:scale-[1.05] "
                            src="https://cdn.dribbble.com/userupload/3698676/file/original-1ca59ac1725cf97dbfa24bf740549f04.png?compress=1&resize=1024x768"
                        />
                    </button>
                </div>
            </div>
        </>
    );

    const giverFormInputChangesHandler = e => {
        setPostInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const giverFormSubmitHandler = async e => {
        e.preventDefault();

        try {
            const { author_id, fullName: name } = currentUser;
            const data = {
                ...postInputs,
                author_id,
                name,
                notes,
                type: userType,
            };

            const res = await axios.post("http://localhost:3000/api/posts", data);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    const receiverForm = (
        <>
            <form className="p-10" onSubmit={giverFormSubmitHandler}>
                <div className="border-b border-gray-900/10 pb-12">
                    <div
                        className="bg-[#FBF2DE] border-t-4 border-black rounded-b text-teal-900 px-4 py-3 shadow-md"
                        role="alert"
                    >
                        <div className="flex">
                            <div className="py-1">
                                <svg
                                    className="fill-current h-6 w-6 text-black mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold">Our privacy policy has changed</p>
                                <p className="text-sm">
                                    Make sure you know how these changes affect you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="mt-10 text-5xl font-semibold leading-7 text-gray-700">
                        Receiver
                    </h2>
                </div>
            </form>
        </>
    );
    const giverForm = (
        <>
            <form className="p-10" onSubmit={giverFormSubmitHandler}>
                <div className="border-b border-gray-900/10 pb-12">
                    <div
                        className="bg-[#FBF2DE] border-t-4 border-black rounded-b text-teal-900 px-4 py-3 shadow-md"
                        role="alert"
                    >
                        <div className="flex">
                            <div className="py-1">
                                <svg
                                    className="fill-current h-6 w-6 text-black mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold">Our privacy policy has changed</p>
                                <p className="text-sm">
                                    Make sure you know how these changes affect you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="mt-10 text-5xl font-semibold leading-7 text-gray-700">Donor</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Post Title
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={giverFormInputChangesHandler}
                                    type="text"
                                    name="title"
                                    id="title"
                                    autoComplete="given-name"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={giverFormInputChangesHandler}
                                    id="address"
                                    name="address"
                                    type="address"
                                    autoComplete="address"
                                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Food Name
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={giverFormInputChangesHandler}
                                    id="food"
                                    name="food"
                                    type="food"
                                    autoComplete="food"
                                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <label
                        htmlFor="notes"
                        className="my-4 block text-sm font-medium leading-6 text-gray-700"
                    >
                        Notes
                    </label>
                    <div className="editorContainer">
                        <ReactQuill
                            id="notes"
                            className="editor h-60"
                            theme="snow"
                            value={notes}
                            onChange={setNotes}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-24 w-full md:w-auto flex justify-center items-center p-3 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-[#15803D] shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                >
                    <span>Submit</span>
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="13" y1="18" x2="19" y2="12"></line>
                        <line x1="13" y1="6" x2="19" y2="12"></line>
                    </svg>
                </button>
            </form>
        </>
    );

    return (
        <>
            {!userType && postTypeForm}
            {userType && userType === "giver" ? giverForm : ""}
            {userType && userType === "receiver" ? receiverForm : ""}
        </>
    );
};

export default NewPost;
