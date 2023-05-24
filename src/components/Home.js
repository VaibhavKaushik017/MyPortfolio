import React from 'react'

const Home = () => {
    return (
        <>
            <div className='w-[100%] bg-gradient-to-r from-purple-50'>
                <div className='w-[85%] flex container mx-auto py-6 justify-around gap-5'>
                    <div style={{backgroundImage: `url('b1.png')`,}} className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 bg-cover bg-no-repeat">
                        <img src='me.jpg' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-0 sm:gap-1 md:gap-2 lg:gap-3 w-1/2'>
                        <h2 class="text-sm sm:text-lg md:text-xl lg:text-3xl font-semibold text-[#695AA6]">I'm</h2>
                        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-bold ">Vaibhav Kaushik
                        </h1>
                        <h2 class="animate-pulse text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold ">Frontend Web
                            Developer</h2>
                        <a class="border-[#695AA6] border-2 rounded-3xl shadow-lg text-sm w-[120px] md:text-lg md:w-[150px] text-center text-[#695AA6] hover:bg-[#695AA6] hover:text-white py-1 md:py-2 font-semibold mt-4 lg:mt-8"
                            href="#">Download CV</a>
                        <hr class="w-[25%]" />
                    </div>
                </div>
                
                <div className='w-[85%] flex flex-col md:flex-row container mx-auto justify-around gap-10 md:gap-2 py-20'>
                    <div className='text-center md:text-left'>
                        <h2 className='text-sm lg:text-lg font-semibold text-[#695AA6] mb-2'>SERVICES</h2>
                        <h1 className='text-2xl lg:text-3xl font-bold break-words inline-block max-w-[90%]'>I Provide Wide Range of
                    Digital Services</h1>
                    </div>
                    <div className='flex text-center gap-2 lg:gap-6 xl:gap-10'>
                        <div className='bg-white drop-shadow-sm px-3 py-4 md:px-4 md:py-10'>
                            <div className='my-4 flex justify-center'>
                                <img className='h-14 w-14 md:h-20 md:w-20' src='service-1.png' alt="service-1" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold my-4'>UI/UX DESIGN</h1>
                            <p className='text-sm text-gray-500'>From the initial design to the final development stage, your dedicated</p>
                        </div>
                        <div className='bg-white drop-shadow-sm px-3 py-4 md:px-4 md:py-10'>
                            <div className='my-4 flex justify-center'>
                                <img className='h-14 w-14 md:h-20 md:w-20' src='service-2.png' alt="service-2" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold my-4'>WEB DEVELOPMENT</h1>
                            <p className='text-sm text-gray-500'>From the initial design to the final development stage, your dedicated</p>
                        </div>
                        <div className='bg-white drop-shadow-sm px-3 py-4 md:px-4 md:py-10'>
                            <div className='my-4 flex justify-center'>
                                <img className='h-14 w-14 md:h-20 md:w-20' src='service-3.png' alt="service-3" />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold my-4'>DIGITAL MARKETING</h1>
                            <p className='text-sm text-gray-500'>From the initial design to the final development stage, your dedicated</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home