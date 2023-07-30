import React from 'react';

type LoginButtonProps = {
  width: string;
  height: string;
  type: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({width, height, type}) => {
  return (
    <>
      <a className={width + ' ' + height} href="#">
        <div className={type}>
          <p>ذخیره و شروع طراحی</p>
        </div>
      </a>
    </>
  );
};

export default LoginButton;
