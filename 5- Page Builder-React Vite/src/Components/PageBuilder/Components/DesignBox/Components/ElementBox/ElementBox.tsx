import React from 'react';
import pen from '../../../../../../assets/body/yellow pen.svg';
import trash from '../../../../../../assets/body/yellow trash.svg';
import hand from '../../../../../../assets/body/yellow hand.svg';
import {IconButton} from '../../../../../Common/IconButton';
import plus from '../../../../../../assets/body/plus.svg';

const ElementBox = () => {
  return (
    <div className="relative mt-[59px] border border-secondary-border-light border-solid flex p-2 mx-4 my-8 rounded-l-[8px] rounded-b-[8px] h-[75px] gap-2">
      <div className="absolute w-[88px] h-[32px] flex justify-center items-center gap-2 top-0 -translate-y-full right-[-0.5px] border rounded-t-[12px] rounded-l-[12px] border-solid border-secondary-border-light">
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={pen} alt="pen" title="pen" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={trash} alt="trash" title="trash" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={hand} alt="hand" title="hand" />
      </div>
      <div className="bg-white border-2 border-dashed border-primary-border-light rounded-lg flex flex-col justify-center items-center w-full">
        <button className="h-9 w-[105px] bg-neutral-main text-white rounded-[14px]">دکمه</button>
      </div>
      <div className="bg-white border-2 border-dashed border-primary-border-light rounded-lg flex flex-col justify-center items-center w-full">
        <div className="w-8 h-8 flex justify-center items-center">
          <button className="h-8 rounded-lg w-full flex justify-center items-center bg-primary-light">
            <img className="w-4 h-4" src={plus} alt="افزودن" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElementBox;
