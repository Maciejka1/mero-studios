import React from 'react'
import './main.module.css'
import { motion } from 'framer-motion'
export default function Main() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className="container text-xl" 
    >
      <div className='flex justify-center items-center h-[70vh]'>
        <div>
          <h1 className='text-6xl font-bold leading-[80px]'><span className='bg-violet-400 p-2 '>Amazing</span> games <br/> done right.</h1>
          {/* <h2 className='max-w-xl'>
            Fabulous games created in Unity and Unreal Engine 5.
            Lorem ipsum dolor sit amet?
          </h2> */}
          <div className='btn-primary'>See our portfolio</div>
        </div>

      </div>
    </motion.div>
  )
}
