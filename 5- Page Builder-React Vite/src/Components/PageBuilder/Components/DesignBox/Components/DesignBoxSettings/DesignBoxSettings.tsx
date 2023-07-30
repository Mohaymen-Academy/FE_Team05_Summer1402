import icon1 from '../../../../../../assets/body/pen.png';
import icon2 from '../../../../../../assets/body/up.png';
import icon3 from '../../../../../../assets/body/down.png';
import icon4 from '../../../../../../assets/body/lock.png';
import icon5 from '../../../../../../assets/body/trash.png';
import {IconButton} from '../../../../../Common/IconButton';

const DesignBoxSettings = () => {
  return (
    <div className="w-9 flex flex-col gap-2 absolute -left-4 -translate-x-full">
      <IconButton iconStyle="w-[80%]" btnStyle="btn-edit" src={icon1} alt="وبرایش" title="وبرایش" />
      <IconButton iconStyle="w-[80%]" btnStyle="btn-edit" src={icon2} alt="صفحه قبل" title="صفحه قبل" />
      <IconButton iconStyle="w-[80%]" btnStyle="btn-edit" src={icon3} alt="صفحه بعد" title="صفحه بعد" />
      <IconButton iconStyle="w-[80%]" btnStyle="btn-edit" src={icon4} alt="قفل صفحه" title="قفل صفحه" />
      <IconButton iconStyle="w-[80%]" btnStyle="btn-edit" src={icon5} alt="حذف" title="حذف" />
    </div>
  );
};

export default DesignBoxSettings;
