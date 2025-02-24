import React from 'react'
import homePic from "../assets/home.jpg"
import abtusPic from "../assets/abtusPic.jpg"
import servicesPic from "../assets/servicesPic.jpg"
import designPic from "../assets/designPic.jpg"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='min-h-screen flex flex-col  overflow-y-auto'>
        <div className="relative">
            <img src={homePic} className='h-auto md:h-homePic-h w-full block' alt='HomePic'/>
        </div>
        <header className="text-center my-4 ">
            <h1 className='text-xl font-bold'>WELCOME TO ARTÈPAINT</h1>
        </header>
        <nav className="text-center mb-4">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                <div className="bg-white p-4">
                    <img src={abtusPic} alt="About Us" className="w-full h-48 object-cover mb-4 rounded-full"/>
                    <h2 className="text-xl font-bold mb-2">ABOUT US</h2>
                    <p className="mb-4 h-auto lg:h-24">A trusted and passionate team that brings to life your vision with creativity and plenty of ideas! We value feelings over things.</p>
                    <button className="border border-black hover:bg-blue-100 hover:scale-110 transform transition-transform duration-300 text-black font-bold py-2 px-4 rounded-full">
                        <Link to="/aboutUs">Learn more</Link>
                    </button>
                </div>
                <div className="bg-white p-4">
                    <img src={servicesPic} alt="Services" className="w-full h-48 object-cover mb-4 rounded-full"/>
                    <h2 className="text-xl font-bold mb-2">SERVICES</h2>
                    <p className="mb-4 h-auto lg:h-24">ARTÈPAINT delivers full interior design services to residential and corporate projects. Let's bring magic to your space!</p>
                    <button className="border border-black hover:bg-blue-100 hover:scale-110 transform transition-transform duration-300 text-black font-bold py-2 px-4 rounded-full">
                        <Link to="/ourServices">Learn more</Link>
                    </button>
                </div>
                <div className="bg-white p-4">
                    <img src={designPic} alt="Our Design" className="w-full h-48 object-cover mb-4 rounded-full"/>
                    <h2 className="text-xl font-bold mb-2">INTERIOR DESIGN</h2>
                    <p className="mb-4 h-auto lg:h-24">We proudly work with artisans around the world to create unique pieces that will complement your home or office space.</p>
                    <button className="border border-black hover:bg-blue-100 hover:scale-110 transform transition-transform duration-300 text-black font-bold py-2 px-4 rounded-full">
                        <Link to="/ourDesign">Learn more</Link>
                        </button>
                </div>
            </section>
        </nav>
    </div>
  )
}

export default Home