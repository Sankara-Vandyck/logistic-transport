import React from 'react'
import ParentComponent from './ParentComponent'


const Logo = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex ml-4'>
        <div className='flex ml-4'>
            <p>Logistic</p>
        </div>
        <div className=''>
            <p><span>Logistic</span>Transport & Cargo</p>
        </div>
        </div>
        <div>
           <ParentComponent />
            </div>
          </div>
  )
}

export default Logo