import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
