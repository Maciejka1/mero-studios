import React from 'react'
import './main.module.css'
import { motion } from 'framer-motion'
export default function Main() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className="container" 
    >
      <div className='flex justify-center items-center h-[70vh]'>
        <h1><span className=''>Amazing</span> games done right.</h1>
      </div>
    </motion.div>
  )
}
