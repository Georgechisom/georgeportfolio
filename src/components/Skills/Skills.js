import React from 'react';
import uiDesign from "../../assets/bgui.png";
import webDesign from "../../assets/webdesign.png";
import appDesign from "../../assets/appdesign2.png";

const Skills = () => {
  return (
    <section className='max-w-screen-xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center text-center my-2 skills'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold pt-12 mb-5'>What I Do</h2>
        <span className='font-medium text-sm sm:text-base py-0 px-6 lg:px-20'>
            I am an enthusiastic and talented developer with experience in building visually captivating and user-friendly websites and applications. I possess a deep knowledge of designs and have a Keen eye for detail. I am skilled in HTML, CSS, JavaScript, Php, Laravel, React, WordPress, and React Native.
        </span>
        <div className='w-full m-6 text-left max-w-4xl'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center m-4 py-4 md:py-6 px-3 md:px-8 border b-2 border-skyText rounded-lg shadow-md shadow-skyText mb-8 gap-x-1 lg:gap-y-0 lg:gap-x-10 md:gap-x-10 bg-whiteText hover:shadow-lg hover:shadow-skyText'>
                <img src={uiDesign} alt='uiImage' className='object-cover w-20 md:w-28' />
                <div>
                    <h2 className='font-bold text-skyText text-center lg:text-left md:text-left md:text-lg lg:text-xl mb-2'>UI/UX Design</h2>
                    <p className='text-sm lg:text-base'>To create effective user-centered designs for applications, including websites, mobile apps, and software interfaces. Our key focus is to increase user satisfaction and usability by enhancing the accessibility, efficiency, and aesthetics of the application.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center m-4 py-4 md:py-6 px-3 md:px-8 border b-2 border-skyText rounded-lg shadow-md shadow-skyText mb-8 gap-x-1 lg:gap-y-0 lg:gap-x-10 md:gap-x-10 bg-whiteText hover:shadow-lg hover:shadow-skyText'>
                <img src={webDesign} alt='uiImage' className='object-cover w-20 md:w-28' />
                <div>
                    <h2 className='font-bold text-skyText text-center lg:text-left md:text-left mb-2 md:text-lg lg:text-xl'>Website Design</h2>
                    <p className='text-sm lg:text-base'>Designs the website's structure, develops mockups, and ensures users have an optimal experience with site appearance and navigation. Additionally, assists in registering your domains, structuring your data, performing updates, and gaining the trust of your target audience.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row items-center m-4 py-4 md:py-6 px-3 md:px-8 border b-2 border-skyText rounded-lg shadow-md shadow-skyText mb-8 gap-x-0 lg:gap-y-0 lg:gap-x-20 md:gap-x-20 bg-whiteText hover:shadow-lg hover:shadow-skyText'>
                <img src={appDesign} alt='uiImage' className='object-cover w-14 md:w-20' />
                <div>
                    <h2 className='font-bold text-skyText text-center lg:text-left md:text-left mb-2 md:text-lg lg:text-xl'>App Design</h2>
                    <p className='text-sm lg:text-base'>Builds high-quality applications by guaranteeing that the colors, fonts, and styles are exceptional. Designs wireframes and app mockups to ensure that users on both iOS and Android enjoy outstanding functionality and a great experience. Additionally, utilizes programming languages and development expertise to build, create, test, and launch applications.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills