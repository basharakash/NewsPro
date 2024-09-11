import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {

    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        const fetchBlogs = async () => {
            let url = 'http://localhost:5000/blogs'
            const response = await fetch(url)
            const data = await response.json()
            setBlogs(data)
        }
        fetchBlogs()
    },[])
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
