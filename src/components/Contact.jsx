import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from '../LanguageContext';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const { language } = useLanguage();

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for sliding in the same direction, -1 for sliding back

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleReturn = () => {
    setDirection(-1);
    setSubmitted(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      if (language === "en") {
        alert("Please fill in all fields");
      } else {
        alert("Ole hyvä ja täytä kaikki kentät");
      }
      return;
    }

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
          setDirection(1);
          setSubmitted(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          if (language === "en") {
            alert("Something went wrong :(");
          } else {
            alert("Jotain meni vikaan :(");
          }
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full green-pink-gradient p-[2px] p-8 rounded-2xl'
      >
        <div className='bg-[#0a0a0a] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col'>
          <AnimatePresence>
            {submitted ? (
              <motion.div
                key="thankYou"
                initial={{ x: direction === 1 ? 300 : 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? 300 : 300, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className={`${styles.sectionHeadText} text-white`}>
                  {language === 'en' ? 'Thank you!' : 'Kiitos!'}
                </p>
                <p className='text-white mt-4'>
                  {language === 'en' ? 'I will get to you as soon as possible.' : 'Otan teihin yhteyttä mahdollisimman pian.'}
                </p>
                <button
                  onClick={handleReturn}
                  className='bg-[#131314] py-3 px-8 outline-none w-fit text-fit font-bold shadow-md shadow-primary rounded-xl mt-8'
                >
                  {language === 'en' ? 'Return' : 'Takaisin'}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className={`${styles.sectionHeadText} text-white`}>
                  {language === 'en' ? 'Get in touch' : 'Ota yhteyttä'}
                </p>
                <h3 className={`${styles.sectionSubText} text-white`}>
                  {language === 'en' ? 'You can contact me with this form' : ' Voit ottaa minuun yhteyttä tässä'}
                </h3>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className='mt-12 flex flex-col gap-8'
                >
                  <label className='flex flex-col'>
                    <span className='font-medium mb-4'>{language === 'en' ? 'Your name' : 'Nimi'}</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'What is your name?' : 'Mikä on nimesi?'}
                      className='bg-[#131314] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                    />
                  </label>
                  <label className='flex flex-col'>
                    <span className='font-medium mb-4'>{language === 'en' ? 'Your email' : 'Sähköposti'}</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'What is your email?' : 'Mikä on sähköpostiosoitteesi?'}
                      className='bg-[#131314] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                    />
                  </label>
                  <label className='flex flex-col'>
                    <span className='font-medium mb-4'>{language === 'en' ? 'Your message' : 'Viesti'}</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'What do you want to say?' : 'Mitä haluat sanoa?'}
                      className='bg-[#131314] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                    />
                  </label>
                  <button
                    type="submit"
                    className='bg-[#131314] py-3 px-8 outline-none w-fit text-fit font-bold shadow-md shadow-primary rounded-xl'
                  >
                    {loading
                      ? language === 'en'
                        ? 'Sending...'
                        : 'Lähetetään...'
                      : language === 'en'
                        ? 'Send'
                        : 'Lähetä'
                    }
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");


