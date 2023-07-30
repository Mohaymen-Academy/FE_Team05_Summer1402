import {ColorPicker} from '../ColorPicker';

type SettingsInputProps = {
  text: string;
};

const ColorsInput: React.FC<SettingsInputProps> = ({text}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>
      {/* <input type="color" className=" w-[28px] h-[28px] rounded-lg" >
           
        </input> */}
      <ColorPicker width="w-[28px]" height="h-[28px]" />
    </div>
  );
};

export default ColorsInput;
