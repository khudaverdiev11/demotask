import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage, setcommentsPerPage] = useState(25);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
            setComments(response.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className='container-fluid mt-5'>
            <h1 className='text-primary mb-3'>Comments</h1>
            <div className='datas'>
                {
                    currentComments.map(comment => (
                        <div key={comment.id} className='datatables'>
                            <div><h6>ID: </h6><p>{comment.postId}</p></div>
                            <div><h6>Comment Name: </h6><p>{comment.name}</p></div>
                            <div><h6>Comment Email: </h6><p>{comment.email}</p></div>
                            <div><h6>Comment Body: </h6><p>{comment.body}</p></div>
                        </div>
                    ))
                }
            </div>
            <Pagination postPerPage={commentsPerPage} totalPosts={comments.length} paginate={paginate} />
        </div>
    )
}

export default Comments