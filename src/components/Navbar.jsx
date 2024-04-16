import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinksEN, navLinksFI } from "../constants";
import { logo, menu, close, en, fi } from "../assets";
import { useLanguage } from '../LanguageContext';

const Navbar = () => {

  const { language, changeLanguage } = useLanguage();

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
  }

  const currentFlag = language === 'fi' ? fi : en;
  const navLinks = language === 'fi' ? navLinksFI : navLinksEN

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Anttoni &nbsp;
            <span className='sm:block hidden md:block '> | Tornikoski </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 '>
        
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate" : "text-white"
              } hover:text-[#915eff] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            
          ))}
          <div className='flex flex-row'>
            <img src={currentFlag} alt="Current Language" className='w-8 h-8 object-contain cursor-pointer' onClick={() => handleLanguageChange(language === 'en' ? 'fi' : 'en')} />
            <button className={`text-white font-medium cursor-pointer hover:text-[#915eff] text-[18px]`} onClick={() => handleLanguageChange(language === 'en' ? 'fi' : 'en')}>
              {language === 'en' ? 'English' : 'Finnish'}
            </button>
          </div>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            <div className='flex flex-row'>
            <img src={currentFlag} alt="Current Language" className='w-8 h-8 object-contain cursor-pointer' onClick={() => handleLanguageChange(language === 'en' ? 'fi' : 'en')} />
            <button className={`text-white font-medium cursor-pointer hover:text-[#915eff] text-[16px]`} onClick={() => handleLanguageChange(language === 'en' ? 'fi' : 'en')}>
              {language === 'en' ? 'English' : 'Finnish'}
            </button>
          </div>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`hover:text-[#915eff] text-[18px] font-medium cursor-pointer`}
                  
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  <div className={"p-2 slate-500-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"}>
          
        </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;