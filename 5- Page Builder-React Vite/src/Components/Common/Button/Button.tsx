import React from 'react';

type LoginButtonProps = {
  width?: string;
  height?: string;
  type: 'primary' | 'secondary' | 'frame' | 'edit';
  text: string;
  onClick?: () => void;
};

const Button: React.FC<LoginButtonProps> = ({width, height, text, type, onClick}) => {
  return (
    <div onClick={onClick} style={{width, height}} className={`btn-${type}`}>
      {text}
    </div>
  );
};

export default Button;
