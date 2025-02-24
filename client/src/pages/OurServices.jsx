import React from 'react'
import Photo from '../components/Photo'
import banner2 from '../assets/banner2.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'

const ServiceSection = ({ title, descriptions, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg mb-4 mx-auto">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />
      <h1 className="text-xl font-bold mt-2 text-center ">{title}</h1>
      <ul className="list-disc list-inside mt-2 space-y-1 w-auto lg:w-96">
        {descriptions.map((description, index) => (
          <li key={index} className="text-gray-700">{description}</li>
        ))}
      </ul>
    </div>
  );
}

const Ourservices = () => {

  const services = [
    {
      title: 'Supply and Application of Artistic Paints',
      descriptions: ['Venetian Plaster','Microcement','Metallic Glaze','Patina Effect'],
      image: s1,
    },
    {
      title: 'Customized Design Services',
      descriptions: ['Free 3D Rendering Simulation','Microcement','Exclusive Color Formula Customization','Invisible Repair Technology Application'],
      image: s2,
    },
    {
      title: 'Target Clients',
      descriptions: ['Interior Design Firms','Real Estate Developers','Hotel Management Groups','High-end Private Homeowners'],
      image: s3,
    },
  ];

  return (
    <div >
      <div className='relative justify-center items-center flex'>
          <img src={banner2} alt='banner2' className='h-64 w-3/4 block'/>
      </div>
      <div className='text-center m-6'>
        <h1 className="text-gray-800 text-3xl font-extrabold">Our Services</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto sm:mx-36'>
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              descriptions={service.descriptions}
              image={service.image}
            />
          ))}
      </div>
      <div className='text-center font-bold'>
        <h2>✦ Note: 5-Year Quality Warranty + Annual Free Wall Maintenance ✦</h2>
      </div>
      <div className=" mx-auto lg:mx-36 px-8 py-6 mt-5"><Photo/></div>
    </div>
  )
}

export default Ourservices