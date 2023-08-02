import {Outlet} from 'react-router-dom';
import {SettingsHeader} from './Inputs/SettingsHeader';

const AsideMenu = () => {
  return (
    <section className="bg-white h-full w-[300px] lg:w-[345px] p-[24px] absolute lg:static -left-[345px] transition-all z-50 shadow-lg overflow-auto">
      <SettingsHeader title="تنظیمات صفحه" />
      <Outlet />
    </section>
  );
};

export default AsideMenu;
