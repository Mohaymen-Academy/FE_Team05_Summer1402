import {useEffect, useMemo, useState} from 'react';
import {AiFillAccountBook, AiOutlineAim} from 'react-icons/ai';
import {icons} from '../../../../../../util/Constatnts';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../util/types';

type ButtonElementProps = {
  setting?: Record<string, any>;
};

const ButtonElement: React.FC<ButtonElementProps> = ({setting}) => {
  const [verticalAlignment, setVerticalAlignment] = useState('center');
  const [horizontalAlignment, setHorizontalAlignment] = useState('center');
  const [textStyle, setTextStyle] = useState<'left' | 'center' | 'right' | 'justify'>();
  const [height, setHeight] = useState('متوسط');

  const haveIcon = setting?.withIcon;
  const IconOfEditingBtn = icons[setting?.iconIndex || 7];

  const textStyleDB = setting?.textEditorFunction;
  useEffect(() => {
    if (textStyleDB === 'align left') {
      setTextStyle('left');
    }
    if (textStyleDB === 'align center') {
      setTextStyle('center');
    }
    if (textStyleDB === 'align right') {
      setTextStyle('right');
    }
    if (textStyleDB === 'justify center') {
      setTextStyle('justify');
    }
  }, [textStyle]);

  const vAlignMent = setting?.btnVerticalDivAlignment;
  useEffect(() => {
    if (vAlignMent === 'Align-Right') {
      setVerticalAlignment('flex-start');
    }
    if (vAlignMent === 'Align-Vertically') {
      setVerticalAlignment('center');
    }
    if (vAlignMent === 'Align-Left') {
      setVerticalAlignment('flex-end');
    }
  }, [setting?.btnVerticalDivAlignment]);

  const hAlignMent = setting?.btnHorizontalDivAlignment;
  useEffect(() => {
    if (hAlignMent === 'Align') {
      setHorizontalAlignment('flex-end');
    }
    if (hAlignMent === 'Align-Horizontally') {
      setHorizontalAlignment('center');
    }
    if (hAlignMent === 'Align-Bottom') {
      setHorizontalAlignment('flex-start');
    }
  }, [setting?.btnHorizontalDivAlignment]);

  const btnHeight = setting?.btnHeight;
  useEffect(() => {
    if (btnHeight === 'lg') {
      console.log('lg');
      setHeight('44px');
    }
    if (btnHeight === 'md') {
      setHeight('36px');
    }
    if (btnHeight === 'sm') {
      setHeight('30px');
    }
  }, [setting?.btnHeight]);

  return (
    <div
      style={{alignItems: verticalAlignment, justifyContent: horizontalAlignment}}
      className="bg-white rounded-lg flex flex-col h-[48px] w-full"
    >
      <a style={{width: setting?.width ? setting?.width : '25%'}} href={setting?.btnLink}>
        <button
          style={{
            color: setting?.textColor,
            backgroundColor: setting?.bgColor,
            fontWeight: setting?.boldTextEditorFunction ? 'bold' : 'normal',
            fontStyle: setting?.italicTextEditorFunction ? 'italic' : 'normal',
            textDecoration: setting?.underlineTextEditorFunction ? 'underline' : 'none',
            textAlign: textStyle,
            borderRadius: setting?.btnBorderRadius ? setting?.btnBorderRadius : '6px',
            height: height ? height : '48px',
          }}
          className="h-9 w-full bg-neutral-main text-white rounded-[14px] flex justify-center items-center gap-2"
        >
          {haveIcon && <IconOfEditingBtn size={16} />}
          {setting?.btnText ? setting?.btnText : 'دکمه'}
        </button>
      </a>
    </div>
  );
};

export default ButtonElement;
