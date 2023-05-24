import React from 'react'
import { BsFillPatchCheckFill, BsCodeSlash } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Data from './Data'

const Projects = () => {
  return (
    <>
      <div className='w-[100%] bg-no-repeat bg-gradient-to-r from-purple-50'>
        <div className='flex w-[100%]'>
          <div className='w-[85%] container mx-auto'>
            <h1 className='text-center pt-10 text-3xl font-semibold'>Latest Projects</h1>
            {
              Data.map((data)=>{
                return(
                  <div className='flex flex-col md:flex-row gap-10 lg:gap-20 my-10'>
              <div className='w-[100%] md:w-[50%]'>
                <img src={data.image} alt='Project 1' />
              </div>
              <div className='flex w-[100%] md:w-[50%] flex-col justify-center'>
                <p className='flex gap-2 items-center text-[#695AA6]'><BsFillPatchCheckFill /> {data.Type}</p>
                <h2 className='text-2xl font-semibold py-2'>{data.Name}</h2>
                <div className='mb-3 flex items-center gap-3'>
                  <BsCodeSlash className='text-red-600' />
                  <ul className='flex text-yellow-500 font-semibold'>
                    <li>{data.Technology}</li>
                  </ul>
                  </div>
                <p className='text-sm text-gray-600'>{data.Desc}</p>
                <NavLink to={`/${data.id}`}><p className="my-5 py-2 bg-[#009DAE] w-[150px] text-center text-white rounded-md font-semibold">View Details</p></NavLink>
              </div>
            </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects