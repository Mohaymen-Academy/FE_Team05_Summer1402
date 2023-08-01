import {FieldValues, useForm} from 'react-hook-form';
import {ColorsInput} from '../../Inputs/ColorsInput';
import {SettingsAlignmentIcons} from '../../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../../Inputs/SettingsSelectionInput';
import { SettingsTextInput } from '../../../../AsideMenu/Components/Inputs/SettingsTextInput';
import {TextInput} from '../../../../../../Common';
import { SettingsInput } from '../../../../AsideMenu/Components/Inputs/SettingsInput';

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
          inputHeaderName="نوع متن"
          selectionText="عنوان"
          options={[{value: 'متن', text: 'متن'}]}
        />
        <SettingSelectionInput
          inputHeaderName="نوع عنوان"
          selectionText="عنوان H1"
          options={[
            {value: 'H2', text: 'H2'},
            {value: 'H3', text: 'H3'},
            {value: 'H4', text: 'H4'},
            {value: 'H5', text: 'H5'},
            {value: 'H6', text: 'H6'},
          ]}
        />
        <SettingsTextInput
          text="متن مورد نظر خود را وارد کنید"
          placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          divStyle="h-[205px]"
          inputStyle="h-[145px]"
        />
        <ColorsInput text="رنگ" />
        <SettingSelectionInput
          inputHeaderName="سایز فونت"
          selectionText="۲۶"
          options={[
            {value: '12', text: '۱۲'},
            {value: '14', text: '۱۴'},
            {value: '16', text: '۱۶'},
            {value: '18', text: '۱۸'},
            {value: '20', text: '۲۰'},
            {value: '24', text: '۲۴'},
          ]}
          dropMenuStyle={{width: '25%', padding: '0 4px'}}
        />
        <SettingSelectionInput
          inputHeaderName="ارتفاع خطوط"
          selectionText="۲۶"
          options={[
            {value: '12', text: '۱۲'},
            {value: '16', text: '۱۶'},
            {value: '20', text: '۲۰'},
            {value: '24', text: '۲۴'},
            {value: '28', text: '۲۸'},
            {value: '32', text: '۳۲'},
          ]}
          dropMenuStyle={{width: '25%', padding: '0 4px'}}
        />
        <SettingsInput
          text="حاشیه"
          placeholder="۱۶"
          formId="margin"
          register={register}
          errors={errors}
          inputH="40px"
          inputW="36px"
        />
        <SettingsInput
          text="فاصله گذاری"
          placeholder="۱۲"
          formId="padding"
          register={register}
          errors={errors}
          inputH="40px"
          inputW="36px"
        />
        <div className="w-full">
          <TextInput
            labelText="لینک دکمه"
            register={register}
            formId="linkUrl"
            errors={errors}
            placeholder="لینک مورد نظر خود را وارد کنید"
            labelStyle={{fontWeight: 'bold', margin: '0 0px'}}
            inputStyle={{margin: '12px 0'}}
          />
        </div>
      </div>
    </>
  );
};

export default TextPage;
