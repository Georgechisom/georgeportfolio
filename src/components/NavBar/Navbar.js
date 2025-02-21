import React, { useEffect, useState } from 'react'
import logo  from "../../assets/logo.png";
import { Link } from 'react-scroll';
import "./Navbar.css"
import menu from "../../assets/menu.png"

const Navbar = () => {
    const [scrollWork, setScrollWork] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [openMenu, setOpenMenu] = useState(true);
    const [closeMenu, setCloseMenu] = useState(false);

    const open = () => {
        setCloseMenu(true)
        setShowMenu(true)
        setOpenMenu(!openMenu)
    };

    const close = () => {
        setCloseMenu(false)
        setShowMenu(false)
        setOpenMenu(!openMenu)
    };

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

            <button className={openMenu ? 'flex md:hidden lg:hidden items-center justify-center cursor-pointer rounded-md hover:shadow-sm hover:shadow-[rgb(51,170,255)] border-2 border-[#33AAFF] hover:border-2 hover:border-[#33AAFF] hover:duration-200' : 'hidden md:hidden lg:hidden'} onClick={open}>
                <img src={menu} alt='menu' className='w-9 object-cover'/>
            </button>
            <button className={closeMenu ? 'inline-flex md:hidden items-center justify-center cursor-pointer text-[#33AAFF] text-3xl rounded-md hover:shadow-sm hover:shadow-[#33AAFF] border-2 border-[#33AAFF] hover:border-2 hover:border-[#33AAFF] hover:duration-200 px-3 font-semibold duration-500 z-10' : 'hidden md:hidden lg:hidden'} onClick={close}>
                    x
            </button>
            <div className={showMenu ? 'overflow-hidden text-lg top-20 flex flex-col items-center p-4 bg-white text-skyText rounded-sm min-w-60 shadow-sm gap-1 transition -translate-x-5 group:translate-x-6 shasha abu0 md:hidden lg:hidden fixed  right-0 h-full bottom-0 justify-center overflow-x-hidden duration-500 font-semibold z-50 w-60' : 'hidden md:hidden lg:hidden w-0'} >
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={() => [setCloseMenu(false), setShowMenu(false), setOpenMenu(true)]}
                >Home</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => [setCloseMenu(false), setShowMenu(false), setOpenMenu(true)]}
                >About</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='works'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}onClick={() => [setCloseMenu(false), setShowMenu(false), setOpenMenu(true)]}
                >Portfolio</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='clients'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => [setCloseMenu(false), setShowMenu(false), setOpenMenu(true)]}
                >Clients</Link>
                <Link
                    className='hover:italic hover:font-bold py-3'
                    activeClass='active cc'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => [setCloseMenu(false), setShowMenu(false), setOpenMenu(true)]}
                >Contact</Link>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;