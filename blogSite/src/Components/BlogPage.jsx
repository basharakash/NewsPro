import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelation from './CategorySelation';
import Sidebar from './Sidebar';

const BlogPage = () => {

    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 /*Blog per page */
    const [selectedCategory, setselectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect( () => {
        const fetchBlogs = async () => {
            try {
              let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

            // filter by category
            if(selectedCategory) {
              url+= `&category=${selectedCategory}`
            }

            const response = await fetch(url) //fetch all data from the API
            if(!response.ok) {
              throw new Error("Failed to fetch data")
            }
            const data = await response.json() //Convet response to JSON 
            setBlogs(data) //Update the states with fetched blogs
        } catch (error) {
              console.error( "Error fetching blogs:", error)
            }
        }
        fetchBlogs()
    },[currentPage,pageSize,selectedCategory])

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    const handleCategoryChange = (category) => {
      setselectedCategory(category)
      currentPage
      setActiveCategory(category)

    }
  return (
    <div>
      {/* catagory sections */}
      <CategorySelation onSelectedCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />


      {/* BlogsCards Section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* Blog cards Component */}
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

        {/* Sidebar Section  */}
        <div>
          <Sidebar/>
        </div>
      </div>

      {/* Pagination section */}
      <div>
        <Pagination pageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>
      
    </div>
  );
}

export default BlogPage;
