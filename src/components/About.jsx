import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'


const About = () => {
    return (
        <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className="container mx-0 px-6">
                {/*heading*/}
                <h2 className='text-3xl font-bold text-center mb-4 '>About
                    <span className='text-purple p-1'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto'>Always learning and adapting, my goal is to leverage cutting-edge technology to build the next generation of scalable applications.</p>

                {/*image and passion*/}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/*image*/}

                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.profileImg7} alt="pro" />
                    </div>
                    {/*text and content*/}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className="rounded-2xl p-8">
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'> Passionate and self-motivated web developer with 2 years of hands-on experience in building scalable and efficient
                                applications using the MERN stack and Microservices architecture. Constantly striving to improve my skills and
                                stay updated with the latest technologies, I am eager to take on challenging projects that push my technical
                                boundaries. With a strong foundation in backend services, API development, and system design. </p> <p>I aim to
                                contribute to innovative solutions while continuously learning and growing in the ever-evolving web development
                                landscape. </p>

                            {/**cards */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300
                                           hover:-translate-y-2 cursor-pointer'>

                                        <div className='text-purple text-4xl'>

                                            <data.icon/>
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p  className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    </motion.div>
                </div>


            </div>


        </motion.div>
    )
}

export default About
