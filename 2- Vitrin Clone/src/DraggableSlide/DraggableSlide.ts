// map card container
let myCardContainer = document.getElementById('conatainer1');
window.onload = () => {
  let element: string = `<div class="w-full h-full flex flex-col rounded-lg shadow">
  <div class="flex justify-center items-center py-2 px-1">
    <a href="#">
      <img class="rounded-xl w-24 h-24" src="public/assets/card/img1.jpeg" alt="مجالس اهل بیت" />
    </a>
  </div>
  <div class="text-sm flex w-32 justify-center items-center pb-2 px-3">
    <a href="#">
      <p>مجالس اهل بیت</p>
    </a>
  </div>
</div>`;
  for (let i = 0; i < 10; i++) {
    if (myCardContainer != null) {
      myCardContainer.innerHTML += element;
    }
  }
};

// draggable container
const sliders = document.querySelectorAll('.draggable-slide') as NodeListOf<HTMLDivElement>;
sliders.forEach((slider) => {
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const mouseDownHandler: EventListenerOrEventListenerObject = (e: any) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const mouseLeaveHandler: EventListenerOrEventListenerObject = () => {
    isDown = false;
    slider.classList.remove('active');
    const anchors = document.querySelectorAll('a');
    anchors.forEach((a) => {
      a.classList.remove('pointer-events-none');
    });
  };

  const mouseUpHandler: EventListenerOrEventListenerObject = () => {
    isDown = false;
    slider.classList.remove('active');
    const anchors = document.querySelectorAll('a');
    anchors.forEach((a) => {
      a.classList.remove('pointer-events-none');
    });
  };

  const mouseMoveHandler: EventListenerOrEventListenerObject = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const anchors = document.querySelectorAll('a');
    anchors.forEach((a) => {
      a.classList.add('pointer-events-none');
    });
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  };

  slider.addEventListener('mousedown', mouseDownHandler);
  slider.addEventListener('mouseleave', mouseLeaveHandler);
  slider.addEventListener('mouseup', mouseUpHandler);
  slider.addEventListener('mousemove', mouseMoveHandler);
});
