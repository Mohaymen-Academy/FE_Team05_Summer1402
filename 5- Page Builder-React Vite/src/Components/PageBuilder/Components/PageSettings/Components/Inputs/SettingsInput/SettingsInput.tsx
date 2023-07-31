import React from 'react';
import {TextInput} from '../../../../../../Common';
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';

type SettingsInputProps = {
  text: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  formId: string;
  errors: FieldErrors;
  required?: boolean;
  pattern?: RegExp;
  inputW: string;
  inputH: string;
};

const SettingsInput: React.FC<SettingsInputProps> = ({
  text,
  placeholder,
  register,
  formId,
  errors,
  required,
  pattern,
  inputW,
  inputH,
}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>
      <TextInput
        inputStyle={{padding: 4}}
        errors={errors}
        register={register}
        required={required}
        pattern={pattern}
        formId={formId}
        placeholder={placeholder}
        width={inputW}
        height={inputH}
      />
    </div>
  );
};

export default SettingsInput;
