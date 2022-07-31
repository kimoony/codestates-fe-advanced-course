import { HashRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from 'pages/Home';
import PostDetail from 'pages/PostDetail';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setIsLoading(false);
    }

    fetchData()
  }, [])


  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home posts={posts} isLoading={isLoading} />} />
          <Route path="post/:id" element={<PostDetail posts={posts} isLoading={isLoading} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
