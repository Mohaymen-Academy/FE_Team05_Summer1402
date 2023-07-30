import React from 'react';

type IconButtonProps = {
  src: string;
  alt: string;
  title: string;
  btnStyle: 'btn-edit' | '' | 'h-[16px] w-[16px]';
  iconStyle: string;
};

const IconButton: React.FC<IconButtonProps> = ({src, alt, title, btnStyle, iconStyle}) => {
  return (
    <button className={btnStyle}>
      <img className={iconStyle} src={src} alt={alt} title={title} />
    </button>
  );
};

export default IconButton;
