import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '../../../../Common/IconButton';
import {ButtonElement} from '.';
import {TextElement} from './TextElement';
import {AsideSlice, BuilderSlice} from '../../../../../redux/slices';
import {storeStateTypes} from '../../../../../util/types';
import {pen, trash, yellowHand} from '../../../../../assets/body';

type ElementBoxProps = {
  id: string | number;
  type: 'btns' | 'txt';
  active?: boolean;
};
const ElementBox: React.FC<ElementBoxProps> = ({type, active, id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const component = useSelector((state: storeStateTypes) => state.builder.component.find((comp) => comp.id === id));
  const data = useMemo(() => {
    if (type === 'btns') {
      return <ButtonElement setting={component?.setting} />;
    }
    if (type === 'txt') {
      return <TextElement setting={component?.setting} />;
    }
  }, [type, component]);
  const onClickHandler = () => {
    dispatch(BuilderSlice.actions.setActive({id}));
    dispatch(AsideSlice.actions.setEdittingComponent({id, type}));

    if (type === 'btns') navigate('/home/pageButtons');

    if (type === 'txt') navigate('/home/textPage');
  };

  const isActive = component?.active;
  const style = {border: isActive ? 'rgb(255,209,161) 1px solid' : ''};

  return (
    <div
      onClick={onClickHandler}
      style={style}
      className={`relative mt-[59px] border-secondary-border-light flex p-2 mx-4 my-8 rounded-l-[8px] rounded-b-[8px] gap-2`}
    >
      <div
        style={{display: isActive ? 'flex' : 'none'}}
        className="absolute w-[88px] h-[32px] flex justify-center items-center gap-2 top-0 -translate-y-full right-[-0.5px] border rounded-t-[12px] rounded-l-[12px] border-solid border-secondary-border-light"
      >
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={pen} alt="pen" title="pen" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={trash} alt="trash" title="trash" />
        <IconButton btnStyle="h-[16px] w-[16px]" iconStyle="" src={yellowHand} alt="hand" title="hand" />
      </div>
      {data}
    </div>
  );
};

export default ElementBox;
