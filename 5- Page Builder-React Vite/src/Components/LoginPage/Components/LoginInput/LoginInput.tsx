import React from 'react';

type LoginButtonProps = {
  placeholder: string;
  myInputClass: string;
  myLabelClass: string;
  labelText: string;
  type: string;
  name: string;
};

const LoginInput: React.FC<LoginButtonProps> = ({placeholder, myInputClass, myLabelClass, labelText, type}) => {
  return (
    <>
      <label className={myLabelClass}>{labelText}</label>
      <input placeholder={placeholder} className={myInputClass} type={type} />
    </>
  );
};

export default LoginInput;
