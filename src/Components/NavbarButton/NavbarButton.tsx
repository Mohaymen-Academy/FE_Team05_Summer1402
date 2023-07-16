import React from 'react';

type NavbarButtonProps = {
  text: string,
  href: string,
}

function NavbarButton({text, href}: NavbarButtonProps): React.ReactNode {
  return (
      <li><a href={href}>{text}</a></li>
  );
}

export default NavbarButton;