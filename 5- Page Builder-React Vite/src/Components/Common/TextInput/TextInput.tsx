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
  errors?: FieldErrors;
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
      <label className="label">{labelText}</label>
      <input
        {...register(formId, {required, pattern})}
        style={{width, height}}
        placeholder={placeholder}
        className="input"
        type={type}
      />
    </>
  );
};

export default TextInput;
