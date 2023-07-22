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
let sideFlag = false;
function toggleSideMenu(e: Event) {
  e.stopPropagation();
  if (!sideMenu) return;

  if (sideFlag) {
    sideMenu.style.right = '-120px';
    sideMenuIcon.style.transform = 'rotate(180deg)';
    sideFlag = false;
  } else {
    sideMenu.style.right = '0px';
    sideMenuIcon.style.transform = 'rotate(0deg)';
    sideFlag = true;
  }
}

sideMenuButton.addEventListener('click', toggleSideMenu);
document.addEventListener('click', () => {
  if (!sideMenu) return;
  sideMenu.style.right = '-120px';
  sideMenuIcon.style.transform = 'rotate(180deg)';
  sideFlag = false;
});
sideMenu?.addEventListener('click', (e: Event) => e.stopPropagation());

// card slider
const myCategory = document.getElementsByClassName('my-category');
const showMore = document.getElementsByClassName('show-more');

//intersection observer for banners
console.log(banners);
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
