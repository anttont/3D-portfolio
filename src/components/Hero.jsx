import React from 'react'
import { motion } from "framer-motion"
import  {styles } from  "../styles"
import { ComputersCanvas } from './canvas'
import { useLanguage } from '../LanguageContext';
import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "../components";

const Hero = () => {

  const { language } = useLanguage(); // Get the selected language from the context

  return (
    <section className='relative w-full h-screen mx-auto'>
          
          
          <div className={`${styles.paddingX} absolute inset-0 top-[122px]
         max-w-7xl mx-auto flex flex-col items-start`}>
          <div className='flex flex-row justify-center items-center mt-5'>
            
          </div>
          <div> <h1 className={`text-white ${styles.heroHeadText}`}>
          {language === 'en' ? 'Hi, my name is' : 'Hei, nimeni on'} </h1>
             {/*<p className={`${styles.heroSubText} pt-30 text-white-100`}>
             {language === 'en' ? 'Im a software-developer' : 'Olen ohjelmisto-kehittäjä'} 
                </p> */}
             </div>
          </div>
          <ComputersCanvas />

          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
           items-center '><a href="#about"> <div className='w-[35px] h-[64px] rounded-3xl border-4
            border-secondary flex justify-center items-start p-2'>
              <motion.div animate={{
                y: [0, 24, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                  }} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
              </div>
            </a>
          </div>
    </section>
  )
}

export default Hero