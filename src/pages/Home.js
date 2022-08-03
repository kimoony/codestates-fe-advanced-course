import React, { useState } from 'react';
import Posts from 'components/Posts';
import Pagination from 'components/Pagination';
import NavTheme from 'components/NavTheme';
import {
  Wrapper,
  Title,
  ListContainer,
  Loading
} from 'style/pages/Home.style';



function Home({
  isLoading,
  posts,
  themeToggle,
  isDark,
  bgColor,
  btnTextColor,
  btnColor,
  textColor,
  borderColor,
  pageBtnColor,
  pageTextColor,
  accentColor,
  btnTextAccentColor }) {
  // 페지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  // 페이지네이션
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }


  return (
    <>
      <Wrapper bgColor={bgColor}>
        <NavTheme
          isDark={isDark}
          themeToggle={themeToggle}
          bgColor={bgColor}
          btnTextColor={btnTextColor}
          btnColor={btnColor}
          accentColor={accentColor}
          btnTextAccentColor={btnTextAccentColor}
        />
        <Title textColor={textColor}>게시물 리스트</Title>
        {
          isLoading ?
            <Loading>Loading...</Loading>
            : (
              <ListContainer>
                <Posts
                  posts={currentPosts(posts)}
                  textColor={textColor}
                  borderColor={borderColor}
                  accentColor={accentColor}
                />
                <Pagination
                  postPerPage={postPerPage}
                  totalPosts={posts.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageTextColor={pageTextColor}
                  pageBtnColor={pageBtnColor}
                  bgColor={bgColor}
                />
              </ListContainer>
            )
        }
      </Wrapper >
    </>
  )
}

export default Home