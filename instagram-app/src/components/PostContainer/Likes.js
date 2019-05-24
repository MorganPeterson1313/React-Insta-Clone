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
      <img className = "heart" src = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg" alt="heart"/>
      </div>
      <p className = "count"> <h5> {count}Likes</h5></p>
    </div>
  );
}

export default Likes;