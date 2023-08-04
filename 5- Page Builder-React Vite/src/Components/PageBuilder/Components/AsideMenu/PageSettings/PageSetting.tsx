import {FieldValues, useForm} from 'react-hook-form';
import {SettingSelectionInput} from '../Inputs/SettingsSelectionInput';
import {SettingsInput} from '../Inputs/SettingsInput';
import {useDispatch, useSelector} from 'react-redux';
import {BuilderSlice} from '../../../../../redux/slices';
import {storeStateTypes} from '../../../../../util/types';

const PageSetting = () => {
  const dispatch = useDispatch();
  // handle elements gap
  const onGapChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(BuilderSlice.actions.setPageSetting({setting: {gap: e.target.value}}));
  };
  const gap = useSelector((state: storeStateTypes) => state.builder.pageSetting.gap);
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 mt-3">
      <SettingSelectionInput
        target="gap"
        onChange={onGapChangeHandler}
        inputHeaderName="فاصله بین فریم‌ها"
        defaultValue={gap}
        options={[
          {value: '0.25rem', text: '۱'},
          {value: '0.5rem', text: '۲'},
          {value: '0.75rem', text: '۳'},
          {value: '1rem', text: '۴'},
          {value: '1.25rem', text: '۵'},
          {value: '1.5rem', text: '۶'},
          {value: '2rem', text: '۸'},
          {value: '2.5rem', text: '۱۰'},
          {value: '3rem', text: '۱۲'},
        ]}
      />
      <SettingsInput
        target="paddingY"
        onChange={(e) => dispatch(BuilderSlice.actions.setPageSetting({setting: {paddingY: `${e.target.value}`}}))}
        inputType="number"
        smallInput
        formId="padding"
        text="حاشیه"
        placeholder="۱۶"
      />
      <SettingsInput
        target="paddingX"
        onChange={(e) => dispatch(BuilderSlice.actions.setPageSetting({setting: {paddingX: `${e.target.value}`}}))}
        inputType="number"
        smallInput
        formId="margin"
        text="فاصله از دیوار"
        placeholder="۲۴"
      />
    </div>
  );
};

export default PageSetting;
