import {FieldValues, useForm} from 'react-hook-form';
import {Switch, useDisclosure} from '@chakra-ui/react';
import {SettingsAlignmentIcons} from '../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../Inputs/SettingsSelectionInput';
import {ColorsInput} from '../Inputs/ColorsInput';
import {TextInput} from '../../../../Common';
import {SettingsTextInput} from '../Inputs/SettingsTextInput';
import {AiOutlineLink} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import state from 'sweetalert/typings/modules/state';
import {storeStateTypes} from '../../../../../util/types';
import {BuilderSlice} from '../../../../../redux/slices';

const PageButtons = () => {
  const dispatch = useDispatch();
  const edittingId = useSelector((state: storeStateTypes) => state.aside.edittingComponentId);
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
  const textColorChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {textColor: e.target.value}}));
  };

  const bgColorChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {bgColor: e.target.value}}));
  };
  const changeBtnAlignment = (e) => {
    console.log(e.target.title);
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {divAlignment: e.target.title}}));
  };

  return (
    <div className="w-full flex flex-col justify-start items-center gap-7 mt-3">
      <SettingsAlignmentIcons onClick={changeBtnAlignment} />
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
      <SettingsTextInput text="متن" inputHeight="50px" placeholder="لورم ایپسوم" />
      <ColorsInput onChange={bgColorChangeHandler} target="bgColor" text="رنگ پس زمینه" />
      <ColorsInput onChange={textColorChangeHandler} target="textColor" text="رنگ متن" />
      <div className="w-full flex justify-between">
        <div className="text-[14px] font-semibold">
          <p>آیکون دار</p>
        </div>
        <Switch />
      </div>
      <div className="w-full">
        <TextInput
          labelText="لینک دکمه"
          register={register}
          formId="linkUrl"
          errors={errors}
          placeholder="لینک مورد نظر خود را وارد کنید"
          labelStyle={{fontWeight: 'bold', margin: '0 0px'}}
          inputStyle={{margin: '12px 0'}}
          leftIcon={AiOutlineLink}
        />
      </div>
    </div>
  );
};

export default PageButtons;
