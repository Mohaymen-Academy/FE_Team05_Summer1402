import {FieldValues, useForm} from 'react-hook-form';
import {SettingSelectionInput} from '../../Inputs/SettingsSelectionInput';
import {SettingsInput} from '../../Inputs/SettingsInput';

const PageSetting = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      gap: '',
      padding: '',
      margin: '',
    },
  });
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 mt-3">
      <SettingSelectionInput
        inputHeaderName="فاصله بین فریم ها"
        selectionText="پیش فرض"
        options={[
          {value: '1', text: '۱'},
          {value: '2', text: '۲'},
          {value: '3', text: '۳'},
          {value: '4', text: '۴'},
          {value: '6', text: '۶'},
          {value: '8', text: '۸'},
          {value: '10', text: '۱۰'},
          {value: '12', text: '۱۲'},
        ]}
      />
      <SettingsInput
        inputType="number"
        smallInput
        register={register}
        errors={errors}
        formId="padding"
        text="حاشیه"
        placeholder="۱۶"
      />
      <SettingsInput
        inputType="number"
        smallInput
        register={register}
        errors={errors}
        formId="margin"
        text="فاصله از دیوار"
        placeholder="۲۴"
      />
    </div>
  );
};

export default PageSetting;
