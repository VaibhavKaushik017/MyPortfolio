import React from 'react'
import { BsCodeSlash, BsFillPatchCheckFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom'
import Data from './Data';

const Details = () => {
  const { id } = useParams();
  return (
    <>
      {
        Data.map((data)=>{
          if (data.id == id) {
            return (
              <div className='w-[100%] bg-no-repeat bg-gradient-to-r from-purple-50'>
              <div className='flex w-[100%] py-10'>
                <div className='w-[85%] flex flex-col md:flex-row container mx-auto gap-12'>
                  <div className='w-[100%] md:w-1/2'>
                    <video src={data.Video} autoPlay muted loop className='rounded-3xl' />
                  </div>
                  <div className='w-[100%] md:w-1/2'>
                    <p className='flex gap-2 items-center text-[#695AA6]'><BsFillPatchCheckFill />{data.Type}</p>
                    <h2 class="text-2xl font-semibold py-2">{data.Name}</h2>
                    <div className="mb-3 flex items-center gap-3">
                      <BsCodeSlash className="text-red-600" name="code-slash-outline" />
                      <ul className="flex text-yellow-500 font-semibold gap-5">
                        <li>{data.Technology}</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600">{data.Desc}</p>
                    <div className="flex gap-5">
                      <a href={data.Preview} target="_blank">
                        <p className="my-5 py-2 border-2 border-[#009DAE] w-[150px] text-center text-[#009DAE] hover:bg-[#009DAE] hover:text-white transition-[0.5s] rounded-md font-semibold">Preview</p>
                      </a>
                      <a href={data.ViewCode} target="_blank">
                        <p className="my-5 py-2 bg-[#009DAE] w-[150px] text-center text-white rounded-md font-semibold">View
                          Code</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        })
      }
    </>
  )
}

export default Details