import {useEffect, useMemo, useState} from 'react';
import {AiFillAccountBook, AiOutlineAim} from 'react-icons/ai';
import {icons} from '../../../../../../util/Constatnts';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../../util/types';

type ButtonElementProps = {
  setting?: Record<string, any>;
};

const ButtonElement: React.FC<ButtonElementProps> = ({setting}) => {
  const [btnText, setbtnText] = useState('دکمه');
  const [verticalAlignment, setVerticalAlignment] = useState('center');
  const [horizontalAlignment, setHorizontalAlignment] = useState('center');
  const [textStyle, setTextStyle] = useState<TextAlign | undefined>();
  const [height, setHeight] = useState('متوسط');
  useEffect(() => {
    setbtnText(setting?.btnText);
  }, [setting?.btnText]);
  const func = setting?.textEditorFunction;
  useEffect(() => {
    if (func === 'align left') {
      setTextStyle('left');
    }
    if (func === 'align center') {
      setTextStyle('center');
    }
    if (func === 'align right') {
      setTextStyle('right');
    }
    if (func === 'justify center') {
      setTextStyle('justify');
    }
  }, [func]);

  const align1 = setting?.btnVerticalDivAlignment;
  useEffect(() => {
    if (align1 === 'Align-Right') {
      setVerticalAlignment('flex-start');
    }
    if (align1 === 'Align-Vertically') {
      setVerticalAlignment('center');
    }
    if (align1 === 'Align-Left') {
      setVerticalAlignment('flex-end');
    }
  }, [setting?.btnVerticalDivAlignment]);

  const align2 = setting?.btnHorizontalDivAlignment;
  useEffect(() => {
    if (align2 === 'Align') {
      setHorizontalAlignment('flex-end');
    }
    if (align2 === 'Align-Horizontally') {
      setHorizontalAlignment('center');
    }
    if (align2 === 'Align-Bottom') {
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
      <a style={{width: setting?.width}} href={setting?.btnLink}>
        <button
          style={{
            color: setting?.textColor,
            backgroundColor: setting?.bgColor,
            fontWeight: setting?.boldTextEditorFunction ? 'bold' : 'normal',
            fontStyle: setting?.italicTextEditorFunction ? 'italic' : 'normal',
            textDecoration: setting?.underlineTextEditorFunction ? 'underline' : 'none',
            textAlign: textStyle,
            borderRadius: setting?.btnBorderRadius + 'px',
            height: height ? height : '48px',
          }}
          className="h-9 w-full bg-neutral-main text-white rounded-[14px]"
        >
          {btnText ? btnText : 'دکمه'}
        </button>
      </a>
    </div>
  );
};

export default ButtonElement;
