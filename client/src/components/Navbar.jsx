import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleNavbar = () => {
  setIsOpen(!isOpen);
};

const CloseNavbar = () => {
  setIsOpen(False);
};

  return (
    <div className="flex items-center justify-between p-4 bg-stone-100 text-white h-32 fixed w-full top-0 z-50">

        <nav >
            <div>
                <button type="button" className="-m-2.5 ml-8 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleNavbar}>
                  <Bars3Icon aria-hidden="true" className="h-8 w-8" />
                  <span className="sr-only">Open main menu</span>
                </button>
            </div>
            <div className={`fixed top-0 left-0 w-full lg:w-96 md:w-3/4 h-full bg-stone-50 shadow-lg transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}>
                <div className='-m-2.5 mt-20 inline-flex items-center w-full justify-end rounded-md p-2.5 text-gray-700'>
                  <button type="button" className="" onClick={toggleNavbar}>
                    <XMarkIcon className="h-8 w-8"/>
                    <span className="sr-only">Close main menu</span>
                  </button>
                </div>
                <ul className="px-4 space-y-4 text-black text-lg">
                    <Link to="/home" onClick={toggleNavbar}><li className="px-4 py-2 hover:bg-gray-300 hover:underline hover:underline-offset-2 hover:font-bold">Home</li></Link>
                    <Link to="/aboutUs" onClick={toggleNavbar}><li className="px-4 py-2 hover:bg-gray-300 hover:underline hover:underline-offset-2 hover:font-bold">About Us</li></Link>
                    <Link to="/ourServices" onClick={toggleNavbar}><li className="px-4 py-2 hover:bg-gray-300 hover:underline hover:underline-offset-2 hover:font-bold">Our Services</li></Link>
                    <Link to="/contact" onClick={toggleNavbar}><li className="px-4 py-2 hover:bg-gray-300 hover:underline hover:underline-offset-2 hover:font-bold">Contact</li></Link>
                </ul>
            </div>
        </nav>
        <div className='justify-center mx-auto '>
        <Link to="/home" onClick={CloseNavbar}><img src={logo} className='h-32 w-auto' alt="logo"/></Link>
        </div>

    </div>

  )
}

export default Navbar