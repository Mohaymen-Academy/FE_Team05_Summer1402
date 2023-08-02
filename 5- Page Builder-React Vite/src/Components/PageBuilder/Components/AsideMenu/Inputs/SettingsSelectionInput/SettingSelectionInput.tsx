import React from 'react';

type SettingSelectionInputProps = {
  inputHeaderName: string;
  defaultValue: string;
  options: Array<{value: string | number; text: string | number}>;
  dropMenuStyle?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SettingSelectionInput: React.FC<SettingSelectionInputProps> = ({
  inputHeaderName,
  options,
  dropMenuStyle,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className={`w-full text-[14px] gap-12 font-semibold`}>
        <p>{inputHeaderName}</p>
      </div>
      <select onChange={onChange} defaultValue={defaultValue} style={dropMenuStyle} className="input-drop">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SettingSelectionInput;
