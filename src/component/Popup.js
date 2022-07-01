import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';


const Popup = ({ posts }) => {
  return (
    <div className='popup' >
      <div className='popup-inner' >
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              {p.title}
            </li>
          ))}
        </ul>
        {/* <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button> */}
      </div>
    </div>
  );
}

export default Popup