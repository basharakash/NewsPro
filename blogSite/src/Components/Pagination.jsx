import React from 'react';

const Pagination = ({pageChange, currentPage, blogs, pageSize}) => {
   
    // eslint-disable-next-line react/prop-types
    const totalPages = Math.ceil(blogs.length / pageSize)
    // To see Totalpages data
    // console.log(totalPages)
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
        <button className='border-solid border-2 border-gray-400 py-1 px-4 rounded-md' onClick={() => pageChange(currentPage - 1)} disabled = {currentPage === 1}>Previous</button>
      </li>
      <div className='flex'>{renderPaginationLink()}</div>
      <li>
        <button className='border-solid border-2 border-gray-400 py-1 px-4 rounded-md' onClick={() => pageChange(currentPage + 1)} disabled = {currentPage === totalPages}>Next</button>
      </li>
    </ul>
  );
}

export default Pagination;
