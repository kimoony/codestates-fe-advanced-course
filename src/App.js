import { HashRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from 'pages/Home';
import PostDetail from 'pages/PostDetail';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { darkState, lightState, themeState } from 'atoms';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // theme
  const [isDark, setIsDark] = useState('Dark');
  const [theme, setTheme] = useRecoilState(themeState);
  const lightTheme = useRecoilValue(lightState);
  const darkTheme = useRecoilValue(darkState);

  // theme 토글
  const themeToggle = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setIsDark('Light');
    } else {
      setTheme(lightTheme);
      setIsDark('Dark');
    }
  }

  const current = useRecoilValue(themeState);
  console.log(current)
  const bgColor = current.bgColor;
  const btnTextColor = current.btnTextColor;
  const btnColor = current.btnColor;
  const textColor = current.textColor;
  const borderColor = current.borderColor;
  const pageBtnColor = current.pageBtnColor;
  const pageTextColor = current.pageTextColor;
  const accentColor = current.accentColor;
  const btnTextAccentColor = current.btnTextAccentColor;
  const subTextColor = current.subTextColor;

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
      <Routes>
        <Route path="/" element={<Home
          posts={posts}
          isLoading={isLoading}
          themeToggle={themeToggle}
          isDark={isDark}
          bgColor={bgColor}
          btnTextColor={btnTextColor}
          btnColor={btnColor}
          textColor={textColor}
          borderColor={borderColor}
          pageBtnColor={pageBtnColor}
          pageTextColor={pageTextColor}
          accentColor={accentColor}
          btnTextAccentColor={btnTextAccentColor}
        />} />
        <Route path="post/:id" element={<PostDetail
          posts={posts}
          isLoading={isLoading}
          themeToggle={themeToggle}
          isDark={isDark}
          bgColor={bgColor}
          btnTextColor={btnTextColor}
          btnColor={btnColor}
          textColor={textColor}
          borderColor={borderColor}
          accentColor={accentColor}
          btnTextAccentColor={btnTextAccentColor}
          subTextColor={subTextColor}
        />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
