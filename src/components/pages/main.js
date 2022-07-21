import React from 'react'
import { motion } from 'framer-motion'
export default function Main() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className="pt-20"
    >
      Main
      <a href="https://example.com">test</a>
    </motion.div>
  )
}
