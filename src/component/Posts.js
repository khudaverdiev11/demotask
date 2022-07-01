import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from './Pagination';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setpostPerPage] = useState(5);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='container-fluid mt-5'>
            <h1 className='text-primary mb-3'>POSTS</h1>
            <div className='datas'>
                {
                    currentPosts.map(post => (
                        <div key={post.id} className='datatables'>
                            <div><h6>ID: </h6><p>{post.userId}</p></div>
                            <div><h6>Post Title: </h6><p>{post.title}</p></div>
                            <div><h6>Post Body: </h6><p>{post.body}</p></div>
                        </div>
                    ))
                }
            </div>
            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Posts