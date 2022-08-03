import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


// styled-components 로 reset.css 적용
// createGlobalStyle - 렌더링 될 때 컴포넌트는 전역 스코프에 스타일들을 올려준다.
const GlobalStyled = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyled />
      <App />
    </RecoilRoot>
  </React.StrictMode >
);

