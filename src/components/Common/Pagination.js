import React from 'react';
import * as PaginationStyle from '../../assets/styles/Common/Pagination';

const Pagination = ({ currentPage, pageNumbers, paginate, maxPageNumLimit, minPageNumLimit }) => {

  let num = 0;
  pageNumbers.map(number => {
    if(number < maxPageNumLimit+1 && number > minPageNumLimit){
      num++;
    }
  })

  const pageNumberView = pageNumbers.map(number => {
    if(number < maxPageNumLimit+1 && number > minPageNumLimit){
      return (
        <PaginationStyle.Numbering key={number} currentPage={currentPage} num={num} onClick={() => paginate(number)}>
            {number}
        </PaginationStyle.Numbering>
      )
    } else {
      return null
    }
  })

  return (
    <PaginationStyle.Container>
        <PaginationStyle.Contents num={num}>
            {pageNumberView}
        </PaginationStyle.Contents>
    </PaginationStyle.Container>
  );
};

export default Pagination;