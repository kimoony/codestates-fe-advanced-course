import React from 'react'
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const PageNum = styled.button`
  background-color: #fff;
  list-style: none;
  padding: 5px 10px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2986F5;
  }

  &:focus {
    color: #fff;
    background-color: #2986F5;
    cursor: revert;
  }
`

function Pagination({ postPerPage, totalPosts, setCurrentPage }) {
  const pageNums = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <Container>
      {
        pageNums.map((num) => (
          <PageNum key={num} onClick={() => setCurrentPage(num)}>
            {num}
          </PageNum>
        ))
      }
    </Container>
  )
}

export default Pagination