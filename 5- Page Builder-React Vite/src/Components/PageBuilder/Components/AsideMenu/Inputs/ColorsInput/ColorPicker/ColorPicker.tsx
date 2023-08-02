import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../../util/types';

type ColorPickerProps = {
  width: string;
  height: string;
  onChange: () => void;
  target: 'textColor' | 'bgColor';
};
const ColorPicker: React.FC<ColorPickerProps> = ({width, height, onChange, target}) => {
  const colorInputref = useRef<HTMLInputElement>(null);
  const handleDivClick = () => {
    if (colorInputref.current != null) {
      colorInputref.current.click();
    }
  };
  const edittingId = useSelector((state: storeStateTypes) => state.aside.edittingComponentId);
  const bgColor = useSelector(
    (state: storeStateTypes) => state.builder.component.find((comp) => comp.id === edittingId)?.setting[target]
  );

  return (
    <div className="relative">
      <div
        style={{backgroundColor: bgColor ? bgColor : '#000'}}
        className={`${width} rounded-lg ${height}`}
        onClick={handleDivClick}
      ></div>
      <input ref={colorInputref} type="color" className="opacity-0 absolute top-0 left-0 " onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
