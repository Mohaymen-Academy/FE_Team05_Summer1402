import {FieldValues, useForm} from 'react-hook-form';
import {ColorsInput} from '../Inputs/ColorsInput';
import {SettingsAlignmentIcons} from '../Inputs/SettingsAlignmentIcons';
import {SettingSelectionInput} from '../Inputs/SettingsSelectionInput';
import {SettingsTextInput} from '../Inputs/SettingsTextInput';
import {TextInput} from '../../../../Common';
import {SettingsInput} from '../Inputs/SettingsInput';
import {AiOutlineLink} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../../util/types';
import {BuilderSlice} from '../../../../../redux/slices';
import {ChangeEvent} from 'react';

const TextPage = () => {
  const dispatch = useDispatch();
  const editingId = useSelector((state: storeStateTypes) => state.aside.editingComponentId);
  let isBold = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === editingId)?.setting?.boldTextEditorFunction
  );
  let isUnderline = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === editingId)?.setting?.underlineTextEditorFunction
  );
  let isItalic = useSelector(
    (state: storeStateTypes) =>
      state.builder.component.find((compo) => compo.id === editingId)?.setting?.italicTextEditorFunction
  );
  const textColorChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textColor: e.target?.value}}));
  };
  const changeDivAlignment = (e) => {
    const title = e.target?.title;
    if (title === 'Align-Right' || title === 'Align-Vertically' || title === 'Align-Left') {
      dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textVerticalDivAlignment: e.target.title}}));
    } else {
      dispatch(
        BuilderSlice.actions.setSettings({id: editingId, setting: {textHorizontalDivAlignment: e.target.title}})
      );
    }
  };
  const textLinkChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textLink: e.target?.value}}));
  };
  const textChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textElementText: e.target?.value}}));
  };
  const textEditorChangeHandler = (e) => {
    const title = e.target?.title;
    if (title === 'bold') {
      if (isBold) {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {boldTextEditorFunction: false}}));
        isBold = false;
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {boldTextEditorFunction: true}}));
        isBold = true;
      }
    } else if (title === 'underline') {
      if (isUnderline) {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {underlineTextEditorFunction: false}}));
        isUnderline = false;
      } else {
        isUnderline = true;
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {underlineTextEditorFunction: true}}));
      }
    } else if (title === 'italic') {
      if (isItalic) {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {italicTextEditorFunction: false}}));
        isItalic = false;
      } else {
        dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {italicTextEditorFunction: true}}));
        isItalic = true;
      }
    } else {
      dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textEditorFunction: title}}));
    }
  };
  const textSizeChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {textSize: e.target.value}}));
  };
  const lineHeightChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {lineHeight: e.target.value}}));
  };
  const paddingChangeHandler = (e) => {
    console.log(e.target.value);
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {padding: e.target.value}}));
  };
  const wordSpaceChangeHandler = (e) => {
    dispatch(BuilderSlice.actions.setSettings({id: editingId, setting: {wordSpace: e.target.value}}));
  }
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 mt-3">
      <SettingsAlignmentIcons onClick={changeDivAlignment} />
      <SettingSelectionInput inputHeaderName="نوع متن" selectionText="عنوان" options={[{value: 'متن', text: 'متن'}]} />
      <SettingSelectionInput
        onChange={textSizeChangeHandler}
        inputHeaderName="نوع عنوان"
        selectionText="H1"
        options={[
          {value: 'H1', text: 'H1'},
          {value: 'H2', text: 'H2'},
          {value: 'H3', text: 'H3'},
          {value: 'H4', text: 'H4'},
          {value: 'H5', text: 'H5'},
          {value: 'H6', text: 'H6'},
        ]}
      />
      <SettingsTextInput
        onChange={textChangeHandler}
        onClick={textEditorChangeHandler}
        text="متن مورد نظر خود را وارد کنید"
        placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسورم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        inputHeight="145px"
      />
      <ColorsInput target="textColor" onChange={textColorChangeHandler} text="رنگ" />
      <SettingSelectionInput
        onChange={textSizeChangeHandler}
        inputHeaderName="سایز فونت"
        selectionText="۲۶"
        options={[
          {value: '8', text: '۸'},
          {value: '11', text: '۱۱'},
          {value: '12', text: '۱۲'},
          {value: '14', text: '۱۴'},
          {value: '16', text: '۱۶'},
          {value: '18', text: '۱۸'},
        ]}
        dropMenuStyle={{width: '25%', padding: '0 4px'}}
      />
      <SettingSelectionInput
        onChange={lineHeightChangeHandler}
        inputHeaderName="ارتفاع خطوط"
        selectionText="۲۶"
        options={[
          {value: '1', text: '۱'},
          {value: '2', text: '۲'},
          {value: '4', text: '۴'},
          {value: '6', text: '۶'},
          {value: '8', text: '۸'},
        ]}
        dropMenuStyle={{width: '25%', padding: '0 4px'}}
      />
      <SettingsInput onChange={paddingChangeHandler} inputType="number" text="حاشیه" placeholder="۱۶" smallInput />
      <SettingsInput onChange={wordSpaceChangeHandler} text="فاصله گذاری" placeholder="۱۲" smallInput inputType="number" />
      <div className="w-full">
        <TextInput
          onChange={textLinkChangeHandler}
          labelText="لینک متن"
          placeholder="لینک مورد نظر خود را وارد کنید"
          labelStyle={{fontWeight: 'bold', margin: '0 0px'}}
          inputStyle={{margin: '12px 0'}}
          leftIcon={AiOutlineLink}
        />
      </div>
    </div>
  );
};

export default TextPage;
