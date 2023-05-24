import React from 'react'

const About = () => {
    return (
        <>
            <div className='w-[100%] bg-no-repeat bg-gradient-to-r from-purple-50'>
                <div className='pt-12 flex flex-col h-[100%] md:flex-row items-center container mx-auto gap-3 justify-between w-[85%]'>
                    <div className='w-[80%]  md:w-2/5'>
                        <img src='me.jpg' alt='profile' />
                    </div>
                    <div className='flex flex-col justify-center items-center text-center md:text-left md:items-start w-[80%] md:w-2/3'>
                        <p className='text-gray-600'>Who Am I?</p>
                        <h1 className='text-[#695AA6] font-bold text-3xl py-2'>About Me</h1>
                        <span className='text-gray-500 py-2'>Hi! My name is Vaibhav Kaushik. I am a Computer Engineering Undergraduate and a technology enthusiast. <br /> <br />
                            I Have a deep interest in Web Development. I have made multiple frontend and full stack projects, you can check out from <b>Projects </b>section. I have been working as a freelancer for 1 year. <br /><br />
                            I wish to use my technical acumen to contribute to a team that creates a positive impact on the society.</span>
                            <a href="#"><p className="hover:bg-[#695AA6] hover:text-white bg-transparent text-center text-[#695AA6] border-2 my-6 w-[150px] p-2 border-[#695AA6] rounded-3xl font-semibold">Download CV</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About