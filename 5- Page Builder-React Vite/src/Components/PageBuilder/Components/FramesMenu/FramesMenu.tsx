import {frameButton} from '../../../../util/Constatnts';
import {Button} from '../../../Common';
import DraggableComponent from './DraggableComponent/DraggableComponent';

type FramesMenu = {
  activeDragId?: string;
};
const FramesMenu: React.FC<FramesMenu> = ({activeDragId}) => {
  return (
    <aside className="bg-white h-full w-[175px] px-[12px] absolute lg:static -right-[175px] transition-all z-50 shadow-lg">
      <div className="justify-center items-center w-full my-[8px]">
        <h1 className="py-[8px] px-2 font-bold">قالب‌ها</h1>
      </div>
      <div className="text-sm w-full flex flex-col gap-2 justify-start items-center">
        {frameButton.map((btn) => (
          <DraggableComponent id={btn.id} key={btn.id}>
            <Button style="frame" text={btn.text} />
          </DraggableComponent>
        ))}
      </div>
    </aside>
  );
};

export default FramesMenu;
