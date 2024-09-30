import React from 'react';

const Pagination = ({pageChange, currentPage, blogs, pageSize}) => {
   
    const totalPages = Math.ceil(blogs.length / pageSize)
    console.log(totalPages)
    const renderPaginationLink = () => {
      return Array.from({length: totalPages}, (_, i) => i +1).map((pageNumber) => (
        <li className={pageNumber === currentPage ? "activePagination" :""} key={pageNumber}>
          <a href="#" onClick={() => pageChange(pageNumber)}> {pageNumber}</a>
        </li>
      ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={() => pageChange(currentPage - 1)} disabled = {currentPage === 1}>Previous</button>
      </li>
      <div className='flex'>{renderPaginationLink()}</div>
      <li>
        <button onClick={() => pageChange(currentPage + 1)} disabled = {currentPage === totalPages}>Next</button>
      </li>
    </ul>
  );
}

export default Pagination;
