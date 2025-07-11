import React from 'react';
// import 'boxicons'
import { Link } from 'react-scroll';
import intro from "../../assets/briefcase.png";
import design from '../../assets/webapps.png';
import messageIcon from "../../assets/message_icon.png";
import "./Intro.css";

const Intro = () => {

  return (
    <section className='max-w-screen-xl mx-auto w-full overflow-hidden mt-10 relative flex items-center justify-center flex-col lg:flex-row intro'>
        <div className='h-full w-full p-8 text-3xl md:text-4xl lg:text-5xl font-extrabold flex flex-col justify-center gap-y-2 overflow-hidden'>
          <span className='text-lg lg:text-xl font-medium'>Hello</span>
          <span className='specialAnimation py-2'>I'm <span className='text-skyText'>George Chisom</span></span>
          <p className='text-lg lg:text-xl font-medium'>A well experienced developer specializing in websites and mobile apps, <br className='hidden md:flex' /> adept at designing distinctive, exquisite, and user-friendly applications.</p>
          <Link className='decoration-0'>
            <button className='flex items-center justify-center gap-2 md:gap-3 text-nowrap bg-whiteText my-4 mx-0 py-2 lg:py-3 px-4 lg:px-8 rounded-full border-b-2 border-r-2 border-skyText text-sm md:text-base lg:text-xl group text-skyText
            shadow-md shadow-skyText duration-300 hover:bg-skyText hover:text-whiteText hover:shadow-none'>
              <img src={intro} className='w-5 md:w-6 lg:w-7 object-cover' alt='introbuttonimage'/> Hire Me
            </button>
          </Link>
          <div className='ml-auto'>
            <button className='fixed bottom-6 lg:bottom-10 right-5 cursor-pointer hover:shadow-md hover:shadow-skyText rounded-full hover:duration-200 p-2 border-2 border-skyText mx-auto my-auto text-center' onClick={() => {
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
              <img src={messageIcon} alt='messageIcon' className='object-cover w-8 lg:w-12 z-50 animate-pulse' />
            </button>
          </div>
        </div>
        <img src={design} alt='webappImage' className='lg:absolute lg:-top-2 lg:right-0 lg:-z-10 lg:object-cover hover:duration-300 hover:scale-105' />
    </section>
  )
};

export default Intro;