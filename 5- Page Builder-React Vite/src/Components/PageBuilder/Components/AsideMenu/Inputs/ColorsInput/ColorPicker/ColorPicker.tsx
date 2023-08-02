import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../../util/types';

type ColorPickerProps = {
  width: string;
  height: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  target: 'textColor' | 'bgColor';
};
const ColorPicker: React.FC<ColorPickerProps> = ({width, height, onChange, target}) => {
  const colorInputRef = useRef<HTMLInputElement>(null);
  const handleDivClick = () => {
    if (colorInputRef.current != null) {
      colorInputRef.current.click();
    }
  };
  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const bgColor = useSelector(
    (state: storeStateTypes) => state.builder.component.find((comp) => comp.id === editingId)?.setting[target]
  );

  return (
    <div className="relative">
      <div
        style={{backgroundColor: bgColor ? bgColor : '#000'}}
        className={`${width} rounded-lg ${height}`}
        onClick={handleDivClick}
      ></div>
      <input ref={colorInputRef} type="color" className="opacity-0 absolute top-0 left-0 " onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
