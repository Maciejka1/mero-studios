import React from 'react'
import styles from './main.module.css'
import { motion } from 'framer-motion'
export default function Main() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className=" text-xl text-white mt-0 bg-black" 
    >
      <div className='container'>
        <div className='flex justify-center items-center h-[70vh] '>
          <div>
            <h1 className='text-6xl font-bold leading-[80px]'>
              <span className='bg-violet-400 p-2'>Amazing</span> games <br/> done right.
            </h1>
            {/* <h2 className='max-w-xl'>
              Fabulous games created in Unity and Unreal Engine 5.
              Lorem ipsum dolor sit amet?
            </h2> */}
            <div className='flex gap-2'>
              <div className='btn bg-violet-400'>See our portfolio</div>
              <div className='btn border-violet-400 border-[2px]'>Get in touch</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
