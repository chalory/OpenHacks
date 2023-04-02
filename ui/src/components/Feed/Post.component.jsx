import { forwardRef } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

const Post = forwardRef((props, ref) => {
    const { title, name, created_at, food, notes } = props.post;

    return (
        <div className="container mx-auto my-4 p-4" ref={ref}>
            <div className="mx-4 md:mx-auto my-4 max-sw-md md:max-w-2xl w-auto rounded-lg shadow-lg bg-white flex">
                <div className="px-4 py-6 flex items-start w-full">
                    <div className="w-16 h-16 mr-4">
                        <img
                            src="http://source.unsplash.com/800x800"
                            className="rounded-full shadow object-cover"
                        />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="-mt-1 mr-1 text-lg text-gray-900 font-semibold">
                                    {title}
                                </h2>
                                <small className="text-sm text-gray-700">{name}</small>
                            </div>

                            <div className="text-sm text-gray-500">
                                {dayjs(new Date(created_at)).fromNow()}
                            </div>
                        </div>

                        <div className="mt-3 text-sm text-gray-700">{food}</div>
                        <div className="mt-3 text-sm text-gray-700">{notes}</div>

                        <div className="mt-4 flex items-center gap-3">
                            <button className="mr-4 text-sm text-gray-500 flex items-center border-none  border transition hover:-translate-y-0.5 duration-150">
                                <AiOutlineHeart className="text-base" />
                                <span className="pl-1">12</span>
                            </button>
                            <button className="mr-4 text-sm text-gray-500 flex items-center border-none  border transition hover:-translate-y-0.5 duration-150">
                                <FaRegComment className="text-sm" />
                                <span className="pl-1">12</span>
                            </button>
                            <button className="mr-4 text-sm text-gray-500 flex items-center border-none  border transition hover:-translate-y-0.5 duration-150">
                                <IoMdShareAlt className="text-base" />
                                <span className="pl-1">12</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Post;
