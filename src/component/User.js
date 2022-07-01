import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
import Popup from './Popup'

const User = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setuserPerPage] = useState(2);
    const [buttonPopup, setButtonPopup] = useState(false)
    const [userPosts, setUserPosts] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data);
            setLoading(false);
        }
        fetchUsers();
    }, [])
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    const paginate = pageNumber => setCurrentPage(pageNumber);
    if (loading) {
        return <h2>Loading...</h2>
    }

    const handleClick = (e) => {
        console.log(e.currentTarget.id);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${e.currentTarget.id}`)
            .then(response => response.json())
            .then(data => setUserPosts(data));
       
        console.log(userPosts)
    };
    return (
        <div className='container-fluid mt-5'>
            <h1 className='text-primary mb-3'>USERS</h1>
            <div className='datas'>
                {
                    currentUsers.map(user => (
                        <div key={user.id} id={user.id} onClick={(e) => { setButtonPopup(true); handleClick(e); }} className='datatables'>
                            <div><h6 className='userid' >User ID: </h6><p>{user.id}</p></div>
                            <div><h6>User Name: </h6><p>{user.name}</p></div>
                            <div><h6>User Username: </h6><p>{user.username}</p></div>
                            <div><h6>User Address Street: </h6><p>{user.address.street}</p></div>
                            <div><h6>User Address City: </h6><p>{user.address.city}</p></div>
                            <div><h6>User Phone: </h6><p>{user.phone}</p></div>
                            <div><h6>User Company Name: </h6><p>{user.company.name}</p></div>
                        </div>
                    ))
                }
            </div>
            <Pagination postPerPage={userPerPage} totalPosts={users.length} paginate={paginate} />
            {/* userPosts&&<Popup posts={userPosts}/> */}
        </div>   
    )
}

export default User






















/*function User() {
    const [users, setUsers] = useState(false)
    const [pageCount, setpageCount] = useState(1)
    const [reactivePage, setreactivePage] = useState([])
    const shownData = 2;
    let pageNumbers = [];
    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/users?_page=${pageCount}&_limit=2`)
            .then(res => {
                if (res.ok && res.status === 200) {
                    return (res.json())
                }   
            })
            .then(data => setUsers(data))
            .catch(err => console.log(err))

        fetch("http://jsonplaceholder.typicode.com/users")
            .then(res => {
                if (res.ok && res.status === 200) {
                    return (res.json())
                }
            })
            .then(data => {
                setpageCount(data.length / shownData)
                for(let i=1; i<=pageCount; i++){
                    pageNumbers.push(i)
                    console.log(i)
                }
                setreactivePage(pageNumbers)
                console.log(pageCount)
            })
            .catch(err => console.log(err))
    }, [pageCount])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">User name</th>
                        <th scope="col">User username</th>
                        <th scope="col">User email</th>
                        <th scope="col">User address street</th>
                        <th scope="col">User address city</th>
                        <th scope="col">User phone</th>
                        <th scope="col">User website</th>
                        <th scope="col">User company name</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => (
                        <tr key={user.id}>
                            <td data-label="User ID">{user.id}</td>
                            <td data-label="User name">{user.name}</td>
                            <td data-label="User username">{user.username}</td>
                            <td data-label="User email">{user.email}</td>
                            <td data-label="User address street">{user.address.street}</td>
                            <td data-label="User address city">{user.address.city}</td>
                            <td data-label="User phone">{user.phone}</td>
                            <td data-label="User website">{user.website}</td>
                            <td data-label="User company name">{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                reactivePage && reactivePage.map(x => (
                    <button>{x}</button>
                    )
                )
            }
        </>
    )
}

export default User */