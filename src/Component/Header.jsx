import React from 'react'
import Logo from '../assests/Images/logo.svg'
   import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

import { HiPlus } from "react-icons/hi2";
import { HiHome, } from "react-icons/hi"

function Header() {
  return (
    <div className='md:flex justify-center items-center '>
      <img src={Logo} alt='disney' className='w-[80px] md:w-[115px]' />
      <div className='md:flex md:gap-12 md:mt-8 md:ml-20'>
         <div className='md:flex gap-4 items-center cursor-pointer'>
            <HiHome className= 'fill-white' />
             <h2 className='text-white hover:underline'>HOME</h2>
         </div>
         <div className='md:flex gap-4 items-center cursor-pointer'>
            <HiOutlineMagnifyingGlass className= 'fill-white' />
             <h2 className='text-white hover:underline'>SEARCH</h2>
         </div>
         <div className='md:flex gap-4 items-center cursor-pointer'>
            <HiPlus className= 'fill-white' />
             <h2 className='text-white hover:underline'>WATCH LIST</h2>
         </div>
         <div className='md:flex gap-4 items-center cursor-pointer'>
            <HiHome className= 'fill-white' />
             <h2 className='text-white hover:underline'>ORIGINALS</h2>
         </div>
         <div className='md:flex gap-4 items-center cursor-pointer'>
            <HiHome className= 'fill-white' />
             <h2 className='text-white hover:underline'>MOVIES</h2>
         </div>
         <div className='md:flex gap-4 items-center cursor-pointer'>
            <HiHome className= 'fill-white' />
             <h2 className='text-white hover:underline'>SERIES</h2>
         </div>
         <div>
            <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1702343609~exp=1702344209~hmac=35ba3b139f94212d9dfe5ce11a5014167edda673f480b84df352dec65d603755' className='rounded-full w-[50px] items-end' />
         </div>
      </div>
    </div>
  )

  }
export default Header
