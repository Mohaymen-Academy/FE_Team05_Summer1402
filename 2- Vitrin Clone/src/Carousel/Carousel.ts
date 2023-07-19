class Carousel {
  private carouselContainer: Element;
  private carouselControls: string[];
  private carouselArray: HTMLElement[];

  constructor(container: Element, items: Element[], controls: string[]) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  private updateGallery(bulletControl?: boolean, clickedIndex?: number) {
    this.carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });
    if (bulletControl) {
      if (this.carouselArray.length === 1) {
        return;
      }
      if (this.carouselArray.length === 2) {
        this.carouselArray.forEach((el) => {
          if (+el.dataset.index === clickedIndex + 1) {
            el.classList.add('gallery-item-3');
          } else {
            el.classList.add('gallery-item-4');
          }
        });
      }
      if (this.carouselArray.length === 3) {
        //find clicked index slide
        const correspondingSlide: Element = this.carouselArray[clickedIndex];

        // Determine the indices of the previous and next elements
        const previousIndex: number = clickedIndex === 0 ? this.carouselArray.length - 1 : clickedIndex - 1;
        const nextIndex: number = clickedIndex === this.carouselArray.length - 1 ? 0 : clickedIndex + 1;

        //update classes of slides
        correspondingSlide.classList.add('gallery-item-3');
        this.carouselArray[previousIndex].classList.add('gallery-item-4');
        this.carouselArray[nextIndex].classList.add('gallery-item-2');
      }
      if (this.carouselArray.length === 4) {
        //find clicked index slide
        const correspondingSlide: Element = this.carouselArray[clickedIndex];

        // Determine the indices of the previous and next elements
        const previousIndex: number = clickedIndex === 0 ? this.carouselArray.length - 1 : clickedIndex - 1;
        const nextIndex: number = clickedIndex === this.carouselArray.length - 1 ? 0 : clickedIndex + 1;
        const secondPreviousIndex: number = previousIndex === 0 ? this.carouselArray.length - 1 : previousIndex - 1;

        //update classes of slides
        correspondingSlide.classList.add('gallery-item-3');
        this.carouselArray[previousIndex].classList.add('gallery-item-4');
        this.carouselArray[nextIndex].classList.add('gallery-item-2');
        this.carouselArray[secondPreviousIndex].classList.add('gallery-item-1');
      }
      if (this.carouselArray.length >= 5) {
        console.log('first');
        const arrayLength: number = this.carouselArray.length;

        // Step 3: Determine the index of the second next element
        let secondNextIndex: number = clickedIndex + 2;
        if (secondNextIndex >= arrayLength) {
          secondNextIndex -= arrayLength;
        }

        // Step 4: Determine the indices of the previous and next this.carouselArray
        const nextIndex: number = clickedIndex === arrayLength - 1 ? 0 : clickedIndex + 1;
        const previousIndex: number = clickedIndex === 0 ? arrayLength - 1 : clickedIndex - 1;
        const secondPreviousIndex = previousIndex === 0 ? arrayLength - 1 : previousIndex - 1;

        // Step 5: Add classes to the this.carouselArray elements at the appropriate indices
        this.carouselArray[secondNextIndex].classList.add('gallery-item-1');
        this.carouselArray[nextIndex].classList.add('gallery-item-2');
        this.carouselArray[clickedIndex].classList.add('gallery-item-3');
        this.carouselArray[previousIndex].classList.add('gallery-item-4');
        this.carouselArray[secondPreviousIndex].classList.add('gallery-item-5');
      }
    } else {
      if (this.carouselArray.length === 1 || this.carouselArray.length === 2) {
        this.carouselArray.slice(0, 5).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 3}`);
        });
      }
      if (this.carouselArray.length === 3) {
        this.carouselArray.slice(0, 5).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 2}`);
        });
      }
      if (this.carouselArray.length >= 4) {
        this.carouselArray.slice(0, 5).forEach((el, i) => {
          el.classList.add(`gallery-item-${i + 1}`);
        });
      }
      // if (this.carouselArray.length >= 5) {
      //   this.carouselArray.slice(0, 5).forEach((el, i) => {
      //     el.classList.add(`gallery-item-${i + 1}`);
      //   });
      // }
    }
  }
  // private setCurrentState(direction: Element): void {
  //   if (direction.classList.contains('gallery-controls-prev')) {
  //     this.carouselArray.unshift(this.carouselArray.pop()!);
  //   } else if (direction.classList.contains('gallery-controls-next')) {
  //     this.carouselArray.push(this.carouselArray.shift()!);
  //   }

  //   this.updateGallery();
  // }

  // private setControls(): void {
  //   const galleryControlsContainer = document.querySelector('.gallery-controls');
  //   if (!galleryControlsContainer) return;

  //   this.carouselControls.forEach((ctrl) => {
  //     const button = document.createElement('button');
  //     button.className = `gallery-controls-${ctrl} btn`;
  //     button.innerHTML = ctrl;
  //     galleryControlsContainer.appendChild(button);
  //   });
  // }

  // private useControls(): void {
  //   const galleryControlsContainer = document.querySelector('.gallery-controls');
  //   if (!galleryControlsContainer) return;

  //   const triggers = galleryControlsContainer.querySelectorAll('button');

  //   triggers.forEach((ctrl) => {
  //     ctrl.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       this.setCurrentState(ctrl);
  //       this.updateBullet();
  //     });
  //   });
  // }

  private renderBullets(): void {
    const bulletContainer = document.getElementById('bullet-container');
    this.carouselArray.forEach((_, i) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');
      bullet.setAttribute('data-index', (i + 1).toString());
      bulletContainer?.appendChild(bullet);
    });
  }

  private setBulletControls(): void {
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        //update active class
        bullets.forEach((bullet) => bullet.classList.remove('bullet-active'));
        target.classList.add('bullet-active');

        const correspondingSlide = this.carouselArray.find((el) => el.dataset.index === target.dataset.index);

        const correspondingSlideIndex = +this.carouselArray.find((el) => el.dataset.index === target.dataset.index)
          .dataset.index;

        this.updateGallery(true, correspondingSlideIndex - 1);
      });
    });
  }

  private updateBullet(): void {
    const bullets = document.querySelectorAll('.bullet');
    const frontSlide = this.carouselArray.find((el) => el.classList.contains('gallery-item-3'));
    const frontSlideDataIndex = frontSlide.dataset.index;

    bullets.forEach((bullet) => {
      bullet.classList.remove('bullet-active');
      if (bullet.dataset.index === frontSlideDataIndex) {
        bullet.classList.add('bullet-active');
      }
    });
  }

  private removeSlideClass(): void {
    this.carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });
  }

  public automate(): void {
    setInterval(() => {
      const elements: HTMLElement[] = this.carouselArray;
      const numElements: number = elements.length;

      for (let i = numElements - 1; i > 0; i--) {
        const currentElement: HTMLElement = elements[i];
        const nextElement: HTMLElement = elements[(i + 1) % numElements];
        const nextElementClassListValue = nextElement.classList.value;
        const currentElementClassListValue = currentElement.classList.value;
        nextElement.classList.value = currentElementClassListValue;
        currentElement.classList.value = nextElementClassListValue;
      }
      this.updateBullet();
    }, 5000);
  }

  public init(): void {
    this.updateGallery();
    this.renderBullets();
    this.setBulletControls();
    // this.automate();
  }
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryControls = ['prev', 'next'];
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

const carousel = new Carousel(galleryContainer!, galleryItems, galleryControls);
carousel.init();
