import React from 'react';

type FrameButtonProps = {
  name: string;
  style: string;
};

const FrameButton: React.FC<FrameButtonProps> = ({name, style}) => {
  return <button draggable className={style}>{name}</button>;
};

export default FrameButton;
