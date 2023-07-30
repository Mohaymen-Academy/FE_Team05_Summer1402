import IconButton from '../../../Common/IconButton/IconButton';
import icon1 from '../../assets/asideMenu/align1.png';

type SettingsTextInputProps = {
  text: string;
  placeholder: string;
  inputStyle: string;
  divStyle: string;
};

const SettingsTextInput: React.FC<SettingsTextInputProps> = ({text, placeholder, inputStyle, divStyle}) => {
  return (
    <div className={`flex flex-col justify-start ${divStyle} w-full gap-[12px]`}>
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>
      <input
        type="placeholder"
        className={`input ${inputStyle} pr-1/2 placeholder:text-[12px]`}
        placeholder={placeholder}
      />
      <div className="grid grid-cols-6 gap-3 justify-center items-center">
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align6" title="align6" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align5" title="align5" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align4" title="align4" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align3" title="align3" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align2" title="align2" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align1" title="align1" />
      </div>
    </div>
  );
};

export default SettingsTextInput;
