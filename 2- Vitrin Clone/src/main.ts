///////selectors
const body = document.body;
const headerElement = document.getElementById('header');
const mobileHeaderElement = document.getElementById('mobile-header');
const asideTag = document.getElementById('side-menu');
const banners = document.querySelectorAll('.banner');

////functions

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Waited for ' + time);
    }, time);
  });
}

///////event listeners

//hide and show top header by scroll
document.addEventListener('scroll', async () => {
  if (!headerElement) return;

  let scrollDirection;
  let previousScrollPosition = document.documentElement.scrollTop;
  await sleep(100);
  const currentScrollPosition = document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition) {
    scrollDirection = 'down';
  } else if (currentScrollPosition < previousScrollPosition) {
    scrollDirection = 'up';
  }

  // previousScrollPosition = currentScrollPosition;

  const scrolledHeight = document.documentElement.scrollTop;
  if (scrollDirection === 'down')
    if (scrolledHeight > 40) {
      headerElement.style.top = '-80px';
      if (mobileHeaderElement != null) {
        mobileHeaderElement.style.top = '-80px';
      }
      if (asideTag != null) {
        asideTag.style.top = '0px';
      }
    }
  if (scrollDirection === 'up') {
    headerElement.style.top = '0px';
    if (mobileHeaderElement != null) {
      mobileHeaderElement.style.top = '0px';
    }
    if (asideTag != null) {
      asideTag.style.top = '80px';
    }
  }
  
});

// side menu
const sideMenu = document.getElementById('side-menu');
const sideMenuButton = document.getElementById('side-menu-button') as HTMLImageElement;
const sideMenuIcon = document.getElementById('side-menu-icon') as HTMLImageElement;
const sideMenuAnchors = document.querySelectorAll('.anchor') as NodeListOf<HTMLAnchorElement>;
sideMenuAnchors.forEach((sideMenuAnchor) => {
  sideMenuAnchor.addEventListener('click', closeSideMenu);
});
let sideFlag = false;
// close menu after click on anchors
function closeSideMenu(e: Event) {
  e.stopPropagation();
  if (!sideMenu) return;
  sideMenu.style.right = '-120px';
  sideMenuIcon.style.transform = 'rotate(0deg)';
  sideFlag = false;
}

function toggleSideMenu(e: Event) {
  e.stopPropagation();
  if (!sideMenu) return;

  if (sideFlag) {
    sideMenu.style.right = '-120px';
    sideMenuIcon.style.transform = 'rotate(0deg)';
    sideFlag = false;
  } else {
    sideMenu.style.right = '0px';
    sideMenuIcon.style.transform = 'rotate(180deg)';
    sideFlag = true;
  }
}

sideMenuButton.addEventListener('click', toggleSideMenu);
document.addEventListener('click', () => {
  if (!sideFlag) return;
  if (!sideMenu) return;
  sideMenu.style.right = '-120px';
  sideMenuIcon.style.transform = 'rotate(180deg)';
  sideFlag = false;
});
sideMenu?.addEventListener('click', (e: Event) => e.stopPropagation());

//intersection observer for banners
const bannerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const text = entry.target.getElementsByClassName('banner-text')[0] as HTMLElement;
    const image = entry.target.getElementsByClassName('banner-img')[0] as HTMLElement;
    if (entry.isIntersecting) {
      (entry.target as HTMLElement).style.opacity = '1';
      (entry.target as HTMLElement).style.transform = 'translate(0)';
      text.style.transform = 'translate(0)';
      image.style.transform = 'translate(0)';
    }
  });
});

banners.forEach((banner) => bannerObserver.observe(banner));

//search icon

const searchIcon2 = document.getElementById('searchButton');
const searchInput2 = document.getElementById('searchInput') as HTMLInputElement;
const searchSVG2 = document.getElementById('searchSVG');
const searchBtn2 = document.getElementById('searchButton');
let flag = false;
if (searchIcon2 != null) {
  searchIcon2.addEventListener('click', (e: Event) => {
    if (flag) return;
    e.stopPropagation();
    if (searchInput2 != null) {
      if (!flag) {
        if (searchSVG2 != null) {
          searchSVG2.classList.remove('invert');
        }
        if (searchBtn2 != null) {
          searchBtn2.classList.add('hidden');
        }
        if (searchInput2 != null && searchBtn2 != null) {
          searchInput2.classList.remove('hidden');
          searchBtn2.classList.remove('bg-blue-600');
          flag = true;
        }
      }
    }
  });
}
if (searchInput2 != null) {
  searchInput2.addEventListener('click', (e: Event) => {
    e.stopPropagation();
  });
}

document.addEventListener('click', (e: Event) => {
  e.stopPropagation();
  if (flag) {
    if (searchSVG2 != null) {
      searchSVG2.classList.add('invert');
    }
    if (searchBtn2 != null) {
      searchBtn2.classList.remove('hidden');
    }
    if (searchInput2 != null && searchBtn2 != null) {
      searchInput2.classList.add('hidden');
      searchBtn2.classList.add('bg-blue-600');
      searchInput2.value = '';
      flag = false;
    }
  }
});

// close side menu when we scroll
document.addEventListener('scroll', closeSideMenu);
