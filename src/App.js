import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostItem from './pages/PostItem';


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<PostItem />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
