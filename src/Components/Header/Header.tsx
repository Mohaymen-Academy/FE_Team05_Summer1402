import {Navbar} from '../Index';
import {IconButton} from '../IconButton';
import React from 'react';



function Header():React.ReactNode {
  return (<header>
      <Navbar/>
      <IconButton/>
    </header>
  )
}

export default Header;