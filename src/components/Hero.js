import React from 'react'
import {Link} from 'react-router-dom';
const Hero = () => {
    return (
        <div>
            <div className='bg-white mt-40 flex flex-col justify-center items-center'>
                <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-gray-800 mb-10 font-black'>
                POTATES
                </h1>
                <Link className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce font-black mt-10'>Order Now</Link>
            </div>
        </div>
    )
}

export default Hero
