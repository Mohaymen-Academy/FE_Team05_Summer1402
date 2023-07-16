import React from 'react';


function Container({children}):React.ReactNode{
  return (<div className="max-w-[1280px] m-auto">
    {children}
    </div>)
}

export default Container;