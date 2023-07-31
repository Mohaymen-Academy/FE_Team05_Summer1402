import React, {useEffect, useState} from 'react';
import {useRef} from 'react';

type ColorPickerProps = {
  width: string;
  height: string;
};
const ColorPicker: React.FC<ColorPickerProps> = ({width, height}) => {
  const [bgColor, setBgColor] = useState('#000');
  const colorInputref = useRef<HTMLInputElement>(null);
  const handleDivClick = () => {
    if (colorInputref.current != null) {
      colorInputref.current.click();
    }
  };
  useEffect(() => {
    console.log(bgColor);
  });
  return (
    <div className="relative">
      <div
        style={{backgroundColor: bgColor}}
        className={`${width} rounded-lg ${height}`}
        onClick={handleDivClick}
      ></div>
      <input
        ref={colorInputref}
        type="color"
        className="opacity-0 absolute top-0 left-0 "
        onChange={(e) => setBgColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
