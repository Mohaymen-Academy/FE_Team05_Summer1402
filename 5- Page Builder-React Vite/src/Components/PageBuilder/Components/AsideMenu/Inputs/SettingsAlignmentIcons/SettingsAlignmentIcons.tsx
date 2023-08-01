import {IconButton} from '../../../../../Common';
import {
  alignLeft,
  alignVertically,
  alignRight,
  alignBottom,
  alignHorizontally,
  align,
} from '../../../../../../assets/asideMenu';

const SettingsAlignmentIcons = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-6 justify-center items-center w-full">
        <IconButton btnStyle="" iconStyle="w-[24px]" src={align} alt="align6" title="align6" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={alignHorizontally} alt="align5" title="align5" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={alignBottom} alt="align4" title="align4" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={alignRight} alt="align3" title="align3" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={alignVertically} alt="align2" title="align2" />
        <IconButton btnStyle="" iconStyle="w-[24px]" src={alignLeft} alt="align1" title="align1" />
      </div>
    </>
  );
};

export default SettingsAlignmentIcons;
