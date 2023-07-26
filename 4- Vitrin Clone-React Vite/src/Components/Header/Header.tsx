import React from 'react';
import {DesktopHeader} from '../DesktopHeader';
import MobileHeader from '../MobileHeader/MobileHeader';

const Header = () => {
  return (
    <header>
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
