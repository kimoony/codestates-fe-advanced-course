import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from 'components/Posts';
import Pagination from 'components/Pagination';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setIsLoading(false);
    }

    fetchData()
  }, [])

  return (
    <div>
      {
        isLoading ?
          <div>Loading...</div>
          : <Posts posts={posts} />
      }
      <Pagination />
    </div >
  )
}

export default Home