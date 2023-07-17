import {Navbar} from '..';
import {IconButton} from '../IconButton';
import React from 'react';
import img from '../../assets/images/logo/logo.png';


function Header() {
  return (
    <header className='bg-slate-700 pl-5 pt-3 pb-3 rounded-lg md:flex flex-wrap'>
      <img src={img} alt="Steam Logo" className='w-sm h-[50px] ml-10 mr-10'></img>
      <Navbar />
      <IconButton />
    </header>
  );
}

export default Header;
