import React from 'react';
import BlogPage from '../Components/BlogPage';

const Blogs = () => {
  return (
    <div>
        <div className='bg-black px-4 py-40 text-white text-center'>
          <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
        </div>

        {/* All Blogs Container */}

        <div className='max-w-7xl mx-auto'>
          <BlogPage/>
        </div>
    </div>
  );
}

export default Blogs;
