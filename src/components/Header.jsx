import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
  return (
    <>
        <nav className="bg-orange-400">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* icons */}
                    <div className='flex text-black gap-3'>
                        <AiOutlineHeart />
                        <AiOutlineSearch />
                        <AiOutlineUser />
                    </div>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-blue " aria-current="page">Home</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-black ">Shop</a>
                        </li>
            
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-black ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-black ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
