import React from 'react'
import { useNavigate } from 'react-router-dom';

function Posts({ posts }) {

  const navigate = useNavigate();

  return (
    <ul>
      {
        posts.map((post) => (
          <li key={post.id} onClick={() => navigate(`/post/${post.id}`)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px", border: '1px solid black' }}>
            <p>{post.title}</p>
            <span>작성자 {post.userId}</span>
          </li>
        ))
      }
    </ul>
  )
}

export default Posts