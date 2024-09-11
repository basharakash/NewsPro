import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark} from "react-icons/fa6"

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars

    const [isMenuOpen, SetisMenuOpen] = useState(false)

    const toggleing = () => {
        SetisMenuOpen(!isMenuOpen)
    }

    const NavItems = [
        {path:"/", link:"Home"},
        {path:"/blogs", link:"Blogs"},
        {path:"/services", link:"Services"},
        {path:"/contact", link:"Contact"},
        {path:"/about", link:"About"},
    ]
  return (
    <header className='bg-black text-white fixed w-full'>
        <nav className=' px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-2xl font-bold'>Design <span className='text-green-500'>DK</span></a>

            {/* NavItems for lg devices */}

            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    NavItems.map(({path, link}) => <li key={path}>
                        <NavLink className={({ isActive}) =>
                      isActive
                        ? "active"
                        : ""
                    } to={path} > {link}</NavLink>
                    </li>)
                }
            </ul>

            {/* Icon Menu */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-green-500'> <FaFacebook/> </a>
                    <a href="/" className='hover:text-green-500'> <FaDribbble/> </a>
                    <a href="/" className='hover:text-green-500'> <FaTwitter/> </a>
                    <button className='bg-green-500 px-4 py-2 rounded hover:bg-green-50 hover:text-green-500 font-bold transition-all duration-200 ease-in'>Log In</button>
                </div>

                {/* Mobile menu button , Display mobile screen */}
                
                <div className='md:hidden'>
                    <button onClick={toggleing} className='cursor-pointer'>
                        {
                          isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                        }
                    </button>
                </div>
        </nav>

        {/* menu item only for mobile devices */}
        <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${ isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
                {
                    NavItems.map(({path, link}) => <li className='text-black' key={path}>
                        <NavLink onClick={toggleing} to={path} > {link}</NavLink>
                    </li>)
                }
            </ul>
        </div>

    </header>
  );
}

export default Navbar;
