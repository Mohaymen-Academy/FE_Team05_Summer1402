import {ColorsInput} from '../../Inputs/ColorsInput';
import {SettingsAddImg} from '../../Inputs/SettingsAddImg';
import {SettingsFrameSelection} from '../../Inputs/SettingsFrameSelection';
import {SettingsInput} from '../../Inputs/SettingsInput';
import {SettingSelectionInput} from '../../Inputs/SettingsSelectionInput';

const PageSetting = () => {
  return (
    <div>
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
      </div>
      <SettingsFrameSelection />
    </div>
  );
};

export default PageSetting;
