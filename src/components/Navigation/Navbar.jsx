import React, { useState } from 'react'
import Logo from './Logo';
import NavElements from './NavElements';
import NavElementsMenu from './NavElementsMenu';

export default function Navbar(props) {

    const [openMenu, setOpenMenu] = useState(false)

    function handleMenuItems()
    {
      setOpenMenu(!openMenu)
    }
      
    return (
      <div className="dark:bg-[#1A2130] dark:text-white w-[100%] h-[60px] flex items-center justify-between fixed m-auto z-10">
        <div className='ml-[10px]'>
          <Logo />
        </div>

        {/* burger menu */}
        <div className="text-3xl cursor-pointer md:hidden dark:text-white" onClick={handleMenuItems}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[35px] h-[35px]"
          >
              <path
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
          </svg>
        </div>
        
        <div className={`w-full h-menu md:hidden ${openMenu ? '' : 'hidden'} animate-entring absolute top-[60px]`} id='menu'>
          <NavElementsMenu darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
        </div>

        <div className='hidden w-[50%] md:flex md:justify-end mr-[50px]'>
          <NavElements darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode}/>
        </div>
      </div>
    );
}
