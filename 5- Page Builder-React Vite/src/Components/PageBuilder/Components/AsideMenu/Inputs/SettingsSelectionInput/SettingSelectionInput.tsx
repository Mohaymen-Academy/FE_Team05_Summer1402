import React from 'react';

type SettingSelectionInputProps = {
  inputHeaderName: string;
  selectionText: string;
  options: Array<{value: string | number; text: string | number}>;
  dropMenuStyle?: React.CSSProperties;
};

const SettingSelectionInput: React.FC<SettingSelectionInputProps> = ({
  selectionText,
  inputHeaderName,
  options,
  dropMenuStyle,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className={`w-full text-[14px] font-semibold`}>
        <p>{inputHeaderName}</p>
      </div>
      <select style={dropMenuStyle} className="input-drop">
        <option selected>{selectionText}</option>
        {options.map((opt) => (
          <option value={opt.value}>{opt.text}</option>
        ))}
      </select>
    </div>
  );
};

export default SettingSelectionInput;
