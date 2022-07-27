import React from 'react'
import { GramData } from './GramData'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const Gram = ({grams}) => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-16'>
        <p className='text-2xl font-bold'>Follow us on Instagram</p>
        <p className='pb-4'>@NorthernLights</p>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
        {GramData.map((gram, index) => {

        return (
            <div key={index} className="relative hover:cursor-pointer">
            <Image className='w-full h-full' layout='responsive' src={gram.image} alt='/' width='1440' height="600" objectFit="cover" />
            {/* Overlay */}
            <div className='opacity-0 hover:opacity-100'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
            <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50'>
             <FaInstagram className='text-gray-300  z-10' size={75}></FaInstagram>
            </div>
            </a>
           </div>
        </div>
        )
        })}
        </div>
    </div>
  )
}

export default Gram