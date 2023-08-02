import {useMemo, useState} from 'react';

type ButtonElementProps = {
  setting?: Record<string, any>;
};

const ButtonElement: React.FC<ButtonElementProps> = ({setting}) => {
  const [data1, setData1] = useState('center');
  const [data2, setData2] = useState('center');
  const align = setting?.divAlignment;
  useMemo(() => {
    if (align === 'Align-Right') {
      setData1('flex-start');
    }
    if (align === 'Align-Vertically') {
      setData1('center');
    }
    if (align === 'Align-Left') {
      setData1('flex-end');
    }
    if (align === 'Align') {
      setData2('flex-end');
    }
    if (align === 'Align-Horizontally') {
      setData2('center');
    }
    if (align === 'Align-Bottom') {
      setData2('flex-start');
    }
  }, [setting?.divAlignment]);

  return (
    <div
      style={{alignItems: data1, justifyContent: data2}}
      className="bg-white rounded-lg flex flex-col h-[48px] w-full"
    >
      <a href={setting?.btnLink}>
        <button
          style={{color: setting?.textColor, backgroundColor: setting?.bgColor}}
          className="h-9 w-[105px] bg-neutral-main text-white rounded-[14px]"
        >
          دکمه
        </button>
      </a>
    </div>
  );
};

export default ButtonElement;
