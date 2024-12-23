import React from 'react';
import { Link } from 'react-scroll';
import intro from "../../assets/briefcase.png";
import design from '../../assets/webapps.png';

const Intro = () => {
  return (
    <section className='max-w-screen-xl mx-auto w-full overflow-hidden mt-10 relative flex items-center justify-center flex-col lg:flex-row'>
        <div className='h-full w-full p-8 text-3xl md:text-4xl lg:text-5xl font-extrabold flex flex-col justify-center gap-y-2 overflow-hidden'>
          <span className='text-lg lg:text-xl font-medium'>Hello</span>
          <span>I'm <span className='text-skyText'>George</span> <br />Web and Mobile Developer</span>
          <p className='text-lg lg:text-xl font-medium'>I am an experienced developer specializing in websites and mobile apps, <br /> adept at designing distinctive, exquisite, and user-friendly applications.</p>
          <Link className='decoration-0'>
            <button className='flex items-center justify-center gap-2 md:gap-3 text-nowrap bg-whiteText my-4 mx-0 py-2 lg:py-3 px-4 lg:px-8 rounded-full border-2 border-skyText text-sm md:text-base lg:text-xl group text-skyText
            shadow-md shadow-skyText duration-300 hover:bg-skyText hover:text-whiteText hover:shadow-none'>
              <img src={intro} className='w-5 md:w-6 lg:w-7 object-cover' alt='introbuttonimage'/> Hire Me
            </button>
          </Link>
            {/* <button className='hidden md:inline-flex cursor-pointer border-2 border-black rounded-full py-2 px-2 hover:shadow-sm hover:shadow-black hover:duration-300 mr-auto'>
                <img src={contact} className='w-5 object-cover' alt='contactIcon' />
            </button> */}
        </div>
        <img src={design} alt='webappImage' className='lg:absolute lg:-top-2 lg:right-0 lg:-z-10 lg:object-cover hover:duration-300 hover:scale-105' />
    </section>
  )
};

export default Intro;