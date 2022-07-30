import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {
        posts.map(post => (
          <div onClick={() => navigate(`/post/${post.id}`)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px", border: '1px solid black' }}>
            <p>{post.title}</p>
            <span>작성자 {post.userId}</span>
          </div>
        ))
      }

    </div >
  )
}

export default Home