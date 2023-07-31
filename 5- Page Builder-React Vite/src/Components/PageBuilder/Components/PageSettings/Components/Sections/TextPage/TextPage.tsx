import {ColorsInput} from '../../Inputs/ColorsInput';
import {SettingsAlignmentIcons} from '../../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../../Inputs/SettingsSelectionInput';
import {SettingsTextInput} from '../../Inputs/SettingsTextInput';

const TextPage = () => {
  return (
    <div className="">
      <SettingsAlignmentIcons />
      {/* <SettingSelectionInput inputHeaderName="نوع متن" selectionText="عنوان" /> */}
      {/* <SettingSelectionInput inputHeaderName="نوع عنوان" selectionText="عنوان h1" /> */}
      <SettingsTextInput
        text="متن مورد نظر خود را وارد کنید"
        placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        inputStyle="h-[145px]"
        divStyle="h-[205px]"
      />
      <ColorsInput text="رنگ" />
    </div>
  );
};

export default TextPage;
