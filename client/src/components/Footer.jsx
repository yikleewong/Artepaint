import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex flex-col w-full'>
        <section className="text-center my-4">
            <div className='justify-center items-center flex m-7'>
                <Link to="/contact">
                    <button className='font-bold text-2xl rounded-3xl bg-stone-200 mx-auto p-4 hover:scale-110 hover:bg-stone-400 transform transition-transform duration-200'>
                        ENQUIRY? CONTACT US NOW!
                    </button>
                </Link>
            </div>
            <header className='font-bold text-2xl m-6 '>
                <h1>FOLLOW US!</h1>
            </header>
            <div className="flex justify-center space-x-8 mt-2 mb-6">
                <SocialIcon target="_blank" url="https://www.facebook.com/profile.php?id=61571555213657" label="Our Facebook"/>
                <SocialIcon target="_blank" url="https://www.instagram.com/artepaintdecoration/?fbclid=IwY2xjawIho8hleHRuA2FlbQIxMAABHYD8kBcugf3KYD6DUjL-ywv77K3MerOcqGeMxcAnsY1XtF4wvHoPOWnOfw_aem_B9BCCDPB7tgJzQ7PH4z_6g#" label="Our Instagram"/>
            </div>
        </section>
        <div className="text-center py-4 mt-auto bg-gray-100 text-xs">
            <p>©ARTÈPAINT 2025. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer