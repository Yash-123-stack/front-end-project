import React from 'react'
import logo from '../../constant/Images/logo.png'
import bgImage from '../../constant/Images/front-page.png'

const HomePage = () => {
  return (
    <div className='flex flex-col bg-cover bg-center h-screen w-full py-4' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-row gap-3 items-center'>
          <img src={logo} alt="logo" width={32} height={32} />
          <span className='text-md leading-7 text-white tracking-wide'>Smart Lights</span>
        </div>
        <div className='flex gap-10 items-center'>
          <div className='text-md leading-7 text-white cursor-pointer'>Home</div>
          <div className='text-md leading-7 text-white cursor-pointer'>Products</div>
          <div className='text-md leading-7 text-white cursor-pointer'>Software Services</div>
          <div className='rounded-sm bg-blue-600 text-white px-9 py-2 cursor-pointer'>Login</div>
        </div>

      </div>
      <div className="pt-20 flex flex-col gap-8 items-center">
        <div className='text-2xl text-white'>Smart Lighting Solutions</div>
        <div className='text-3xl text-center w-1/2 text-gray-500'>Bringing A New Perspective To Street Lights And The Cities Of Tomorrow.</div>
        <div className='rounded-sm bg-blue-500 text-white py-2 px-6 cursor-pointer'>Login</div>
      </div>
    </div>
  )
}

export default HomePage