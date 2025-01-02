import React from 'react';
import paradisecomfort from "../../assets/comfortwhite2.png";
import donation from "../../assets/donation.jpg";
import winsome from "../../assets/winluxbgre.png";
import trade from "../../assets/itrade.png";

const Contact = () => {
  return (
    <section className='max-w-screen-xl py-0 px-4 mx-auto w-full overflow-hidden flex flex-col items-center justify-center text-center my-2'>
        <div className='my-4'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 md:py-10 mb-5'>My Clients</h2>
            <p className='font-medium text-sm sm:text-base py-0 px-6 lg:px-20'>
                I have had the opportunity to collaborate with a diverse group of companies, and among the notable ones I have worked with includes
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-7 gap-1 md:gap-2 lg:px-20'>
                <div className='border-2  border-skyText flex items-center justify-center px-4 py-2 cursor-pointer group'>
                    <img src={paradisecomfort} alt="" className='w-48 h-auto group-hover:opacity-50 bg-black' />
                </div>
                <div className='border-2  border-skyText flex items-center justify-center px-4 py-2 cursor-pointer group'>
                    <img src={donation} alt="" className='w-36 h-auto group-hover:opacity-50' />
                </div>
                <div className='border-2  border-skyText flex items-center justify-center px-4 py-2 cursor-pointer group'>
                    <img src={winsome} alt="" className='w-64 h-auto group-hover:opacity-50 bg-white' />
                </div>
                <div className='border-2 border-skyText flex items-center justify-center px-4 py-2 cursor-pointer group'>
                    <img src={trade} alt="" className='w-36 h-auto group-hover:opacity-50 bg-white' />
                </div>
            </div>
        </div>
        <div></div>
    </section>
  );
}

export default Contact