///////selectors
const body = document.body;
const headerElement = document.getElementById('header');
const mobileHeaderElement = document.getElementById('mobile-header');

const asideTag = document.getElementById('side-menu');

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
const sideMenuIcon = document.getElementById('side-menu-icon') as HTMLImageElement;
let sideFlag = false;
function toggleSideMenu() {
  console.log('1');
  if (!sideFlag) {
    sideFlag = true;
    if (sideMenu != null) {
      sideMenu.style.right = '0px';
    }
    if (sideMenuIcon != null) {
      sideMenuIcon.src = '/assets/asideMenu/right.svg';
    }
    console.log('true');
  } else {
    sideFlag = false;
    if (sideMenu != null) {
      sideMenu.style.right = '-150px';
    }
    if (sideMenuIcon != null) {
      sideMenuIcon.src = '/assets/asideMenu/left.svg';
    }
  }
}

// card slider
const myCategory = document.getElementsByClassName('my-category');
const showMore = document.getElementsByClassName('show-more');

function showMoreDiv(i: number) {
  const divTag = showMore[i] as HTMLDivElement;
  divTag.style.display = 'show';
}
