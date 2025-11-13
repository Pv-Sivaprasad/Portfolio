import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'


const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >

            <div className="container mx-auto px-6">

                <h2 className='text-3xl font-bold text-center mb-4'>Get In
                    <span className='text-purple p-1'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl  mx-auto  mb-16'>
                    Ready to contribute to your team's success. Let's discuss how I can fill your open role.</p>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">


                    {/**contact Form */}

                    <div className="">
                        <form action="" className=' space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>

                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg 
                                px-4 py-3 outline-none'
                                    type="text" />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-gray-300 mb-2'>Email</label>

                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg 
                                px-4 py-3 outline-none'
                                    type="email" />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>

                                <textarea className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg 
                                px-4 py-3 outline-none'
                                    type="message" />
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium
                             hover:bg-purple-700transition duration-300'>
                                Send
                            </button>
                        </form>
                    </div>

                    {/**contact Information */}

                    <div className="space-y-8">
                        <div className="flex items-start">

                            <div className='text-purple text-2xl mr-4'>

                                <FaMapMarkerAlt />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'>Location</h3>
                                <p className='text-gray-400'>Shoranur, Palakkad
                                    kerala 679121</p>
                            </div>
                        </div>

                        <div className="flex items-start">

                            <div className='text-purple text-2xl mr-4'>

                                <FaEnvelope />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'>Email</h3>
                                <p className='text-gray-400'>sivaprasadpv777@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">

                            <div className='text-purple text-2xl mr-4'>

                                <FaMapMarkerAlt />
                            </div>
                            <div className="">
                                <h3 className='text-lg font-semibold'>Phone</h3>
                                <p className='text-gray-400'>(+91) 7034737573 , 6238912433</p>
                            </div>
                        </div>

                        {/**Follow me */}
                        <div className="pt-4">
                            <h3 className='text-lg font-semibold mb-4'>Follow me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Pv-Sivaprasad" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                                text-purple hover:bg-purple hover:text-white transition duration-300 '>
                                    <FaGithub/>
                                </a>
                                <a href="https://www.linkedin.com/in/sivaprasad-pv/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                                text-blue hover:bg-blue hover:text-white transition duration-300 '>
                                    <FaLinkedinIn/>
                                </a>
                                <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                                text-purple hover:bg-dark hover:text-white transition duration-300 '>
                                    <FaTwitter/>
                                </a>
                                <a href="https://www.instagram.com/this_is_sivaprasadpv/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                                text-purple hover:bg-pink hover:text-white transition duration-300 '>
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </motion.div>
    )
}

export default Contact
