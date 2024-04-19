import React, {useState, useEffect} from 'react'
import { BallCanvas } from '../components/canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook
import { styles } from "../styles";

const Tech = () => {

  const { language } = useLanguage(); // Get the selected language from the context
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1090px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  

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
    <div className='w-28 h-28 flex flex-col items-center justify-center' key={technology.name}>
      {isMobile ? (
        <img src={technology.icon} className='object-contain h-20 w-20'></img>
      ) : (
        <BallCanvas icon={technology.icon}></BallCanvas>
      )}
      <p className='text-center'>{technology.name}</p>
    </div>
  ))}
</div>


   

    </div>
    
  )
}

export default SectionWrapper(Tech, "");