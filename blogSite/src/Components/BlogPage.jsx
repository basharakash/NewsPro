import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';

const BlogPage = () => {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 /*Blog per page */
    const [selectedCategory, setselectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect( () => {
        const fetchBlogs = async () => {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

            // filter by category
            if(selectedCategory) {
              url+= `&category=${selectedCategory}`
            }
 
            const response = await fetch(url)
            const data = await response.json()
            setBlogs(data)
        }
        fetchBlogs()
    },[currentPage,pageSize,selectedCategory])
    // Page changing function
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    
    const handleCategoryChange = (category) => {
      setselectedCategory(category)
      currentPage(1)
      setActiveCategory(category)

    }
  return (
    <div>
      {/* catagory sections */}
      <h3>Blogs Catagory</h3>

      {/* BlogsCards */}
      <div>
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
      </div>

      {/* Pagination section */}
      <div>
        <Pagination pageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>
      
    </div>
  );
}

export default BlogPage;
