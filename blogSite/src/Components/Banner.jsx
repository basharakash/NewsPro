import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6"

const Banner = () => {
  return (
    <div className='bg-black px-4 py-32 max-auto'>
      <div className='text-white text-center inli'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blog!</h1>
      <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-praymary'>We’re delighted to have you here. Our blog is your go-to destination for exploring a wide range of topics. Whether you’re eager to learn something new, share your thoughts with a vibrant community, or simply enjoy engaging content, you’ve come to the right place. Explore, create, and connect with us as we embark on this exciting journey together. Enjoy your time here!</p>

      <div>
        <Link to="/" className='font-medium hover:text-green-400 inline-flex py-1'>Learn moar <FaArrowRight className='mt-1 ml-2'/> </Link>
      </div>
      </div>
    </div>
  );
}

export default Banner;
