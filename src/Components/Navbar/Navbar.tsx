import { NavbarButton } from "../NavbarButton";
import React from "react";
import { navbarTexts } from "../../util/Constants";

function Navbar():React.ReactNode {
  return (<nav className='max-w-screen-xl mx-auto p-4'>
      <ul className= "flex flex-wrap mt-3 text-md font-medium text-white dark:text-white-400 sm:mt-0">
        {navbarTexts.map(text => (<NavbarButton text={text} href={"#"}/>))}
      </ul>
    </nav>
  )
}

export default Navbar;
