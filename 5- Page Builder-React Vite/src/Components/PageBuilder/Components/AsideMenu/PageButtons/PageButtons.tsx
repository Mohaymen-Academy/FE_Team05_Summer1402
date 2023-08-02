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
  const edittingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
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
  let isBold = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === edittingId)?.setting?.boldTextEditorFunction
  );
  let isUnderline = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === edittingId)?.setting?.underlineTextEditorFunction
  );
  let isItalic = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === edittingId)?.setting?.italicTextEditorFunction
  );
  const textColorChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {textColor: e.target.value}}));
  };

  const bgColorChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {bgColor: e.target.value}}));
  };
  const changeBtnAlignment = (e) => {
    const title = e.target?.title;
    if (title === 'Align-Right' || title === 'Align-Vertically' || title === 'Align-Left') {
      dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnVerticalDivAlignment: e.target.title}}));
    } else {
      dispatch(
        BuilderSlice.actions.setSettings({id: edittingId, setting: {btnHorizontalDivAlignment: e.target.title}})
      );
    }
  };
  const btnLinkChangeHandler = (e) => {
    console.log(e.target.value);
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnLink: e.target.value}}));
  };
  const btnTextChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {btnText: e.target.value}}));
  };
  const btnTextEditorChangeHandler = (e) => {
    const title = e.target?.title;
    if (title === 'bold') {
      if (isBold === null) isBold = true;
      if (isBold) {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {boldTextEditorFunction: false}}));
        isBold = false;
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {boldTextEditorFunction: true}}));
        isBold = true;
      }
    } else if (title === 'underline') {
      if (isUnderline) {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {underlineTextEditorFunction: false}}));
        isUnderline = false;
      } else {
        isUnderline = true;
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {underlineTextEditorFunction: true}}));
      }
    } else if (title === 'italic') {
      if (isItalic) {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {italicTextEditorFunction: false}}));
        isItalic = false;
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {italicTextEditorFunction: true}}));
        isItalic = true;
      }
    } else {
      dispatch(BuilderSlice.actions.setSettings({id: edittingId, setting: {textEditorFunction: title}}));
    }
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
      <SettingsTextInput
        onClick={btnTextEditorChangeHandler}
        onChange={btnTextChangeHandler}
        text="متن"
        inputHeight="50px"
        placeholder="لورم ایپسوم"
      />
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
          onChange={btnLinkChangeHandler}
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
