import React from 'react'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <motion.main 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className="text-xl text-white">
      <section className='container mb-20'>
        <h1 className='header'>Get in touch</h1>
          <div className='border-[1px] rounded-3xl border-stone-900 p-5'>
            <p className='font-bold'>Contact us on discord if you want to help us create our games!</p>
            <p className='font-bold'>Discord: <a href="https://discord.gg/QnxXUCqeWz" target="blank" className='text-blue-700 underline font-normal'>here</a></p>
            <p className='font-bold'>Email: <span className='font-normal'>merostudios@yahoo.com</span> </p>
          </div>
      </section>
    </motion.main>
  )
}
