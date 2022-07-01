import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <li>
            <Link to ='/User'>Users</Link>
        </li>
        <li>
            <Link to ='/Posts'>Posts</Link>
        </li>
        <li>
            <Link to ='/Comments'>Comments</Link>
        </li>
    </div>
  )
}

export default Homepage