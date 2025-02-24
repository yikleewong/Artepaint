import React, { useState } from 'react'
import banner3 from '../assets/banner3.jpg'
import Photo from '../components/Photo';


const OurDesign = () => {

  return (
    <div>
      <div className='relative justify-center items-center flex'>
          <img src={banner3} alt='banner3' className='h-64 w-3/4 block'/>
      </div>
      <div className=" mx-auto lg:mx-36 px-8 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Gallery</h1>
        <Photo/>
      </div>
    </div>
  )
}

export default OurDesign