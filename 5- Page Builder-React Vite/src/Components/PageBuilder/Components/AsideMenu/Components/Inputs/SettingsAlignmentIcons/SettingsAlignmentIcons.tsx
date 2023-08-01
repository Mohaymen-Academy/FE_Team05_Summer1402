import {IconButton} from '../../../../../../Common';
import icon1 from '../../../../../../../assets/asideMenu/align-left.svg';
import icon2 from '../../../../../../../assets/asideMenu/align-vertically.svg';
import icon3 from '../../../../../../../assets/asideMenu/align-right.svg';
import icon4 from '../../../../../../../assets/asideMenu/align-bottom.svg';
import icon5 from '../../../../../../../assets/asideMenu/align-horizontally.svg';
import icon6 from '../../../../../../../assets/asideMenu/align.svg';

const SettingsAlignmentIcons = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-6 justify-center items-center w-full">
        <IconButton btnStyle="" iconStyle="w-[24px]" src={icon6} alt="align6" title="align6" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={icon5} alt="align5" title="align5" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={icon4} alt="align4" title="align4" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={icon3} alt="align3" title="align3" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={icon2} alt="align2" title="align2" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={icon1} alt="align1" title="align1" />
      </div>
    </>
  );
};

export default SettingsAlignmentIcons;