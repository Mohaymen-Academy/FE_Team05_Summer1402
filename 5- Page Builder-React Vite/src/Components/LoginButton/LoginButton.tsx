import React from 'react';
import {Link} from 'react-router-dom';

type LoginButtonProps = {
  width: string;
  height: string;
  type: string;
};

const LoginButton: React.FC<LoginButtonProps> = ({width, height, type}) => {
  return (
    <>
      <a className={width + ' ' + height} href="#">
        <Link to={'/home'}>
          <div className={type}>
            <p>ذخیره و شروع طراحی</p>
          </div>
        </Link>
      </a>
    </>
  );
};

export default LoginButton;
