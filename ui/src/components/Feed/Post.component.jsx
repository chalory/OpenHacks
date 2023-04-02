import { forwardRef, useState } from "react";
import ReactModal from "react-modal";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import Single from "./Single.component";

const getText = html => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
};

const Post = forwardRef((props, ref) => {
    const { title, name, created_at, food, notes } = props.post;

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [photo, setPhoto] = useState("http://source.unsplash.com/800x800");

    return (
        <>
            <div
                onClick={handleOpenModal}
                className="container mx-auto my-4 p-4 hover:transition-all hover:scale-[1.05] cursor-pointer duration-150"
                ref={ref}
            >
                <div className="mx-4 md:mx-auto my-4 max-sw-md md:max-w-2xl w-auto rounded-lg shadow-lg bg-white flex">
                    <div className="px-4 py-6 flex items-start w-full">
                        <div className="w-16 h-16 mr-4">
                            <img src={photo} className="rounded-full shadow object-cover" />
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="-mt-1 mr-1 text-lg text-gray-900 font-semibold">
                                        {title}
                                    </h2>
                                    <small className="text-sm text-gray-700">
                                        @{name.split(" ")[0].toLowerCase()}
                                    </small>
                                </div>

                                <div className="text-sm text-gray-500">
                                    {dayjs(new Date(created_at)).fromNow()}
                                </div>
                            </div>

                            <div className="mt-3 text-sm text-gray-700">
                                <span>Food: </span>
                                <span className=" font-bold">{food}</span>
                            </div>
                            {/* <div className="mt-3 text-sm text-gray-700 bg-gray-200 p-6">
                                {getText(notes)}
                            </div> */}

                            <div className="mt-4 flex items-center gap-3">
                                <button className="mr-4 text-sm text-gray-500 flex items-center border-none  border transition hover:-translate-y-0.5 duration-150">
                                    <AiOutlineHeart className="text-base" />
                                    <span className="pl-1">0</span>
                                </button>
                                <button className="mr-4 text-sm text-gray-500 flex items-center border-none  border transition hover:-translate-y-0.5 duration-150">
                                    <FaRegComment className="text-sm" />
                                    <span className="pl-1">0</span>
                                </button>
                                <button className="mr-4 text-sm text-gray-500 flex items-center border-none  border transition hover:-translate-y-0.5 duration-150">
                                    <IoMdShareAlt className="text-base" />
                                    <span className="pl-1">0</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                <Single {...props.post} photo={photo} />

                <button
                    onClick={handleCloseModal}
                    className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black group-hover:text-gray-600"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </ReactModal>
        </>
    );
});

export default Post;
