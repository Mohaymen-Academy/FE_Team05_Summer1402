class Carousel {
  private carouselContainer: Element;
  private carouselControls: string[];
  private carouselArray: Element[];

  constructor(container: Element, items: Element[], controls: string[]) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });
    if (this.carouselArray.length === 1) {
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 3}`);
      });
    }
    if (this.carouselArray.length === 2) {
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 3}`);
      });
    }
    if (this.carouselArray.length === 3) {
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 2}`);
      });
    }
    if (this.carouselArray.length === 4) {
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 1}`);
      });
    }
    if (this.carouselArray.length >= 5) {
      this.carouselArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`gallery-item-${i + 1}`);
      });
    }
  }
  private setCurrentState(direction: Element): void {
    if (direction.classList.contains('gallery-controls-prev')) {
      this.carouselArray.unshift(this.carouselArray.pop()!);
    } else if (direction.classList.contains('gallery-controls-next')) {
      this.carouselArray.push(this.carouselArray.shift()!);
    }

    this.updateGallery();
  }

  private setControls(): void {
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    if (!galleryControlsContainer) return;

    this.carouselControls.forEach((ctrl) => {
      const button = document.createElement('button');
      button.className = `gallery-controls-${ctrl} btn`;
      button.innerHTML = ctrl;
      galleryControlsContainer.appendChild(button);
    });
  }

  private useControls(): void {
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    if (!galleryControlsContainer) return;

    const triggers = galleryControlsContainer.querySelectorAll('button');

    triggers.forEach((ctrl) => {
      ctrl.addEventListener('click', (e) => {
        e.preventDefault();
        this.setCurrentState(ctrl);
      });
    });
  }

  // private setDrag(): void {
  //   this.carouselArray.forEach((el) => {
  //     el.addEventListener('dragstart', (e) => {
  //       // e.preventDefault();
  //       // console.log(e);
  //       let startOffset: number = e.clientX;
  //       let endOffset: number;

  //       el.addEventListener('dragend', (e) => {
  //         if (e.clientX < startOffset) {
  //           this.carouselArray.unshift(this.carouselArray.pop());
  //           this.updateGallery();
  //         }
  //       });
  //     });
  //   });
  // }

  public automate(): void {
    setInterval(() => {
      this.carouselArray.unshift(this.carouselArray.pop()!);
      this.updateGallery();
    }, 5000);
  }

  public init(): void {
    this.updateGallery();
    this.setControls();
    this.useControls();
    // this.setDrag();
    this.automate();
  }
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryControls = ['prev', 'next'];
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

const carousel = new Carousel(galleryContainer!, galleryItems, galleryControls);
carousel.init();
