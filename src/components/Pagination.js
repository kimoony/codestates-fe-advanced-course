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
  border: 1px solid;
  border-color: ${(props) => props.bgColor};
  border-radius: 10px;
  margin-right: 5px;
  cursor: pointer;
  transition: all ease-in-out .5s;

  &:hover {
    color: ${(props) => props.pageTextColor};
    background-color: ${(props) => props.pageBtnColor};
    transition: all ease-in-out .5s;
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
    background-color: ${(props) => props.pageBtnColor};
    color: ${(props) => props.pageTextColor};
    font-weight: bold;
    cursor: revert;
    transition: all ease-in-out .3s;
  }
`

function Pagination({
  postPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  pageBtnColor,
  pageTextColor,
  bgColor
}) {
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
            pageBtnColor={pageBtnColor}
            pageTextColor={pageTextColor}
            bgColor={bgColor}
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