import React, { useRef } from 'react';
import '../Contact/Contact.css'
import paradisecomfort from "../../assets/comfortwhite2.png";
import donation from "../../assets/donation.jpg";
import winsome from "../../assets/winluxbgre.png";
import trade from "../../assets/itrade.png";
import twitter from "../../assets/twitter3.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import Aside from '../Aside/Aside';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_1c7nzti', 'template_05fc143', form.current, {
            publicKey: '3xkdrosaiXH3tldX1',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email Sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <section className='max-w-screen-xl mx-auto w-full h-full  overflow-hidden mt-10 relative flex flex-col lg:flex-row items-start gap-2 px-1 lg:px-5 lg:grid-cols-2 contact'>
      <Aside className="hidden lg:flex" />
        <div className="h-full w-full p-8 flex flex-col justify-center gap-y-2 overflow-hidden">
            <div className='my-4 clients'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 md:py-10 mb-5 text-center'>My Clients</h2>
                <p className='font-medium text-sm sm:text-base py-0 px-6 lg:px-2 text-center'>
                    I have had the opportunity to collaborate with a diverse group of companies, and among the notable ones I have worked with includes
                </p>
                <div className='grid grid-cols-2 lg:grid-cols-4 mt-7 gap-1 md:gap-4 justify-center md:px-8 lg:px-20'>
                    <div className='border-2 border-skyText flex items-center justify-center px-2 py-2 cursor-pointer group'>
                        <img src={paradisecomfort} alt="" className='object-cover lg:w-[50%] w-36 h-auto group-hover:opacity-60 bg-black' />
                    </div>
                    <div className='border-2 border-skyText flex items-center justify-center px-2 py-4 cursor-pointer group'>
                        <img src={donation} alt="" className='object-cover w-36 lg:w-[50%] h-auto group-hover:opacity-50' />
                    </div>
                    <div className='border-2 border-skyText flex items-center justify-center px-2 py-2 cursor-pointer group'>
                        <img src={winsome} alt="" className='object-cover md:w-48 w-48 h-auto group-hover:opacity-50 bg-white' />
                    </div>
                    <div className='border-2 border-skyText flex items-center justify-center px-2 py-4 cursor-pointer group'>
                        <img src={trade} alt="" className='object-cover lg:w-[50%] w-36 h-auto group-hover:opacity-50 bg-white' />
                    </div>
                </div>
            </div>
            <div className='my-1' id='contact'></div>
            <div className='my-4 contact'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 md:pt-10 text-center'>Contact Me</h2>
                <div className='font-medium text-sm sm:text-base py-0 px-6 lg:px-2 text-center'>
                    Kindly fill out the form provided below to discuss any business opportunities.
                </div>
                <form className='flex flex-col items-center justify-center gap-4 lg:gap-4 my-10 py-4 px-4 shadow-lg shadow-skyText md:shadow-none' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='to_name' className='font-medium w-full max-w-[40rem] m-2 border-2 consha border-skyText py-3 px-8 text-black rounded-full hover:border-2 hover:border-black hover:shadow-black hover:shadow-lg hover:bg-white focus:bg-#030303 placeholder:text-black focus:border-none' placeholder='Your Name' />
                    <input type='email' name='from_email' className='font-medium w-full max-w-[40rem] m-2 border-2 consha border-skyText py-3 px-8 text-black rounded-full hover:border-2 hover:bg-white hover:border-black hover:shadow-black hover:shadow-lg focus:bg-white placeholder:text-black focus:border-none' placeholder='Your Email' />
                    <textarea name='message' rows="5" className='font-medium w-full max-w-[40rem] m-2 border-2 consha border-skyText py-3 px-8 text-black rounded-lg hover:border-2 hover:border-black hover:shadow-black hover:shadow-lg hover:bg-white focus:bg-white placeholder:text-black focus:border-none' placeholder='Your Message'></textarea>
                    <button type='submit' value="send" className='w-full max-w-[40rem] rounded-full border-2 consha border-skyText py-3 px-8 my-4 font-semibold hover:bg-white hover:text-skyText hover:border-2 hover:shadow-md hover:rounded-full hover:shadow-skyText hover:font-bold'>Submit</button>
                </form>
                <div className='flex flex-row items-center justify-center flex-nowrap'>
                    <Link to="#" className='px-3 md:px-5'>
                        <img src={facebook} alt='twitterIcon' className='w-10 object-cover' />
                    </Link>
                    <Link to="#" className='px-3 md:px-5'>
                        <img src={twitter} alt='twitterIcon' className='w-10 object-cover' />
                    </Link>
                    <Link to="#" className='px-3 md:px-5'>
                        <img src={youtube} alt='youtubeIcon' className='w-10 object-cover' />
                    </Link>
                    <Link to="#" className='px-3 md:px-5'>
                    <img src={instagram} alt='youtubeIcon' className='w-10 object-cover' />
                    </Link>
                </div>
            </div>
            <footer className='max-w-screen-xl w-full overflow-hidden hidden md:flex items-center justify-center my-8 font-semibold text-xs sm:text-sm md:text-base lg:text-lg'>
                copy &#169; 2025 George Portfolio. All Rights Reserved.
            </footer>
        </div>
    </section>
  );
}

export default Contact