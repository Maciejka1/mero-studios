import { About } from './about';
import React from 'react'
import styles from './Main.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Game from "../../templates/game/game"
import landingImage from "../../images/landingImage.png"
import HordeShooter from '../../images/videos/HordeShooter.mp4'
import Faq from './faq'
export default function Main() {
  return (
    <motion.main
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className="text-xl text-white">
      <section className={styles.landing + " bg-cover"}>
        <div className='container mb-24 md:mb-0'>
          <div className='flex flex-wrap justify-center items-center h-[70vh] gap-5'>
            <div>
              <h1 className='text-5xl leading-[80px] md:text-6xl md:leading-[80px] font-bold'>
                <span className='bgviolet'>Amazing</span> games <br/> done right.
              </h1>
              <div className='flex flex-wrap gap-2 mt-5'>
                <a href="#portfolio" className='btn bg-violet-400 hover:bg-violet-500 transition-all'>See our portfolio</a>
                <Link to="/contact" className='btn border-violet-400 border-[2px] hover:bg-violet-500 hover:border-violet-500 transition-all'>
                  Get in touch
                </Link>
              </div>
            </div>
            <motion.div
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {duration: 3}}}
              exit={{x: 100, opacity: 0, transition: {duration: 1}}}
            >
              <img src={landingImage} alt="never found game" className='rounded-xl hover:rotate-1 transition-all'/>
            </motion.div>
          </div>
        </div>
      </section>
      <section id='portfolio'>
        <Game
        styleRight={false}
        title="Guns N' Speed"
        desc="​Guns N' Speed is fast paced shooter with hordes of enemies and explosives barrels. Last as long as you can!"
        download="https://merostudio.itch.io/guns-n-speed"
        video={HordeShooter}
        />
      </section>
      <div className='container '>
        <About/>
        <section className='mb-20'>
          <h1 className='header'>FAQ</h1>
          <div>
            <Faq
            title="Are you hiring?"
            content="We do not hire anyone. We are group of developers who are making games out of passion."
            />
            <Faq
            title="Are you looking for anyone to write code?"
            content="Yes, if you know how to code in C# and you want to work with real games, please message Mero__#8753 on Discord."
            />
            <Faq
            title="Where can I see your code?"
            content="Code will be available on GitHub soon."
            />
          </div>
        </section>
      </div>
    </motion.main>
  )
}
