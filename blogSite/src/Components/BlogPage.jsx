import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 /*Blog per page */
    const [selectedCategory, setselectedCategory] = useState(null);


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
  return (
    <div>
      {/* catagory sections */}
      <h3>Blogs Catagory</h3>

      {/* BlogsCards */}
      <div>
        <BlogCards blogs={blogs}/>
      </div>

      {/* Pagination section */}
      <div></div>
      
    </div>
  );
}

export default BlogPage;
