import pen from '../../../../../../assets/body/yellow pen.svg';
import trash from '../../../../../../assets/body/yellow trash.svg';
import hand from '../../../../../../assets/body/yellow hand.svg';
import {IconButton} from '../../../../../Common/IconButton';
import plus from '../../../../../../assets/body/plus.svg';
import {Outlet, Routes, Route} from 'react-router-dom';
import {ButtonElement} from '.';
import {TextElement} from './Components/TextElement';
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BuilderSlice} from '../../../../../../redux/slices';
import state from 'sweetalert/typings/modules/state';
import {storeStateTypes} from '../../../../../../util/types';
import {border} from '@chakra-ui/react';
import {color} from 'framer-motion';

type ElementBoxProps = {
  id: string | number;
  type: 'btns' | 'txt';
  active?: boolean;
};
const ElementBox: React.FC<ElementBoxProps> = ({type, active, id}) => {
  const dispatch = useDispatch();
  const components = useSelector((state: storeStateTypes) => state.builder.component);
  const data = useMemo(() => {
    if (type === 'btns') {
      return <ButtonElement />;
    }
    if (type === 'txt') {
      return <TextElement />;
    }
  }, [type]);
  const setActive = () => {
    console.log();
    dispatch(BuilderSlice.actions.setActive({id}));
  };

  const isActive = components.find((comp) => comp.id === id)?.active;
  const style = {border: isActive ? 'rgb(255,209,161) 1px solid' : ''};

  useEffect(() => {
    console.log('rerender');
  });

  return (
    <div
      onClick={setActive}
      style={style}
      className={`relative mt-[59px] border-secondary-border-light flex p-2 mx-4 my-8 rounded-l-[8px] rounded-b-[8px] gap-2`}
    >
      <div
        style={{display: isActive ? 'flex' : 'none'}}
        className="absolute w-[88px] h-[32px] flex justify-center items-center gap-2 top-0 -translate-y-full right-[-0.5px] border rounded-t-[12px] rounded-l-[12px] border-solid border-secondary-border-light"
      >
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={pen} alt="pen" title="pen" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={trash} alt="trash" title="trash" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={hand} alt="hand" title="hand" />
      </div>
      {data}
    </div>
  );
};

export default ElementBox;
