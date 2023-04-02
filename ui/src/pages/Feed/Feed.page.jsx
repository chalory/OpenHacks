import React, { useState, useEffect, useRef } from "react";
import Post from '../../components/Feed/Post.component'
import postService from '../../services/posts.service.js'

const Feed = () => {
    const [posts, setPosts] = useState(null)
    const [page, setPage] = useState(0)
    const limit = 3
    const element = useRef(null)
    const [isLastPage, setIsLastPage] = useState(false)

    const setInitialPosts = async () => {
        const res = await postService.getAll(page, limit)
        setPosts(res.data)
        setPage(page + 1)
    }

    const observer = new IntersectionObserver(async entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
            const res = await postService.getAll(page, limit)
            setPage(page + 1)
            setPosts(posts.concat(res.data))
            if (page * limit > res.total + limit) {
                setIsLastPage(true)
                observer.unobserve(element.current)
            }
        }
    }, { threshold: 1 })

    useEffect(() => {
        if (!posts) {
            setInitialPosts()
        }
        if (posts && !isLastPage) {
            observer.observe(element.current)
        }
        return () => {
            element.current && observer.unobserve(element.current)
        }
    }, [page])

    return (
        <>
            { posts && posts.map((post, index) => {
                if (index === posts.length - 1) {
                    return <Post key={post.id} post={post} ref={element}/>
                }
                return <Post key={post.id} post={post} />
            })}
        </>
    );
};

export default Feed;
