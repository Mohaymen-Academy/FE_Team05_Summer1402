import React from 'react';


function Container({children}):React.ReactNode{
  return (<div className="max-w-7xl m-auto">
    {children}
    </div>)
}

export default Container;