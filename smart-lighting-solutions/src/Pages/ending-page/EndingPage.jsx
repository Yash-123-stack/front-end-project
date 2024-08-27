import React from 'react'
import logo from '../../constant/Images/logo.png'
import bgImage from '../../constant/Images/Footer.png'

const EndingPage = () => {
  return (
    <div className='flex flex-col justify-between bg-center h-[60vh] w-full py-4' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='flex flex-row justify-around pr-10 pt-16'>
        <div className='flex flex-row gap-3 items-center'>
          <img src={logo} alt="logo" width={32} height={32} />
          <span className='text-md leading-7 text-gray-300 tracking-wide'>Smart Lights</span>
        </div>
        <div className='flex gap-20 items-center'>
          
          <div className='text-md leading-7 text-gray-300 cursor-pointer'>Products</div>
          <div className='text-md leading-7 text-gray-300 cursor-pointer'>Software Services</div>
          <div className='text-md leading-7 text-gray-300 cursor-pointer'>Follow Us</div>
        </div>
      </div>
      <div className='flex border-t-2 border-white pb-10 ml-[16%] w-1/2 pt-8 gap-5 text-white'>
      <div className='border-r-2 pr-5'>Privacy Policy</div>
      <div className='px-5 border-r-2'>Terms & Conditions</div>
      <div className='px-5'>Cookie Policy</div>

      </div>
      
    </div>
  )
}

export default EndingPage