import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FieldValues, useForm} from 'react-hook-form';
import {Switch, useDisclosure} from '@chakra-ui/react';
import {AiOutlineLink, AiOutlinePlus} from 'react-icons/ai';

import {SettingsAlignmentIcons} from '../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../Inputs/SettingsSelectionInput';
import {ColorsInput} from '../Inputs/ColorsInput';
import {IconButton, TextInput} from '../../../../Common';
import {SettingsTextInput} from '../Inputs/SettingsTextInput';
import {storeStateTypes} from '../../../../../util/types';
import {BuilderSlice} from '../../../../../redux/slices';
import {IconModal} from './IconModal';
import {icons} from '../../../../../util/Constatnts';

const PageButtons = () => {
  //for modal
  const {isOpen, onClose, onOpen} = useDisclosure();
  const dispatch = useDispatch();
  const edittingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  const haveIcon = useSelector(
    (state: storeStateTypes) => state.builder.component.find((compo) => compo.id === edittingId)?.setting?.withIcon
  );
  const IconOfEditingBtn =
    icons[
      useSelector(
        (state: storeStateTypes) => state.builder.component.find((compo) => compo.id === edittingId)?.setting?.iconIndex
      ) || 7
    ];
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
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {divAlignment: e.target.title}}));
  };

  const onButtonWidthChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {width: e.target.value}}));
  };

  const withIconCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {withIcon: e.target.checked}}));
  };

  return (
    <div className="w-full flex flex-col justify-start items-center gap-7 mt-3">
      <SettingsAlignmentIcons onClick={changeBtnAlignment} />
      <SettingSelectionInput
        defaultValue="25%"
        inputHeaderName="اندازه دکمه"
        options={[
          {value: '100%', text: 'بزرگ'},
          {value: '50%', text: 'متوسط'},
          {value: '25%', text: 'کوچک'},
        ]}
      />
      <SettingSelectionInput
        defaultValue="25%"
        inputHeaderName="عرض دکمه"
        onChange={onButtonWidthChangeHandler}
        options={[
          {value: '100%', text: 'بزرگ'},
          {value: '50%', text: 'متوسط'},
          {value: '25%', text: 'کوچک'},
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
        <Switch onChange={withIconCheckHandler} checked={haveIcon} />
      </div>
      {haveIcon && (
        <div className="w-full flex justify-between">
          <div className="text-[14px] font-semibold">
            <p>انتخاب آیکون</p>
          </div>
          <button className="h-10 w-10 rounded-lg flex justify-center items-center bg-primary-light" onClick={onOpen}>
            <IconOfEditingBtn size={24} />
          </button>
        </div>
      )}
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
      <IconModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default PageButtons;
