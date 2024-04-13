import React, {useState, useRef} from 'react'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useLanguage } from '../LanguageContext';


import { styles } from '../styles'
import { ComputersCanvas, EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {

  const { language, changeLanguage } = useLanguage();

  const formRef = useRef()
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: ""
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { target } = e;
  const { name, value } = target;

  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Anttoni Tornikoski",
        from_email: form.email,
        to_email: "anttoni.tornikoski@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};




  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-0.75 bg-[#915eff] p-8 rounded-2xl'>
        
        <p className={styles.sectionSubText}>{language === 'en' ? 'Get in touch' : 'Ota yhteyttä'}</p>
        <h3 className={styles.sectionHeadText}>{language === 'en' ? 'Contact' : ' Lähetä viesti'}</h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'><span className='font-medium mb-4'>{language === 'en' ? 'Your name' : 'Nimi'}</span>
          <input 
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={language === 'en' ? 'Whats your name?' : 'Mikä on nimesi?'}
          className='bg-tertiary py-4 px-6 
          placeholder:text-secondary text-white rounded-lg
           outlined-none border-none font-medium'/>

          </label>
          <label className='flex flex-col'><span className='font-medium mb-4'>{language === 'en' ? 'Your email' : 'Sähköposti'}</span>
          <input 
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={language === 'en' ? 'Whats your email' : 'Kerro sähköpostisi'}
          className='bg-tertiary py-4 px-6 
          placeholder:text-secondary text-white rounded-lg
           outlined-none border-none font-medium'/>
           
          </label>
          <label className='flex flex-col'><span className='font-medium mb-4'>{language === 'en' ? 'Your message' : 'Viesti'}</span>
          <textarea 
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={language === 'en' ? 'What do you want to say?' : 'Mitä haluat sanoa?'}
          className='bg-tertiary py-4 px-6 
          placeholder:text-secondary text-white rounded-lg
           outlined-none border-none font-medium'/>
           
          </label>

          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-fit
           font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...': 'Send' }</button>
        </form>
      </motion.div>


      <motion.div variants={slideIn("right", "tween", 0.2, 1)} 
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact") 