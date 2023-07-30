import React from 'react';

type SettingSelectionInputProps = {
  inputHeaderName: string;
  selectionText: string;
  selectStyle: string;
  headerStyle: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
};

const SettingSelectionInput: React.FC<SettingSelectionInputProps> = ({
  selectionText,
  inputHeaderName,
  selectStyle,
  headerStyle,
  option1,
  option2,
  option3,
  option4,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className={`w-full text-[14px] font-semibold ${headerStyle}`}>
        <p>{inputHeaderName}</p>
      </div>
      <select className={selectStyle}>
        <option selected>{selectionText}</option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
      </select>
    </div>
  );
};

export default SettingSelectionInput;
