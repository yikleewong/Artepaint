import React from 'react'
import banner1 from '../assets/banner1.jpg'
import Photo from '../components/Photo'

const Aboutus = () => {
  return (
    <div>
      <div className='relative justify-center items-center flex'>
          <img src={banner1} alt='abtus_banner' className='h-64 w-3/4 block'/>
      </div>
      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
          <div className='items-center justify-center flex font-extrabold text-4xl mt-5'>
            <header>ABOUT US</header>
          </div>
          <div>
            <h1 className='font-bold m-4 text-xl'>What is Artēpaint?</h1>
            <p className='bg-sky-100 p-5 rounded-2xl'>Artēpaint Decoration Studio specializes in introducing top-tier Italian art paint brands for high-end residential, commercial spaces, and design projects. As the official authorized distributor of Rivedil in Greater China, we are dedicated to combining the royal craftsmanship of Europe with modern eco-friendly technology to create unique spatial art for our clients.</p>
            <h2 className='font-bold m-4 text-xl'>Core Advantages</h2>
            <ul className='bg-sky-100 p-5 rounded-2xl space-y-2 list-disc list-inside'>
              <li>100% Genuine Italian Import | Certified by EU ECOLABEL</li>
              <li>Over 200+ Special Effect Textures | Imitation Stone, Metal Rust, Velvet Texture, etc.</li>
              <li>Italian Certified Technician Team Stationed in Hong Kong | Providing Professional Construction Guidance</li>
              <li>Years of Local Construction Experience</li>
            </ul>
          </div>
      </div>
      <div className=" mx-auto lg:mx-36 px-8 py-6"><Photo/></div>

    </div>
  )
}

export default Aboutus