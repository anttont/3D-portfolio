import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook
import { styles } from "../styles";

const Tech = () => {

  const { language } = useLanguage(); // Get the selected language from the context
  

  return (
    
    <div>
      <div>
      <p className={`${styles.sectionSubText} text-white`}>
        {language === 'en' ? 'Technology' : 'Teknologia'}
        </p>
        <h2 className={`${styles.sectionHeadText} text-white pb-10`}>
        {language === 'en' ? 'Tools I have used' : 'Käyttämäni työkalut'}
        </h2>
    </div>
    

    <div className='pt-6 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}></BallCanvas>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default SectionWrapper(Tech, "");