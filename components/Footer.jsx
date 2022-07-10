import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full p-4  text-lg'>
        <Link href="https://nakkerud.studio" target="_blank"> 
        Made by
        Nakkerud Studio, 2022
        </Link>
    </div>
  )
}

export default Footer