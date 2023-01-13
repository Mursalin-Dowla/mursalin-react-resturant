import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const NavBar = () => {
    let [open,setOpen]=useState(false);
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='text-3xl text-lime-400 mr-1 pt-2'>
        <ion-icon name="fast-food-outline"></ion-icon>
        </span>
        mursalin<span style={{color: '#a3e635'}}>'s</span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/categories'>Categories</CustomLink>
            <CustomLink to='/explore'>Explore</CustomLink>
            <CustomLink to='/aboutus'>About us</CustomLink>
            <CustomLink to='/search'>Search <span><ion-icon name="search-circle-outline"></ion-icon></span></CustomLink>
      </ul>
      </div>
    </div>
  )
};

export default NavBar;