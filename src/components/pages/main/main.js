import React from 'react'
import styles from './Main.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Game from "../../templates/game/game"
import landingImage from "../../images/landingImage.png"
import HordeShooter from '../../images/videos/HordeShooter.mp4'
import AboutImage from '../../images/aboutImage.png'
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
         desc="​Guns N' Speed is fast paced shooter with hordes of enemies and explosives barrels. Last as long as you can! Enemies can kill you with one hit!"
         download="https://merostudio.itch.io/guns-n-speed"
         video={HordeShooter}
        />
      </section>
      <div className='container '>
        <section className='mb-20'>
            <h1 className='header'>About us</h1>
            <div className='flex'>
              <p className='max-w-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit deserunt impedit at est tenetur, dolore vero neque molestias, labore similique delectus, odit mollitia sequi totam. Unde nisi non est recusandae dolorum accusantium, natus dolor expedita facere doloribus iure labore, aut voluptas tempora accusamus quia sit sequi repellendus commodi nostrum eos earum repellat aspernatur? Atque!</p>
              <div>
                <img src={AboutImage} alt=""/>
              </div>
            </div>
        </section>
        <section className='mb-20'>
          <h1 className='header'>FAQ</h1>
          <div>
            <Faq 
            title="In which do technologies do we make our games?"
            content=""
            />
            <Faq 
            title="its fully functional! add animations"
            content=""
            />
          </div>
        </section>
      </div>
    </motion.main>
  )
}
