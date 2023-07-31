import {IconButton} from '../../../../../../Common';
import icon1 from '../../../../../../../assets/textEditor/text-underline.svg';
import icon2 from '../../../../../../../assets/textEditor/text-italic.svg';
import icon3 from '../../../../../../../assets/textEditor/text-bold.svg';
import icon4 from '../../../../../../../assets/textEditor/textalign-left.svg';
import icon5 from '../../../../../../../assets/textEditor/textalign-center.svg';
import icon6 from '../../../../../../../assets/textEditor/textalign-right.svg';
import icon7 from '../../../../../../../assets/textEditor/textalign-justifycenter.svg';

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
      <textarea
        className={`input ${inputStyle} pr-1/2 placeholder:text-[14px] resize-none`}
        placeholder={placeholder}
      />
      <div className="grid grid-cols-7 gap-3 justify-center items-center">
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon7} alt="align7" title="align7" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon6} alt="align6" title="align6" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon5} alt="align5" title="align5" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon4} alt="align4" title="align4" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon3} alt="align3" title="align3" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon2} alt="align2" title="align2" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={icon1} alt="align1" title="align1" />
      </div>
    </div>
  );
};

export default SettingsTextInput;
