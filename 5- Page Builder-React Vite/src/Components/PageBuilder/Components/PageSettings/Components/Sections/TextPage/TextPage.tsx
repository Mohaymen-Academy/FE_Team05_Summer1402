import {FieldValues, useForm} from 'react-hook-form';
import {ColorsInput} from '../../Inputs/ColorsInput';
import {SettingsAlignmentIcons} from '../../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../../Inputs/SettingsSelectionInput';
import {SettingsTextInput} from '../../Inputs/SettingsTextInput';

const TextPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      padding: '',
      margin: '',
      linkUrl: '',
    },
  });
  return (
    <>
      <SettingsAlignmentIcons />
      <div className="w-full flex flex-col justify-start items-center gap-5 mt-3">
        <SettingSelectionInput
          inputHeaderName="اندازه دکمه"
          selectionText="پیش فرض"
          options={[
            {value: 'lg', text: 'بزرگ'},
            {value: 'md', text: 'متوسط'},
            {value: 'sm', text: 'کوچک'},
          ]}
        />
        <SettingSelectionInput
          inputHeaderName="عرض دکمه"
          selectionText="پیش فرض"
          options={[
            {value: 'lg', text: 'بزرگ'},
            {value: 'md', text: 'متوسط'},
            {value: 'sm', text: 'کوچک'},
          ]}
        />
        <SettingSelectionInput
          inputHeaderName="گوشه‌ها"
          selectionText="۴"
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
          dropMenuStyle={{width: '25%', padding: '0 4px'}}
        />
      </div>
    </>
  );
};

export default TextPage;
