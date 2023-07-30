import {SettingsHeader} from '../SettingsHeader';
import {SettingsInput} from '../SettingsInput';
import {SettingSelectionInput} from '../SettingsSelectionInput';
import {SettingsAlignmentIcons} from '../SettingsAlignmentIcons';
import {SettingsFrameSelection} from '../SettingsFrameSelection';
import {SettingsAddImg} from '../SettingsAddImg';
import {ColorsInput} from '../ColorsInput';
import {SettingsTextInput} from '../SettingsTextInput';

const PageSettings = () => {
  return (
    <section className="bg-white h-full w-[300px] lg:w-[345px] p-[24px] absolute lg:static -left-[345px] transition-all z-50 shadow-lg ">
      <SettingsHeader title="تنظیمات صفحه" />
      <SettingsAddImg />
      <SettingSelectionInput
        inputHeaderName=""
        selectionText="نوع کارت خود را انتخاب کنید"
        selectStyle="flex justify-center w-[294px] h-[40px] input-drop"
        headerStyle="hidden"
        option1="کارت1"
        option2="کارت2"
        option3="کارت3"
        option4="کارت4"
      />
      <div className="w-full flex flex-col justify-start items-center gap-4 mt-3">
        {/* <SettingsAlignmentIcons /> */}
        <SettingSelectionInput
          inputHeaderName="فاصله بین فریم ها"
          selectionText="پیش فرض"
          selectStyle="input-drop"
          headerStyle=""
          option1="2"
          option2="4"
          option3="8"
          option4="12"
        />
        <ColorsInput text="رنگ" />
        <SettingsInput text="حاشیه" placeholder="۱۶" />
        <SettingsInput text="فاصله از دیواره" placeholder="۲۴" />
        {/* <SettingsTextInput
          text="متن مورد نظر خود را وارد کنید"
          placeholder="لورم ایپسوم"
          inputStyle=" w-[298px] h-[145px] "
          divStyle="h-[205px]"
        /> */}
      </div>
      <SettingsFrameSelection />
    </section>
  );
};

export default PageSettings;
