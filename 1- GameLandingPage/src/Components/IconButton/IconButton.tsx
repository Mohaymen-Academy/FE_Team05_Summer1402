import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";


function IconButton():React.ReactNode {
  return (<div className='w-1/6 mt-1 pt-3 pl-10'>
      <a href='#' title="Login" className="text-white">
        <FaRegUser/>
      </a>
    </div>
  )
}

export default IconButton;