import React from 'react'
import ImageOne from '../images/P-1.jpg';
import ImageTwo from '../images/p-2.jpg';

const Content = () => {
    return (
        <>
        <div className='menu-card'>
          <img src={ImageOne} alt='potato' className='h-full rounded-xl mb-20 shadow' />
          <div className='flex flex-col justify-center items-center'>
              <h2 className='text-2xl mb-3 text-gray-800 font-semibold'>POTATA MASALA</h2>
              <p className='mb-2'>Masala potato with barbeque dip</p>
              <span>5$</span>
          </div>
        </div>
        <div className='menu-card'>
          <img src={ImageTwo} alt='potato' className='h-full rounded-xl mb-20 shadow' />
          <div className='flex flex-col justify-center items-center'>
              <h2 className='text-2xl mb-3 text-gray-800 font-semibold'>POTATA RARA</h2>
              <p className='mb-2'>Masala potato with barbeque dip</p>
              <span>5$</span>
          </div>
        </div>
        </>
    )
}

export default Content
