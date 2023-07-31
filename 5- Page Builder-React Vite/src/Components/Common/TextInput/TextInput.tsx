import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';

type LoginButtonProps = {
  placeholder?: string;
  labelText?: string;
  type?: 'password' | 'text' | 'number';
  name?: string;
  width?: string;
  height?: string;
  register: UseFormRegister<FieldValues>;
  formId: string;
  errors: FieldErrors;
  required?: boolean;
  pattern?: RegExp;
};
const TextInput: React.FC<LoginButtonProps> = ({
  placeholder,
  labelText,
  type,
  width,
  height,
  register,
  formId,
  errors,
  required,
  pattern,
}) => {
  return (
    <>
      {labelText && <label className="label">{labelText}</label>}
      <input
        style={{width, height, border: errors[formId] ? '2px solid red' : ''}}
        {...register(formId, {required, pattern})}
        placeholder={placeholder}
        className="input"
        type={type}
      />
    </>
  );
};

export default TextInput;
