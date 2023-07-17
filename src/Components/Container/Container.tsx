import React from 'react';

function Container({children}: {children: React.ReactNode}): React.ReactNode {
  return <div className="max-w-7xl m-auto relative">{children}</div>;
}

export default Container;
