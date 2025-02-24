import React from 'react'
import contactPic from '../assets/contactPic.jpg'
import { EnvelopeIcon,PhoneIcon, HomeIcon} from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: data,
    });

    // Show the message element if the submission is successful
    if (response.ok) {
        setSubmitted(true);
        form.reset();
    } else {
        alert('Form submission failed. Please try again.');
    }
};

  return (
    <div className=''>
      <div className='relative justify-center items-center flex'>
        <img src={contactPic} alt='contactPic' className='h-64 w-3/4 block'/>
      </div>
      <div className='flex-col flex justify-center items-center text-center m-10 mx-auto md:mx-36'>
        <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-gray-500 mt-4">Choosing Italian art paints is not just about wall decoration; it's about inheriting 80 years of European artisan aesthetics. Welcome to book an appointment to experience tactile samples at our showroom.</p>
      </div>
      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <ul>
                <li className="mt-12 flex-col flex justify-center items-center">
                    <button className='rounded-xl bg-blue-200 p-2.5'><EnvelopeIcon className='h-8 w-8'/></button>
                    <h2 className="text-gray-800 text-base font-bold">Email:</h2>
                    <a href="mailto:artepaintstudio@gmail.com" alt="email" className="black text-sm ml-4">
                        <strong>artepaintstudio@gmail.com</strong>
                    </a>
                  </li>
                  <li className="mt-12 flex-col flex justify-center items-center">
                    <div className='flex justify-center items-center space-x-2'>
                    <button className='rounded-xl bg-blue-200 p-2.5'><PhoneIcon className='h-8 w-8'/></button>
                      <p>/</p>
                      <SocialIcon className="" target="_blank" url="https://wa.me/85284001733" label="Whatsapp link" network='whatsapp'/>
                    </div>

                    <h3 className="text-gray-800 text-base font-bold">Phone/Whatsapp:</h3>
                    <a href="tel:+85284001733" data-rel="external" alt="phone number" className="black text-sm ml-4 mx-4">
                        <strong>+852 8400 1733</strong>
                    </a>
                </li>
                {/*<li class="mt-12 flex-col flex justify-center items-center">
                <button className='rounded-xl bg-blue-200 p-2.5'><HomeIcon className='h-8 w-8'/></button>
                    <h2 class="text-gray-800 text-base font-bold">Address:</h2>
                </li>*/}
            </ul>
            <div>
                <form action="https://script.google.com/macros/s/AKfycbzH8-29RnSA6aKXYWBuSH-benZDVkwia8HlqEQypXby7b6E8TLm7j3fxIP5zWjrDuEs7g/exec"
                className="space-y-6" method="POST" name="html trial" onSubmit={submitForm}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I'm interested in*</label>
                    <textarea id="interest" name="interest" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location of project*</label>
                    <input type="text" id="location" name="location" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                  </div>
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Desired start date</label>
                    <input type="date" id="start-date" name="start-date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                  </div>
                  <div>
                    <label htmlFor="source" className="block text-sm font-medium text-gray-700">How did you hear about ARTÈPAINT?</label>
                    <textarea id="source" name="source" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Other notes</label>
                    <textarea id="notes" name="notes" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                  </div>
                  <div className='flex space-x-1'>
                    <input type="checkbox" id="email-list" name="email-list" className="mt-1"/>
                    <label className="block text-sm font-medium text-gray-700">Sign up for getting the newest information!</label>
                  </div>
                  <button type="submit" className="bg-blue-300 hover:bg-blue-400 text-black py-2 px-4 rounded-md hover:scale-110 transform transition-transform duration-300">Submit</button>
                </form>
                {submitted && (
                <p id="submitMessage" className="text-green-600 bg-gray-100 font-bold mt-4 p-1 rounded-lg px-2">Submitted, we will contact you soon.</p>
                )}
              </div>
        </div>
    </div>
  )
}

export default Contact