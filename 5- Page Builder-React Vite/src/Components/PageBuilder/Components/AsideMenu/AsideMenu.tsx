import {Outlet} from 'react-router-dom';
import {SettingsHeader} from './Inputs/SettingsHeader';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';
import {useMemo} from 'react';
import {PageButtons, PageSetting, TextPage} from '.';

const AsideMenu = () => {
  const type = useSelector((state: storeStateTypes) => state.aside.editingComponentType);
  const setting = useMemo(() => {
    if (type === 'btns') return <PageButtons />;
    if (type === 'txt') return <TextPage />;
    return <PageSetting />;
  }, [type]);
  return (
    <section className="bg-white h-full w-[300px] lg:w-[345px] p-[24px] absolute lg:static -left-[345px] transition-all z-50 shadow-lg overflow-auto">
      <SettingsHeader title="تنظیمات صفحه" />
      {setting}
    </section>
  );
};

export default AsideMenu;
