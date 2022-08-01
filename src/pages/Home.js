import React, { useState } from 'react';
import Posts from 'components/Posts';
import Pagination from 'components/Pagination';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ListContainer = styled.div`
  width: 90vw;
`
const Loading = styled.div`
  font-size: 30px;
  font-weight: bold;
`


function Home({ isLoading, posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }


  return (
    <Container>
      <h1>게시물 리스트</h1>
      {
        isLoading ?
          <Loading>Loading...</Loading>
          : (
            <ListContainer>
              <Posts posts={currentPosts(posts)} />
              <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.length}
                setCurrentPage={setCurrentPage}
              />
            </ListContainer>
          )
      }
    </Container >
  )
}

export default Home