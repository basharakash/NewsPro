import React from 'react';

const Pagination = ({pageChange, currentPage, blogs, pageSize}) => {
   
    const totalPage = Math.ceil(blogs.length / pageSize)
    console.log(totalPage)
  return (
    <div>
      
    </div>
  );
}

export default Pagination;
