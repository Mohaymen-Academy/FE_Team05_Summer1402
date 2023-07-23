const frameButton = document.getElementById('aside-frame-btn');
const asideFrame = document.getElementById('aside-frame');
const settingButton = document.getElementById('aside-setting-btn');
const asideSetting = document.getElementById('aside-setting');

let frameShow = false;
let settingShow = false;

frameButton.addEventListener('click', () => {
  if (frameShow) {
    asideFrame.style.right = '-175px';
  }
  if (!frameShow) {
    asideFrame.style.right = '0';
  }
  frameShow = !frameShow;
});

settingButton.addEventListener('click', () => {
  if (settingShow) {
    asideSetting.style.left = '-375px';
  }
  if (!settingShow) {
    asideSetting.style.left = '0';
  }
  settingShow = !settingShow;
});
