import {ColorPicker} from './ColorPicker';

type SettingsInputProps = {
  text: string;
  onChange: () => void;
  target: 'textColor' | 'bgColor';
};

const ColorsInput: React.FC<SettingsInputProps> = ({text, onChange, target}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>

      <ColorPicker target={target} onChange={onChange} width="w-[28px]" height="h-[28px]" />
    </div>
  );
};

export default ColorsInput;
