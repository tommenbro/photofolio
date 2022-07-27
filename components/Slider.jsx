import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Slider = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
      <div className='relative flex justify-center p-4'>

        {SliderData.map((slide, index) => {

          return (
            <div key={index} className={index === currentSlide ? 'opacity-[1] ease-in duration-700' : 'opacity-[0]'}>

              <AiOutlineArrowLeft onClick={previousSlide} size={60} className='hover:text-white absolute top-[50%] left-[30px] text-gray-100/90 cursor-pointer select-none z-[2]' />
            {index === currentSlide && (
              <Image src={slide.image} alt='/' width='1280' height="720" objectFit="cover" />
            )}

            <AiOutlineArrowRight onClick={nextSlide} size={60} className='hover:text-white absolute top-[50%] right-[30px] text-gray-100/90 cursor-pointer select-none z-[2]' />
            </div>
          
          )
        })}
        </div>
    </div>
  )
}

export default Slider