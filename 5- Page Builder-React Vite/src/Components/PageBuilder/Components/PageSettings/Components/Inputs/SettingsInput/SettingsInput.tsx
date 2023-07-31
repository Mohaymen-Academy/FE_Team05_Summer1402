import React from 'react';

type SettingsInputProps = {
    text: string;
    placeholder: string;
}

const SettingsInput:React.FC<SettingsInputProps> = ({text,placeholder}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>
      <input type="text" className="input w-[40px] h-[40px] pr-1/2 placeholder:text-[12px]" placeholder={placeholder} />
    </div>
  );
};

export default SettingsInput;
