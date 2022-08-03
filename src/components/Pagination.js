import React from 'react'
import { Container, PageBtn } from 'style/components/Pagination.style';

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