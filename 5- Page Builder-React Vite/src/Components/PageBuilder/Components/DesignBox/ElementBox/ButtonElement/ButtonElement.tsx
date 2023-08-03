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
  const align = setting?.divAlignment;
  const width = setting?.width;
  const withIcon = setting?.withIcon;
  const IconOfEditingBtn = icons[setting?.iconIndex || 7];

  useEffect(() => {
    if (align === 'Align-Right') {
      setVerticalAlignment('flex-start');
    }
    if (align === 'Align-Vertically') {
      setVerticalAlignment('center');
    }
    if (align === 'Align-Left') {
      setVerticalAlignment('flex-end');
    }
    if (align === 'Align') {
      setHorizontalAlignment('flex-end');
    }
    if (align === 'Align-Horizontally') {
      setHorizontalAlignment('center');
    }
    if (align === 'Align-Bottom') {
      setHorizontalAlignment('flex-start');
    }
  }, [align]);

  return (
    <div
      style={{alignItems: verticalAlignment, justifyContent: horizontalAlignment}}
      className="bg-white rounded-lg flex flex-col h-[48px] w-full"
    >
      <button
        style={{color: setting?.textColor, backgroundColor: setting?.bgColor, width}}
        className="h-9 w-1/4 bg-neutral-main text-white rounded-[14px] flex justify-center items-center gap-2"
      >
        {withIcon && <IconOfEditingBtn />}
        <div>دکمه</div>
      </button>
    </div>
  );
};

export default ButtonElement;
