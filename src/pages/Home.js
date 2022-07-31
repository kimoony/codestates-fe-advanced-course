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


  return (
    <Container>
      <h1>게시물 리스트</h1>
      {
        isLoading ?
          <Loading>Loading...</Loading>
          : (
            <ListContainer>
              <Posts posts={posts} />
              <Pagination />
            </ListContainer>
          )
      }
    </Container >
  )
}

export default Home