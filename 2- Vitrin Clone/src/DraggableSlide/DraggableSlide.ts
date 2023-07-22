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
  };

  const mouseUpHandler: EventListenerOrEventListenerObject = () => {
    isDown = false;
    slider.classList.remove('active');
  };

  const mouseMoveHandler: EventListenerOrEventListenerObject = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  };

  slider.addEventListener('mousedown', mouseDownHandler);
  slider.addEventListener('mouseleave', mouseLeaveHandler);
  slider.addEventListener('mouseup', mouseUpHandler);
  slider.addEventListener('mousemove', mouseMoveHandler);
});
