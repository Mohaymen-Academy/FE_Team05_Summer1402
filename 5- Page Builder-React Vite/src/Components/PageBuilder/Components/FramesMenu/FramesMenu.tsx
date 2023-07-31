import {frameButton} from '../../../../util/Constatnts';
import {Button} from '../../../Common';

const FramesMenu = () => {
  return (
    <aside className="bg-white h-full w-[175px] px-[12px] absolute lg:static -right-[175px] transition-all z-50 shadow-lg">
      <div className="justify-center items-center w-full my-[8px]">
        <h1 className="py-[8px] px-2 font-bold">قالب‌ها</h1>
      </div>
      <div className="text-sm w-full flex flex-col gap-2 justify-start items-center">
        {frameButton.map((btn) => (
          <Button text={btn.text} style="frame" key={btn.id} onClick={() => console.log(btn.id)} />
        ))}
      </div>
    </aside>
  );
};

export default FramesMenu;
