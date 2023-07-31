import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';

type TextInputProps = {
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
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
};
const TextInput: React.FC<TextInputProps> = ({
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
  inputStyle,
  labelStyle,
}) => {
  return (
    <div>
      {labelText && (
        <label style={labelStyle} className="label">
          {labelText}
        </label>
      )}
      <input
        style={{
          width,
          height,
          border: errors ? (errors[formId] ? '2px solid red' : '') : '',
          fontSize: '12px',
          ...inputStyle,
        }}
        {...register(formId, {required, pattern})}
        placeholder={placeholder}
        className="input"
        type={type}
      />
    </div>
  );
};

export default TextInput;
