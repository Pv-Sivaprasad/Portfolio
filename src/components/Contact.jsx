import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'

const Contact = () => {

  const form = useRef()

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  })


  const validateForm = (data) => {
    let newErrors = {}

   
    if (!data.name || data.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = "Enter a valid email address"
    }

    // message
    if (!data.message || data.message.trim().length < 3) {
      newErrors.message = "Message must be at least 3 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendEMail = (e) => {
    e.preventDefault()

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value
    }

    // validate
    if (!validateForm(formData)) {
      toast.error("❌ Please update the contact field accordingly ", {
        style: { background: "#333", color: "#fff" },
      })
      return
    }

    // send email
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("✅ Email sent successfully!", {
          style: { background: "#333", color: "#fff" }
        })
        form.current.reset()
      })
      .catch((error) => {
        toast.error("❌ Failed to send message", {
          style: { background: "#333", color: "#fff" },
        })
        console.error(error)
      })
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={sendEMail} className='space-y-6'>

              {/* NAME */}
              <div>
                <label className='block text-gray-300 mb-2'>Your Name</label>
                <input
                  name="name"
                  type="text"
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className='block text-gray-300 mb-2'>Email</label>
                <input
                  name="email"
                  type="email"
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className='block text-gray-300 mb-2'>Message</label>
                <textarea
                  name="message"
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type='submit'
                className='w-full px-6 py-3 bg-purple rounded-lg font-medium cursor-pointer hover:bg-purple-700 transition duration-300'
              >
                Send
              </button>

            </form>
          </div>
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


