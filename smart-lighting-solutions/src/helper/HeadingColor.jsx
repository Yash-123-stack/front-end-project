import React from 'react'

const HeadingColor = ({className,title,color}) => {
  return (
      <div className='flex leading-9 items-center' >
          <div className={`w-16 h-16 ${className}`}></div>
          <span className={`relative -left-7 text-2xl font-semibold ${color} `}>{title}</span>
      </div>
  )
}

export default HeadingColor