import icon1 from '../../../../../../assets/body/pen.svg';
import icon2 from '../../../../../../assets/body/up.svg';
import icon3 from '../../../../../../assets/body/down.svg';
import icon4 from '../../../../../../assets/body/lock.svg';
import icon5 from '../../../../../../assets/body/trash.svg';
import {IconButton} from '../../../../../Common/IconButton';

const DesignBoxSettings = () => {
  return (
    <div className="w-9 flex flex-col gap-2 absolute -left-4 -translate-x-full">
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={icon1} alt="وبرایش" title="وبرایش" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={icon2} alt="صفحه قبل" title="صفحه قبل" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={icon3} alt="صفحه بعد" title="صفحه بعد" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={icon4} alt="قفل صفحه" title="قفل صفحه" />
      <IconButton iconStyle="w-full" btnStyle="btn-edit" src={icon5} alt="حذف" title="حذف" />
    </div>
  );
};

export default DesignBoxSettings;
