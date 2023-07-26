import React from 'react';
import {useRef} from 'react';
import asideMenuImg from '../../assets/asideMenu/left.svg';
import {asideMenuTagInfo} from '../../util/Constants';
import {AsideMenuTag} from '../AsideMenuTag';

const AsideMenu = () => {
  const sideMenu = useRef<HTMLElement>(null);
  const sideMenuButton = useRef<HTMLButtonElement>(null);
  const sideMenuIcon = useRef<HTMLImageElement>(null);
  const asideAnchor = useRef<HTMLUListElement>(null);

  let sideFlag: boolean = false;

  const closeSideMenu = (e: Event) => {
    e.stopPropagation();
    if (!sideMenu) return;
    if (sideMenu.current !== null && sideMenuIcon.current !== null) {
      sideMenu.current.style.right = '-120px';
      sideMenuIcon.current.style.transform = 'rotate(0deg)';
    }
    sideFlag = false;
  };

  if (asideAnchor.current != null) {
    asideAnchor.current.addEventListener('click', closeSideMenu);
  }

  const toggleSideMenu = (e: MouseEvent) => {
    e.stopPropagation();
    if (!sideMenu) return;
    if (sideMenu.current != null && sideMenuIcon.current != null) {
      if (sideFlag) {
        sideMenu.current.style.right = '-120px';
        sideMenuIcon.current.style.transform = 'rotate(0deg)';
        sideFlag = false;
      } else {
        sideMenu.current.style.right = '0px';
        sideMenuIcon.current.style.transform = 'rotate(180deg)';
        sideFlag = true;
      }
    }
  };
  if (sideMenuButton.current != null) {
    sideMenuButton.current.addEventListener('click', toggleSideMenu);
  }
  // close side menu when we scroll
  document.addEventListener('scroll', closeSideMenu);
  //
  document.addEventListener('click', () => {
    if (!sideFlag) return;
    if (!sideMenu) return;
    if (sideMenu.current != null && sideMenuIcon.current != null) {
      sideMenu.current.style.right = '-120px';
      sideMenuIcon.current.style.transform = 'rotate(180deg)';
    }
    sideFlag = false;
  });
  if (sideMenu.current != null) {
    sideMenu.current.addEventListener('click', (e: Event) => e.stopPropagation());
  }

  return (
    <aside ref={sideMenu} className="grid md:hidden fixed z-[999] top-[80px] right-[-120px] transition-all">
      <div className="text-sm bg-blue-600 relative p-5">
        <ul ref={asideAnchor} className="grid gap-8 text-white">
          {asideMenuTagInfo.map((tag) => (
            <AsideMenuTag title={tag.title} link={tag.link} />
          ))}
        </ul>
        <button
          ref={sideMenuButton}
          className="bg-blue-600 text-center w-8 h-16 border-r-0 rounded-l-md absolute top-10 left-1 -translate-x-full"
        >
          <img ref={sideMenuIcon} src={asideMenuImg} className="transition duration-500 pr-1 filter invert w-9 h-14" />
        </button>
      </div>
    </aside>
  );
};

export default AsideMenu;
