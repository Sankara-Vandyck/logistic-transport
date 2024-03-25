import React from 'react';

import PriceCalculator from '../utils/PriceCalculator';


const Logo = () => {
  return (
    <div className='flex justify-between font-[white] mr-9 pt-5'>
      <div className='flex ml-4 space-x-5'>
        <div className='flex ml-4'>
          <div className="">
            <img src='../assets/images/image-4.png' alt='logo' />
          </div>
        </div>
        <div className='w-[145px]'>
          <h1 className='text-4xl'>Boxgiant</h1>
          <p className='text-[16px]'>Transport & Cargo</p>
        </div>
      </div>
      <div>
        <PriceCalculator />
      </div>
    </div>
  );
}

export default Logo