import {useRef, useEffect} from 'react';
import asideMenuImg from '../../../../assets/asideMenu/left.svg';
import {asideMenuTagInfo} from '../../../../util/Constants';
import {AsideMenuTag} from './Components/AsideMenuTag';

const AsideMenu = () => {
  const sideMenu = useRef<HTMLElement>(null);
  const sideMenuButton = useRef<HTMLButtonElement>(null);
  const sideMenuIcon = useRef<HTMLImageElement>(null);
  const asideAnchor = useRef<HTMLUListElement>(null);

  let sideFlag: boolean = false;
  useEffect(() => {
    // just close side menu
    const closeSideMenu = (e: Event) => {
      e.stopPropagation();
      if (!sideMenu) return;
      if (sideMenu.current !== null && sideMenuIcon.current !== null) {
        sideMenu.current.style.right = '-120px';
        sideMenuIcon.current.style.transform = 'rotate(0deg)';
      }
      sideFlag = false;
    };
    // close side menu after click on anchors
    if (asideAnchor.current != null) {
      asideAnchor.current.addEventListener('click', closeSideMenu);
    }
    // toggle side menu function
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
    // toggle side menu after click on side menu button
    if (sideMenuButton.current != null) {
      sideMenuButton.current.addEventListener('click', toggleSideMenu);
    }
    // close side menu when we scroll
    document.addEventListener('scroll', closeSideMenu);
    // rotate button after click
    document.addEventListener('click', () => {
      if (!sideFlag) return;
      if (!sideMenu) return;
      if (sideMenu.current != null && sideMenuIcon.current != null) {
        sideMenu.current.style.right = '-120px';
        sideMenuIcon.current.style.transform = 'rotate(0deg)';
      }
      sideFlag = false;
    });
    // prevent to close side menu after we click on side menu
    if (sideMenu.current != null) {
      sideMenu.current.addEventListener('click', (e: Event) => e.stopPropagation());
    }

    //change top by scroll
    function sleep(time: number) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Waited for ' + time);
        }, time);
      });
    }
    document.addEventListener('scroll', async () => {
      let scrollDirection;
      let previousScrollPosition = document.documentElement.scrollTop;
      await sleep(100);
      const currentScrollPosition = document.documentElement.scrollTop;

      if (currentScrollPosition > previousScrollPosition) {
        scrollDirection = 'down';
      } else if (currentScrollPosition < previousScrollPosition) {
        scrollDirection = 'up';
      }
      const scrolledHeight = document.documentElement.scrollTop;
      if (scrollDirection === 'down')
        if (scrolledHeight > 40) {
          if (sideMenu.current != null) {
            sideMenu.current.style.top = '0px';
          }
        }
      if (scrollDirection === 'up') {
        if (sideMenu.current != null) {
          sideMenu.current.style.top = '80px';
        }
      }
    });
  }, []);

  return (
    <aside ref={sideMenu} className="grid md:hidden fixed z-[999] top-[80px] right-[-120px] transition-all">
      <div className="text-sm bg-blue-600 relative p-5">
        <ul ref={asideAnchor} className="grid gap-8 text-white">
          {asideMenuTagInfo.map((tag) => (
            <AsideMenuTag title={tag.title} link={tag.link} key={tag.id} />
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
