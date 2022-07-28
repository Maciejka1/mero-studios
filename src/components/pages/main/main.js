import React from 'react'
import styles from './Main.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import landingImage from "../../images/landingImage.png"
export default function Main() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className="text-xl text-white">
      <div className={styles.landing + " bg-cover"}>
        <div className='container'>
          <div className='flex flex-wrap justify-center items-center h-[70vh] gap-5 '>
            <div>
              <h1 className='text-5xl leading-[80px] md:text-6xl md:leading-[80px] font-bold '>
                <span className='bg-violet-400 p-2'>Amazing</span> games <br/> done right.
              </h1>
              <div className='flex flex-wrap gap-2 mt-5'>
                <a href="#portfolio" className='btn bg-violet-400 hover:bg-violet-500 transition-all'>See our portfolio</a>
                <Link to="/contact" className='btn border-violet-400 border-[2px] hover:bg-violet-500 hover:border-violet-500 transition-all'>
                  Get in touch
                </Link>
              </div>
            </div>
            <div>
              <img src={landingImage} alt="never found game" className='rounded-xl'/>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
