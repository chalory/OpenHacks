import React, { useState, useEffect, useRef } from "react";
import Post from "../../components/Feed/Post.component";
import postService from "../../services/posts.service.js";
import ReactModal from "react-modal";
import NewPost from "./features/NewPost.feature";

import { GrAdd } from "react-icons/gr";

const Feed = () => {
    const [posts, setPosts] = useState(null);
    console.log(posts);
    const [page, setPage] = useState(0);
    const limit = 3;
    const element = useRef(null);
    const [isLastPage, setIsLastPage] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const setInitialPosts = async () => {
        const res = await postService.getAll(page, 0);

        if (res.data) {
            const posts = res.data?.reverse();
            setPosts(posts);
            setPage(prevState => prevState + 1);
        }
    };

    // const observer = new IntersectionObserver(
    //     async entries => {
    //         const entry = entries[0];
    //         if (entry.isIntersecting) {
    //             const res = await postService.getAll(page, limit);
    //             setPage(prevState => prevState + 1);
    //             setPosts(posts.concat(res.data));

    //             if (page * limit > res.total + limit) {
    //                 setIsLastPage(true);
    //                 observer.unobserve(element.current);
    //             }
    //         }
    //     },
    //     { threshold: 1 }
    // );

    useEffect(() => {
        if (!posts) {
            setInitialPosts();
        }
        // if (posts && !isLastPage) {
        //     observer.observe(element.current);
        // }
        // return () => {
        //     element.current && observer.unobserve(element.current);
        // };
    }, [page]);

    return (
        <>
            {/* <div className="container flex justify-end p-4 mx-4 md:mx-auto my-4 max-sw-md md:max-w-2xl w-auto"> */}
            <div className="fixed bottom-10 right-6">
                <button
                    onClick={handleOpenModal}
                    className="bg-[#318C50] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-lg border transition hover:-translate-y-0.5 duration-150l"
                >
                    <GrAdd className="text-white" color="white" />
                </button>
            </div>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                <NewPost />

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

            {posts &&
                posts.map((post, index) => {
                    if (index === posts.length - 1) {
                        return <Post key={post.id} post={post} ref={element} />;
                    }
                    return <Post key={post.id} post={post} />;
                })}
        </>
    );
};

export default Feed;
