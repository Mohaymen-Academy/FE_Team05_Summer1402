import {IconButton} from '../../../../../Common';
import {
  textAlignJustifyCenter,
  textAlignCenter,
  textAlignLeft,
  textAlignRight,
  textBold,
  textItalic,
  textUnderline,
} from '../../../../../../assets/textEditor';

type SettingsTextInputProps = {
  text: string;
  placeholder: string;
  inputHeight: string;
};

const SettingsTextInput: React.FC<SettingsTextInputProps> = ({text, placeholder, inputHeight}) => {
  return (
    <div className={`flex flex-col justify-start w-full gap-[12px]`}>
      <div className="text-[14px] font-semibold">
        <p>{text}</p>
      </div>
      <textarea
        style={{height: inputHeight}}
        className={`input placeholder:text-[14px] resize-none`}
        placeholder={placeholder}
      />
      <div className="grid grid-cols-7 gap-3 justify-center items-center">
        <IconButton
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignJustifyCenter}
          alt="align7"
          title="align7"
        />
        <IconButton
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignRight}
          alt="align6"
          title="align6"
        />
        <IconButton
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignCenter}
          alt="align5"
          title="align5"
        />
        <IconButton
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textAlignLeft}
          alt="align4"
          title="align4"
        />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={textBold} alt="align3" title="align3" />
        <IconButton btnStyle="flex justify-center" iconStyle="w-[16px]" src={textItalic} alt="align2" title="align2" />
        <IconButton
          btnStyle="flex justify-center"
          iconStyle="w-[16px]"
          src={textUnderline}
          alt="align1"
          title="align1"
        />
      </div>
    </div>
  );
};

export default SettingsTextInput;
