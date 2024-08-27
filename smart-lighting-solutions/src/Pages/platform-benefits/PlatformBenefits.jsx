import React from 'react';
import description from '../../constant/Images/description-image.png'
import { details } from '../../constant/platform-benefits';

const PlatformBenefits = () => {
  return (
    <div className="flex flex-col bg-white px-[15%] py-[10%]">
      <div className="text-5xl teacking-[-0.01em] px-[15%] text-center mb-16">
        {details.title}
      </div>
      <div className='flex flex-col px-[15%] py-[10%]'>
        <div className='flex flex-row'>
          <div className='flex flex-col border-r-2 border-b-2 pr-10 py-10 '>
            <img src={description} alt="description" height={74} width={74} />
            <span className='w-1/2'>Saves on power consumption & related costs</span>
          </div>
          <div className='flex flex-col items-end border-b-2 py-10 pl-36'>
            <img src={description} alt="description" height={74} width={74}/>
            <span className='text-right w-1/2'>Lowers downtimes</span>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col border-r-2 border-b-2 py-10 '>
            <img src={description} alt="description" height={74} width={74} />
            <span className='w-1/4'>Detects power thefts.</span>
          </div>
          <div className='flex flex-col items-end border-b-2 py-10 pl-36'>
            <img src={description} alt="description" height={74} width={74} className='mr-36' />
            <span className='w-1/2'>Ensures smart monitoring and control of the street light infrastructure.</span>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col border-r-2 border-b-2 py-10 '>
            <img src={description} alt="description" height={74} width={74} />
            <span className='w-3/4'>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage
              failures, etc.</span>
          </div>
          <div className='flex flex-col items-end border-b-2 py-10 pl-36 '>
            <img src={description} alt="description" height={74} width={74} />
            <span className='w-1/2'>Ensures security in the neighborhood</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default PlatformBenefits;
