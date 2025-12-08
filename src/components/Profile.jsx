import React from 'react'
import { motion, time } from 'framer-motion'
import {assets} from '../assets/assets'
import Typewriter from './TypeWriter'


const Profile = () => {
  return (
   <motion.div
   
   initial={{opacity:0, y:50}}
   whileInView={{opacity:1, y:0}}
   transition={{duration:0.6, ease:'easeOut'}}
   viewport={{once:true}}
   id='home'
   className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100 '
   >

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

      {/**the div for the left side i.e the transition */}
    <div className=" md:w-1/2 mb-10 md:mb-0">

    <h1 className=' text-4xl md:text-6xl font-bold mb-4'>
      Hi, I'm <span>Sivaprasad</span>
    </h1>
    
    {/* 🎯 FIX APPLIED HERE: Replaced <h2> with <div> */}
    <div className='text-2xl md:text-4xl font-semibold mb-6'>
      <Typewriter/>
    </div>

    {/* The commented out <h2> below is unnecessary now */}
    {/* <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
      Full Stack Developer
    </h2> */}
    <p className='text-lg text-gray-300 mb-8'>
      I architect and deploy end-to-end web applications, handling everything from database design to dynamic user interfaces.
      </p>
      <div className="flex space-x-4">
        <a href='#projects' className='px-6 py-3 border border-purple rounded-2xl font-medium hover:bg-purple-800 transition duration-300'>
          My works
          </a>
        <a href='#contact'className='px-6 py-3 border border-purple rounded-2xl font-medium hover:bg-purple/20 transition duration-300'>Contact Me</a>
      </div>
    </div> 

      {/** the right side div i.e the image */}
      <div className='md:w-1/2 flex justify-center'>
        <div className="relative w-64 h-64 md:w-80 md:h-80">
        
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-70">

            <motion.img
            animate={{y:[0,-20,0]}}
            transition={{
              duration:4,
              repeat:Infinity,
              repeatType:"loop",
              ease:"easeInOut"
            }}
              className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float' 
              // src={assets.profileImg} alt="Profile Img" 
                        src={assets.profileImg7} alt="Profile Img"
            />

          </div>
        </div>
      </div>

    </div>
    
   </motion.div>
  )
}

export default Profile

