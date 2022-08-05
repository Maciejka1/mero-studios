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
        
      </section>
    </motion.main>
  )
}
