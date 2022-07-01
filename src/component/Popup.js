import React from 'react'
import { useState, useEffect } from 'react';


const Popup = ({ posts, setUserPosts, setTitle, title }) => {

  function getComments(e) {
    if (title !== 'Post Comments') {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${e.currentTarget.id}`)
        .then(response => response.json())
        .then(data => {

          let result = [];
          data.map((item) => (
            result.push({ 'title': item.name, 'id': item.id, 'body': item.body })
          ))
          setUserPosts(result);
          setTitle('Post Comments')
        });
    }
  }

  return (
    <>
      {posts && <div className='popup' >
        <div className='popup-inner' >
          <h4>{title}</h4>
          <ul>
            {posts.map((p) => (
              <li style={{ border: '2px solid', listStyle: 'none', padding: '8px', cursor: 'pointer' }} key={p.id} id={p.id} onClick={(e) => getComments(e)}>
                <span> {p.title}</span>
              </li>
            ))}
          </ul>
          <button className='close-btn' onClick={() => setUserPosts(null)}>close</button>
        </div>
      </div>}
    </>
  );
}

export default Popup