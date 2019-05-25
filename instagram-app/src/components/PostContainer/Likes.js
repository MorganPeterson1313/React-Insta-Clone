import React, { useState, useEffect } from 'react';
import './post.css';

function Likes () {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className = "countButton">
      
      <div className = "likeButton" onClick={() => setCount(count + 1)}>
      <img className = "heart" src = "https://upload.wikimedia.org/wikipedia/commons/8/87/Line-style-icons-heart.svg" alt="heart"/>
      </div>
      <div className = "count"> <h6 className="count"> {count}likes</h6></div>
    </div>
  );
}

export default Likes;