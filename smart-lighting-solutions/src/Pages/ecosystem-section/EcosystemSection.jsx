import React from 'react';
import image from '../../constant/Images/Eco-image.png'
import HeadingColor from '../../helper/HeadingColor';


function EcosystemSection() {
  return (
    <section className="bg-custom-gradient">
      <div className='px-[15%] py-[10%]'>
        <div className='flex flex-col gap-5'>
          <HeadingColor title='Ecosystem' className='bg-ecosystem-heading' color='text-blue-900'/>
          <div className='text-5xl font-normal text-black w-3/4'>
            How does a smart street light ecosystem work?
          </div>
        </div>
        <img src={image} alt='ecosystem-description' className='mt-6' />
      </div> 

    </section>
  );
}

export default EcosystemSection;
