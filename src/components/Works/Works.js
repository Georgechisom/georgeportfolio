import React from 'react'
// import { Link } from 'react-scroll';
import cloth from "../../assets/clothweb.jpg";
import product from "../../assets/productweb.jpg";
import memes from "../../assets/meme.jpg";

// const Portfolio = [
//     { title: "Paradise Comfort", image: `${cloth}`, link: "https://paradisecomfort.com.ng/" },
//     { title: "George Luxury", image: `${product}`, link: "https://georgeluxury.vercel.app/"},
//     { title: "Meme Generator", image: `${memes}`, link: "https://meme-generator-app-delta.vercel.app/"},
//     { title: "George Portfolio", image: `${cloth}`, link: "https://georgechisom.vercel.app"},
//     { title: "Multi Form", image: `${cloth}`, link: "https://relaxed-kangaroo-973393.netlify.app/"},
//     { title: "Multi Form", image: `${cloth}`, link: "https://relaxed-kangaroo-973393.netlify.app/"}
// ];

const Portfolio = [
    { title: "George Luxury", image: `${product}`, link: "https://georgeluxury.vercel.app/"},
    { title: "Meme Generator", image: `${memes}`, link: "https://meme-generator-app-delta.vercel.app/"},
    { title: "Multi Form", image: `${cloth}`, link: "https://relaxed-kangaroo-973393.netlify.app/"},
];

const Works = () => {
  return (
    <section className='max-w-screen-xl mx-auto w-full overflow-hidden flex flex-col items-center justify-center text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold py-6 md:py-10 mb-5'>My Portfolio</h2>
        <span className='font-medium text-sm sm:text-base py-0 px-6'>
            I derive great satisfaction from concentrating on the finest details and guaranteeing that my work is flawless down to the pixel. I am excited to utilizing my skills and experience to assist businesses achieve their goals and establish a robust online presence.
        </span>
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-2 my-10 px-4'>
            {
                Portfolio.map( ({ title, link, image }) => (
                    <a key={title} href={link} className='border-2 border-skyText flex items-center justify-center rounded-lg py-3 px-3 data-[focus]:bg-white/50 tracking-wide hover:cursor-pointer'>
                        <img src={image} alt='myWorks' className='object-cover rounded-md' />
                    </a>
                )

                )
            }
        </div>
    </section>
  );
}

export default Works