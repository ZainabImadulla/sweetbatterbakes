import Link from 'next/link'
import React, {useState} from 'react'
import Image from 'next/image'
import Logo from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/companyLogo.png"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Menu } from '@headlessui/react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <div className = 'fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-blush font-serif'>
            <div className = 'max-w-{1240px} m-auto flex justify-between items-center p-4 text-gray-700'>
                <Link href = '/'>
                    <Image src = {Logo} height = {80} width = {200} />
                </Link>
                <ul className = 'hidden sm:flex'>
                    <li className = 'p-4'>
                        <Link href = '/'> Home</Link>
                    </li>
                    <li className = 'p-4'>
                        <Link href = '/about'> About Us</Link>
                    </li>
                    <li className = 'p-4'>
                        <Link href = '/contact'>Contact Us</Link>
                    </li>
                    <li className = 'p-4'>
                        <Link href = '/menu'> Menu</Link>
                    </li>
                </ul>

                {/*Mobile Button*/}
                <div onClick = {handleNav} className = 'block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size ={20}/>}
                </div>

                {/* Mobile Menu */}

                <div className ={nav 
                ? ' sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blush text-center ease-in duration-300'
                : ' sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blush text-center ease-in duration-300'
                }
                >
                    <ul>
                        <li className = 'p-4 text-4xl hover:text-gray-500'>
                            <Link href = '/'> Home </Link>
                        </li>
                        <li className = 'p-4 text-4xl hover:text-gray-500'>
                            <Link href = '/about'>About Us</Link>
                        </li>
                        <li className = 'p-4 text-4xl hover:text-gray-500'>
                            <Link href = '/contact'> Contact Us</Link>
                        </li>
                        <li className = 'p-4 text-4xl hover:text-gray-500'>
                            <Link href = '/menu'> Menu</Link>
                        </li>
                    </ul>

                </div>


            </div>
        </div>
    )
}

export default Navbar