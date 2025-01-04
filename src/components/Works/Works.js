import React from 'react'
import product from "../../assets/productweb.jpg";
import memes from "../../assets/meme.jpg";
import form from "../../assets/multiform.jpg";
import { Link } from 'react-scroll';

// const Portfolio = [
//     { title: "Paradise Comfort", image: `${cloth}`, link: "https://paradisecomfort.com.ng/" },
//     { title: "George Luxury", image: `${product}`, link: "https://georgeluxury.vercel.app/"},
//     { title: "Meme Generator", image: `${memes}`, link: "https://meme-generator-app-delta.vercel.app/"},
//     { title: "George Portfolio", image: `${cloth}`, link: "https://georgechisom.vercel.app"},
//     { title: "Multi Form", image: `${cloth}`, link: "https://relaxed-kangaroo-973393.netlify.app/"},
//     { title: "Multi Form", image: `${form}`, link: "https://relaxed-kangaroo-973393.netlify.app/"}
// ];

const Works = () => {
  return (
    <section className='max-w-screen-xl py-0 px-4 mx-auto w-full overflow-hidden flex flex-col items-center justify-center text-center my-2 works'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 md:py-10 mb-5'>My Portfolio</h2>
        <span className='font-medium text-sm sm:text-base py-0 px-6 lg:px-20'>
            I derive great satisfaction from concentrating on the finest details and guaranteeing that my work is flawless down to the pixel. I am excited to utilizing my skills and experience to assist businesses achieve their goals and establish a robust online presence.
        </span>
        {/* <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-2 my-10 px-4'>
            {
                Portfolio.map( ({ title, link, image }) => (
                    <a key={title} href={link} className='border-2 border-skyText flex flex-col gap-2 items-center justify-center rounded-lg py-3 px-3 data-[focus]:bg-white/50 tracking-wide hover:cursor-pointer'>
                        <img src={image} alt='myWorks' className='object-cover rounded-md w-80' />
                        <b className='text-sm md:text-base'>{title}</b>
                    </a>
                )

                )
            }
        </div> */}
        <div className='flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-4 my-10'>
            <Link to='https://georgeluxury.vercel.app/' className='hover:border-2 hover:border-skyText shadow-md shadow-skyText flex flex-col gap-2 items-center justify-center rounded-lg py-3 px-3 data-[focus]:bg-white/50 tracking-wide hover:cursor-pointer hover:shadow-md hover:shadow-skyText'>
                <img src={product} alt="ecommerceImage" className='object-cover rounded-md w-80 md:w-72' />
                <span className='text-sm md:text-base font-semibold'>Luxury Store</span>
            </Link>
            <Link to='https://meme-generator-app-delta.vercel.app/' className='hidden hover:border-2 hover:border-skyText shadow-md shadow-skyText lg:flex flex-col gap-2 items-center justify-center rounded-lg py-3 px-3 data-[focus]:bg-white/50 tracking-wide hover:cursor-pointer hover:shadow-md hover:shadow-skyText'>
                <img src={memes} alt="memeGenerator" className='object-cover rounded-md w-72 lg:w-64' />
                <span className='text-sm md:text-base font-semibold'>Meme Generator</span>
            </Link>
            <Link to='https://relaxed-kangaroo-973393.netlify.app/' className='hover:border-2 hover:border-skyText shadow-md shadow-skyText flex flex-col gap-2 items-center justify-center rounded-lg py-3 px-3 data-[focus]:bg-white/50 tracking-wide hover:cursor-pointer hover:shadow-md hover:shadow-skyText'>
                <img src={form} alt="multiformImage" className='object-cover rounded-md w-80' />
                <span className='text-sm md:text-base font-semibold'>Multi~Step Form</span>
            </Link>
        </div>
        <button className='rounded-full border-b-2 border-r-2 border-t-0 shadow-sm shadow-skyText border-skyText py-3 px-8 my-4 font-semibold hover:bg-white hover:text-skyText hover:border-2 hover:shadow-md hover:rounded-full hover:shadow-skyText hover:font-bold'>
            See More
        </button>
    </section>
  );
}

export default Works