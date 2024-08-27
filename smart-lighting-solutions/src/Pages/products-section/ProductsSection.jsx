import React, { useState } from 'react';
import './ProductsSection.css';
import light from '../../constant/Images/street-lights.png';
import option from '../../constant/Images/icon_png.png';
import img from '../../constant/Images/products-page.png';
import HeadingColor from '../../helper/HeadingColor';

function ProductsSection() {
  const buttons = ["Centralized Control & Monitoring System", "NEMA-Mounted VOLC 1160", "Retrofit Street Light Controller VOLC 2160", "Retrofit Street Light Controller VOLC 2180", "Retrofit Street Light Controller VOLC 4180"]

  const [selected, setSelected] = useState(0);

  return (
    <section className="product-background">
      <div className='px-[15%] py-[10%]'>
        <div className='flex flex-col gap-5'>
          <HeadingColor title='Products' className='bg-product-heading' color='text-blue-900' />
          <div className='text-5xl font-normal text-black w-3/4'>
            <b>Cutting-edge hardware,</b> offerings helping cities optimize resources and achieve smart development goals
          </div>
        </div>
        <div className='mt-24 w-[1130px]'>
          <div className='flex flex-wrap gap-7 text-nowrap'>
            {buttons.map((item, index) => {
              return (
                <button key={index} className={`${selected === index ? "button-selected" : "button-unselected"} cursor-pointer`} onClick={() => { setSelected(index) }}>{item}</button>
              )
            })}
          </div>
        </div>
        <div className='flex mt-7 h-[500px]'>
          <div>
            <img src={light} alt="Street-lights" className = "w-[600px] h-[394px]" />
          </div>
          <div className='flex flex-col py-[10%] px-[5%] bg-product-heading-2 w-[600px] h-[394px]'>
            <div className='text-sm leading-4 text-gray-500'>Products 1/5</div>
            <div className='flex flex-col gap-2.5 w-3/4'>
              <div className='text-2xl tracking-[-0.01em] font-semibold '>
                Centralized Control & Monitoring System
              </div>
              <div className='text-base tracking-[-0.01em] '>
                Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for
                a group of 30-50 street lights.
              </div>
            </div>
            <div className='flex gap-2 mt-3 text-xl leading-6 text-blue-500 items-center cursor-pointer'>
              <span>Know More</span>
              <img src={option} alt="option" height={28} width={28} />
            </div>
          </div>
          <div className='relative -bottom-[71.5%] -left-[51.8%]'>
            <img src={img} alt="Switch" width={114} height={52} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
