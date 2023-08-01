import pen from '../../../../../../assets/body/yellow pen.svg';
import trash from '../../../../../../assets/body/yellow trash.svg';
import hand from '../../../../../../assets/body/yellow hand.svg';
import {IconButton} from '../../../../../Common/IconButton';
import plus from '../../../../../../assets/body/plus.svg';
import {Outlet, Routes, Route} from 'react-router-dom';
import {ButtonElement} from '.';
import {TextElement} from './Components/TextElement';
import {useMemo} from 'react';

type ElementBoxProps = {
  type: 'btns' | 'txt';
  active?: boolean;
};
const ElementBox: React.FC<ElementBoxProps> = ({type, active}) => {
  const data = useMemo(() => {
    if (type === 'btns') {
      return <ButtonElement />;
    }
    if (type === 'txt') {
      return <TextElement />;
    }
  }, [type]);

  console.log(data);

  return (
    <div className="relative mt-[59px] border border-secondary-border-light border-solid flex p-2 mx-4 my-8 rounded-l-[8px] rounded-b-[8px] gap-2">
      <div className="absolute w-[88px] h-[32px] flex justify-center items-center gap-2 top-0 -translate-y-full right-[-0.5px] border rounded-t-[12px] rounded-l-[12px] border-solid border-secondary-border-light">
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={pen} alt="pen" title="pen" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={trash} alt="trash" title="trash" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={hand} alt="hand" title="hand" />
      </div>
      {data}
    </div>
  );
};

export default ElementBox;
