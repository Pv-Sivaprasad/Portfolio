import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCards from './ProjectCards'
import { FaArrowRight } from 'react-icons/fa'


const Project = () => {
  return (
   <motion.div
   
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 1, ease: 'easeOut' }}
   viewport={{ once: false, amount: 0.1 }}
   id='projects'
   className='py-20 bg-dark-200'
   >
    <div className="container mx-auto px-6">

        <h2 className='text-3xl font-bold text-center mb-4'>My
            <span className='text-purple p-1'>Projects</span>
        </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>My recent works</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/**project cards */}

                {
                    projects.map((project, index)=>(
                        <ProjectCards key={index} {...project}/>
                    ))
                }

            </div>
            <div className="text-center mt-12">
                {/* <a href="#" className=' inline-flex items-center px-6 py-3 border border-purple 
                font-medium rounded-lg  hover: bg-purple/20 transition duration-300'> */}
                <a href="https://github.com/Pv-Sivaprasad?tab=repositories" className=' inline-flex items-center px-6 py-3 border  border-purple
                     font-medium rounded-lg hover:bg-purple/20 transition duration-300'>

                    <span>View more projects</span>
                    <FaArrowRight className='ml-2'/>
                </a>
            </div>
    </div>

   </motion.div>
  )
}

export default Project
