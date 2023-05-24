import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='w-[100%] bg-gradient-to-r from-purple-50'>
                <div className='flex p-6 justify-between items-center container mx-auto w-[85%]'>
                    <NavLink to="/"><h1 className='text-lg md:text-2xl text-[#695AA6] font-bold'>My Portfolio</h1></NavLink>
                    <ul className='lg:flex gap-10 text-gray-500 font-semibold hidden'>
                        <NavLink to="/"><li className='hover:text-gray-900'>Home</li></NavLink>
                        <NavLink to="/about"><li className='hover:text-gray-900'>About</li></NavLink>
                        <NavLink to="/projects"><li className='hover:text-gray-900'>Projects</li></NavLink>
                        <NavLink to="/contact"><li className='hover:text-gray-900'>Contact</li></NavLink>
                        <li><a className="bg-blue-50 border-2 border-blue-900 py-2 px-5 text-blue-900" href="https://www.linkedin.com/in/vaibhav-kaushik-558262269/" target="_blank">LinkedIn</a></li>
                    </ul>
                    <a className="inline-block py-2 relative text-[#009DAE] px-5 btn__submit rounded-md overflow-hidden text-sm font-bold transition-[.5s]"
                        href="https://www.fiverr.com/vaibhav017" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>FIVERR
                    </a>
                </div>
            </div>
        </>
    )
}

export default Nav