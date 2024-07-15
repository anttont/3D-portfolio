import React from "react";
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer className='w-full hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 rounded-[16px] py-0.5'>
      <div className='w-full bg-[#131314] rounded-[20px]'>
        <div className='bg-[#131314] max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 rounded-[18px]'>
        <p className='text-gray-400 text-[18px]'>© {new Date().getFullYear()} Anttoni Tornikoski </p>
          <div className='flex space-x-4'>
            <a href="https://github.com/anttont" target="_blank" rel="noopener noreferrer" className='text-gray-400 text-[18px] hover:text-gray-100'>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anttoni-tornikoski-0b18572b5/" target="_blank" rel="noopener noreferrer" className='text-gray-400 text-[18px] hover:text-gray-100'>
              LinkedIn
            </a>
            <a href="mailto:anttoni.tornikoski@gmail.com" className='text-gray-400 text-[18px] hover:text-gray-100'>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


