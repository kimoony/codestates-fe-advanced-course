import React from 'react'
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 5px;
`

const PageBtn = styled.button`
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

  &[disabled] {
    background-color: #E3E3E3;
    font-weight: bold;
    cursor: revert;
    color: lightgray;
    
    &:hover {
    font-weight: 0px;
  }
  }

  &[aria-current] {
    background-color: #2986F5;
    color: #fff;
    font-weight: bold;
    cursor: revert;
  }
`

function Pagination({ postPerPage, totalPosts, currentPage, setCurrentPage }) {
  const Pages = [];
  const numpages = Math.ceil(totalPosts / postPerPage)
  for (let i = 1; i <= numpages; i++) {
    Pages.push(i);
  }

  return (
    <Container>
      <PageBtn
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </PageBtn>
      {
        Pages.map((num) => (
          <PageBtn
            key={num}
            onClick={() => setCurrentPage(num)}
            aria-current={currentPage === num ? "currentPage" : null}
          >
            {num}
          </PageBtn>
        ))
      }
      <PageBtn
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === numpages}
      >
        &gt;
      </PageBtn>
    </Container>
  )
}

export default Pagination