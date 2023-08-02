import {ColorPicker} from './ColorPicker';

type SettingsInputProps = {
  text: string;
  onChange: () => void;
};

const ColorsInput: React.FC<SettingsInputProps> = ({text,onChange}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>

      <ColorPicker onChange={onChange} width="w-[28px]" height="h-[28px]" />
    </div>
  );
};

export default ColorsInput;
