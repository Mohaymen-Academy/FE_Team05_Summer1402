import {useEffect, useMemo, useState} from 'react';

type ButtonElementProps = {
  setting?: Record<string, any>;
};

const ButtonElement: React.FC<ButtonElementProps> = ({setting}) => {
  const [btnText, setbtnText] = useState('دکمه');
  const [data1, setData1] = useState('center');
  const [data2, setData2] = useState('center');
  const [textStyle, setTextStyle] = useState();

  useMemo(() => {
    setbtnText(setting?.btnText);
  }, [setting?.btnText]);
  const func = setting?.textEditorFunction;
  useEffect(() => {
    console.log(func);
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
  useMemo(() => {
    if (align1 === 'Align-Right') {
      setData1('flex-start');
    }
    if (align1 === 'Align-Vertically') {
      setData1('center');
    }
    if (align1 === 'Align-Left') {
      setData1('flex-end');
    }
  }, [setting?.btnVerticalDivAlignment]);

  const align2 = setting?.btnHorizontalDivAlignment;
  useMemo(() => {
    if (align2 === 'Align') {
      setData2('flex-end');
    }
    if (align2 === 'Align-Horizontally') {
      setData2('center');
    }
    if (align2 === 'Align-Bottom') {
      setData2('flex-start');
    }
  }, [setting?.btnHorizontalDivAlignment]);

  return (
    <div
      style={{alignItems: data1, justifyContent: data2}}
      className="bg-white rounded-lg flex flex-col h-[48px] w-full"
    >
      <a href={setting?.btnLink}>
        <button
          style={{
            color: setting?.textColor,
            backgroundColor: setting?.bgColor,
            fontWeight: setting?.boldTextEditorFunction ? 'bold' : 'normal',
            fontStyle: setting?.italicTextEditorFunction ? 'italic' : 'normal',
            textDecoration: setting?.underlineTextEditorFunction ? 'underline' : 'none',
            textAlign: textStyle,
          }}
          className="h-9 w-[105px] bg-neutral-main text-white rounded-[14px]"
        >
          {btnText ? btnText : 'دکمه'}
        </button>
      </a>
    </div>
  );
};

export default ButtonElement;
