import React from 'react';

const Pagination = ({ pageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLink = () => {
    const links = [];
    
    // Function to add a page link or ellipsis
    const addLink = (pageNumber) => {
      if (pageNumber === '...') {
        links.push(<li key={pageNumber}>...</li>);
      } else {
        links.push(
          <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
            <a href="#" onClick={() => pageChange(pageNumber)}> {pageNumber}</a>
          </li>
        );
      }
    };

    if (totalPages <= 5) {
      // If total pages are less than or equal to 5, show all
      for (let i = 1; i <= totalPages; i++) {
        addLink(i);
      }
    } else {
      // If current page is 1 or 2, show pages 1, 2, 3, 4 and ellipsis
      if (currentPage < 3) {
        for (let i = 1; i <= 4; i++) {
          addLink(i);
        }
        addLink('...');
        addLink(totalPages);
      } 
      // If current page is totalPages, show ellipsis and last 4 pages
      else if (currentPage >= totalPages - 1) {
        addLink(1);
        addLink('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          addLink(i);
        }
      } 
      // If current page is in between, show first page, ellipsis, and surrounding pages
      else {
        addLink(1);
        addLink('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          if (i > 0 && i <= totalPages) {
            addLink(i);
          }
        }
        addLink('...');
        addLink(totalPages);
      }
    }
    
    return links;
  };

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button className='border-solid border-2 border-gray-400 py-1 px-4 rounded-md' onClick={() => pageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
      </li>
      <div className='flex'>{renderPaginationLink()}</div>
      <li>
        <button className='border-solid border-2 border-gray-400 py-1 px-4 rounded-md' onClick={() => pageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
