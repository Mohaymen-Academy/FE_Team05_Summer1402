import React from 'react';

type IconAnchorProps = {
  src: string;
  alt: string;
  imgStyle: string;
  anchorStyle: string;
};

const IconAnchor: React.FC<IconAnchorProps> = ({src, alt, imgStyle, anchorStyle}) => {
  return (
    <a className={anchorStyle}>
      <img className={imgStyle} src={src} alt={alt} />
    </a>
  );
};

export default IconAnchor;
