import React, { useEffect, useState } from 'react'
import logo  from "../../assets/logo.png";
import { Link } from 'react-scroll';
import "./Navbar.css"
import menu from "../../assets/menu.png"

const Navbar = () => {
    const [scrollWork, setScrollWork] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrollWork(true);
              } else {
                setScrollWork(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <nav className={scrollWork ? 'navbar w-full fixed lg:sticky md:sticky sm:sticky sm:left-0 sm:right-0 top-0 sm:top-0 md:top-0 z-50 text-skyText duration-200' : ''}>
        <div className='max-w-screen-xl mx-auto h-20 md:h-24 lg:h-28 flex items-center justify-between md:justify-center px-4 lg:px-0'>
            <Link 
                to='intro'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500} 
                className='inline-flex md:hidden'>
                <img src={logo} alt='logo' className='w-32 object-cover -ml-5 md:-ml-0'/>
            </Link>
            <div className='hidden md:inline-flex max-w-3xl items-center justify-center gap-x-12 cursor-pointer font-semibold duration-200 relative overflow-hidden group text-lg abu0'>
                <Link
                    className='hover:italic hover:font-bold'
                    activeClass='active cc'
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >Home</Link>
                <Link
                    className='hover:italic hover:font-bold'
                    activeClass='active cc'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >About</Link>
                <Link 
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                >
                    <img src={logo} alt='logo' className='w-28 md:w-32 lg:w-36 mt-4 mb-2 object-cover'/>
                </Link>
                <Link
                    className='hover:italic hover:font-bold'
                    activeClass='active cc'
                    to='works'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Portfolio</Link>
                <Link
                    className='hover:italic hover:font-bold'
                    activeClass='active cc'
                    to='clients'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Clients</Link>
            </div>

            <button className='inline-flex md:hidden items-center justify-center cursor-pointer rounded-md hover:shadow-sm hover:shadow-[#33AAFF] border-2 border-[#33AAFF] hover:border-2 hover:border-[#33AAFF] hover:duration-200' onClick={() => setShowMenu(!showMenu)} >
                <img src={menu} alt='menu' className='w-9 object-cover'/>
            </button>
            <div className='overflow-hidden group text-lg absolute top-16 right-0 z-20 flex flex-col items-center p-4 h-96 duration-300 bg-white text-skyText rounded-sm min-w-60 abu0' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Home</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >About</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='works'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Portfolio</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='clients'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Clients</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                >Contact</Link>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;