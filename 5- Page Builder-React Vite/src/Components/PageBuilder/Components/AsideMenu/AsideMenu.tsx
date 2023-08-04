import {SettingsHeader} from './Inputs/SettingsHeader';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';
import {useMemo} from 'react';
import {PageButtons, PageSetting, TextPage} from '.';

const AsideMenu = () => {
  const settingType = useSelector((state: storeStateTypes) => state.aside.editingComponentType);
  
  // data of aside menu that changes by frames
  const setting = useMemo(() => {
    if (settingType === 'btns') return <PageButtons />;
    if (settingType === 'txt') return <TextPage />;
    return <PageSetting />;
  }, [settingType]);
  // header of aside menu that changes by frames
  const headerText: any = useMemo(() => {
    if (settingType === 'btns') return 'دکمه';
    if (settingType === 'txt') return 'متن';
  }, [settingType]);
  return (
    <section className="bg-white h-full w-[300px] lg:w-[345px] p-[24px] absolute lg:static -left-[345px] transition-all z-50 shadow-lg overflow-auto">
      <SettingsHeader title={headerText} />
      {setting}
    </section>
  );
};

export default AsideMenu;
