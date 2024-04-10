import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinksEN, navLinksFI } from "../constants";
import { logo, menu, close } from "../assets";
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const { language, changeLanguage } = useLanguage(); // Get the selected language and changeLanguage function from the context

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    changeLanguage(lang); // Update the global language state
  };

  // Dynamically choose navigation links based on the selected language
  const navLinks = language === 'fi' ? navLinksFI : navLinksEN;

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-slate-500`}>
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
          <p className='text-black text-[18px] font-bold cursor-pointer flex'>
            Anttoni &nbsp;
            <span className='sm:block hidden'>| Tornikoski</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-black"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={"p-2 slate-500-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"}>
          {/* Language Switcher */}
          <div>
            <button className={`text-black font-medium cursor-pointer hover:text-white text-[18px] ${language === 'en' && 'font-bold'}`} onClick={() => handleLanguageChange("en")}>English &nbsp;</button>
            <button className={`text-black font-medium cursor-pointer hover:text-white text-[18px] ${language === 'fi' && 'font-bold'}`} onClick={() => handleLanguageChange("fi")}>Finnish </button>
          </div>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;