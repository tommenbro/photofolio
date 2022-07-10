import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const toggleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleColor = () => {
            if(window.scrollY >= 90) {
                setColor('#fff')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', handleColor)
    }, []) 

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in-out duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p4- text-white '>
            <Link href="/">
            <h1 style={{color: `${textColor}`}} className='font-bold text-3xl pl-4 hover:cursor-pointer'>Northern Lights</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href="/">Home</Link>
                </li>
                <li className='p-4'>
                    <Link href="/#gallery">Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href="/photofolio">Photofolio</Link>
                </li>
                <li className='p-4'>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            {/* Mobile icon */}
            <div onClick={toggleNav} className='sm:hidden block z-10'>
                {nav ? <AiOutlineClose size={25} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={25} style={{color: `${textColor}`}} />}
            </div>
            {/* Mobile menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200'}>
            <ul>
                <li onClick={toggleNav} className='p-4 text-4xl hover:text-gray-300'>
                    <Link href="/">Home</Link>
                </li>
                <li onClick={toggleNav} className='p-4 text-4xl hover:text-gray-300'>
                    <Link href="/#gallery">Gallery</Link>
                </li>
                <li onClick={toggleNav} className='p-4 text-4xl hover:text-gray-300'>
                    <Link href="/photofolio">Photofolio</Link>
                </li>
                <li onClick={toggleNav} className='p-4 text-4xl hover:text-gray-300'>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav