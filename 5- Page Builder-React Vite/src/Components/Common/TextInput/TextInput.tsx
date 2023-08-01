import {useState} from 'react';
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';
import {IconType} from 'react-icons';

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
  smallInput?: boolean;
  leftIcon?: IconType;
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
  smallInput,
  leftIcon: LeftIcon,
}) => {
  const [text, setText] = useState('');
  const smallInputPadding =
    text.length === 1 ? 15 : text.length === 0 || text.length === 2 ? 12 : text.length > 2 ? 9 : 12;

  return (
    <div>
      {labelText && (
        <label style={labelStyle} className="label">
          {labelText}
        </label>
      )}
      <div className="relative">
        <input
          style={{
            width: smallInput ? '40px' : width,
            height: smallInput ? '40px' : height,
            border: errors ? (errors[formId] ? '2px solid red' : '') : '',
            fontSize: '12px',
            paddingLeft: LeftIcon ? 30 : 12,
            padding: smallInput ? smallInputPadding : 12,
            ...inputStyle,
          }}
          {...register(formId, {required, pattern})}
          placeholder={placeholder}
          className="input placeholder:text-sm"
          type={type}
          onChange={(e) => setText(e.target.value)}
        />
        {LeftIcon && <LeftIcon size={18} className="absolute left-2 bottom-1/2 translate-y-1/2 text-neutral-hover" />}
      </div>
    </div>
  );
};

export default TextInput;
