class Carousel {
  private carouselContainer: Element;
  private carouselArray: HTMLElement[];
  private dragStartX: number = 0;
  private dragEndX: number = 0;

  constructor(container: Element, items: HTMLElement[]) {
    this.carouselContainer = container;
    this.carouselArray = [...items];
  }

  //to update slide position and classList --> on bullets click or auto
  private updateGallery(bulletControl?: boolean, clickedIndex?: number) {
    this.removeSlideClass();
    if (bulletControl) {
      if (clickedIndex === undefined) return;

      if (this.carouselArray.length === 1) {
        return;
      }
      if (this.carouselArray.length === 2) {
        this.carouselArray.forEach((el) => {
          if (+el.dataset.index! === clickedIndex + 1) {
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
        const arrayLength: number = this.carouselArray.length;

        //Determine the index of the second next element
        let secondNextIndex: number = clickedIndex + 2;
        if (secondNextIndex >= arrayLength) {
          secondNextIndex -= arrayLength;
        }

        // Determine the indices of the previous and next this.carouselArray
        const nextIndex: number = clickedIndex === arrayLength - 1 ? 0 : clickedIndex + 1;
        const previousIndex: number = clickedIndex === 0 ? arrayLength - 1 : clickedIndex - 1;
        const secondPreviousIndex = previousIndex === 0 ? arrayLength - 1 : previousIndex - 1;

        // Add classes to the this.carouselArray elements at the appropriate indices
        this.carouselArray[secondNextIndex].classList.add('gallery-item-5');
        this.carouselArray[nextIndex].classList.add('gallery-item-4');
        this.carouselArray[clickedIndex].classList.add('gallery-item-3');
        this.carouselArray[previousIndex].classList.add('gallery-item-2');
        this.carouselArray[secondPreviousIndex].classList.add('gallery-item-1');
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
    }
  }

  //to render bullets according to slide count
  private renderBullets(): void {
    const bulletContainer = document.getElementById('bullet-container');
    this.carouselArray.forEach((_, i) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');
      bullet.setAttribute('data-index', (i + 1).toString());
      bulletContainer?.appendChild(bullet);
    });
  }

  //this method add click event on bullets for carousel control
  private setBulletControls(): void {
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        //update active class
        bullets.forEach((bullet) => bullet.classList.remove('bullet-active'));
        target.classList.add('bullet-active');

        const correspondingSlide = this.carouselArray.find((el) => el.dataset.index === target.dataset.index);

        const correspondingSlideIndex = correspondingSlide?.dataset.index;
        console.log(correspondingSlideIndex);

        if (!correspondingSlideIndex) return;

        this.updateGallery(true, +correspondingSlideIndex - 1);
      });
    });
  }
  //update bullet on slide change
  private updateBullet(): void {
    const bullets = document.querySelectorAll('.bullet') as unknown as HTMLElement[];
    const frontSlide = this.carouselArray.find((el) => el.classList.contains('gallery-item-3'));
    const frontSlideDataIndex = frontSlide!.dataset.index;

    bullets.forEach((bullet) => {
      bullet.classList.remove('bullet-active');
      if (bullet.dataset.index === frontSlideDataIndex) {
        bullet.classList.add('bullet-active');
      }
    });
  }

  //change slide on fixed interval
  public automate(): void {
    let slideInterval: number;
    const initiateAutoSlide = () => {
      slideInterval = setInterval(() => {
        this.shiftClassesByOne('next');
        this.updateBullet();
      }, 5000);
    };

    initiateAutoSlide();

    this.carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    this.carouselContainer.addEventListener('mouseleave', () => initiateAutoSlide());
  }

  //remove all gallery-item-# class for future style update
  private removeSlideClass(): void {
    this.carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });
  }

  private setSkeletonLoader() {
    const galleryImage: NodeListOf<HTMLImageElement> = document.querySelectorAll('.carousel-image');

    function onImageLoaded(img: HTMLImageElement, skeleton: HTMLElement) {
      // Remove the skeleton and display the loaded image
      img.style.display = 'block';
      skeleton.remove();
    }

    galleryImage.forEach((img) => {
      // Create a new <div> element to act as the skeleton
      const skeleton: HTMLDivElement = document.createElement('div');
      skeleton.classList.add('skeleton');

      // Insert the skeleton before the <img> tag
      img.insertAdjacentElement('beforebegin', skeleton);

      // Hide the image until it's loaded
      img.style.display = 'none';

      // Load the image in the background
      const imageLoader: HTMLImageElement = new Image();
      imageLoader.src = img.src;
      imageLoader.onload = () => onImageLoaded(img, skeleton);
    });
  }

  //show carousel and hide skeleton
  private showCarousel() {
    const carouselSkeleton = document.getElementById('carousel-loader');
    const carousel = document.getElementById('carousel');

    if (!carouselSkeleton || !carousel) return;

    carouselSkeleton.style.display = 'none';
    carousel.style.display = 'block';
  }

  private handleDragStart(e: Event): void {
    e.preventDefault();
    if (e instanceof MouseEvent) {
      this.dragStartX = e.clientX;
    } else if (e instanceof TouchEvent) {
      this.dragStartX = e.touches[0].clientX;
    }
  }

  private handleDragMove(e: Event): void {
    e.preventDefault();
    if (e instanceof MouseEvent) {
      this.dragEndX = e.clientX;
    } else if (e instanceof TouchEvent) {
      this.dragEndX = e.touches[0].clientX;
    }
  }

  private handleDragEnd(): void {
    const threshold = 50;
    const deltaX = this.dragEndX - this.dragStartX;

    if (deltaX > threshold) {
      // Dragged to the right (previous slide)
      this.shiftClassesByOne('prev');
    } else if (deltaX < -threshold) {
      // Dragged to the left (next slide)
      this.shiftClassesByOne('next');
    }

    this.updateBullet();
  }

  private shiftClassesByOne(dir: 'next' | 'prev') {
    const elements: HTMLElement[] = this.carouselArray;
    const numElements: number = elements.length;
    function shitClass(index: number) {
      const currentElement: HTMLElement = elements[index];
      const nextElement: HTMLElement = elements[(index + 1) % numElements];
      const nextElementClassListValue = nextElement.classList.value;
      const currentElementClassListValue = currentElement.classList.value;
      nextElement.classList.value = currentElementClassListValue;
      currentElement.classList.value = nextElementClassListValue;
    }

    if (dir === 'next') {
      for (let i = numElements - 1; i > 0; i--) {
        shitClass(i);
      }
    }
    if (dir === 'prev') {
      for (let i = 0; i < numElements - 1; i++) {
        shitClass(i);
      }
    }
  }

  private addDragListeners(): void {
    //drag or touch will not work on bullet container
    document.getElementById('bullet-container')?.addEventListener('mouseup', (e) => e.stopPropagation());
    document.getElementById('bullet-container')?.addEventListener('touchend', (e) => e.stopPropagation());

    this.carouselContainer.addEventListener('mousedown', (e) => this.handleDragStart(e));
    this.carouselContainer.addEventListener('touchstart', (e) => this.handleDragStart(e));

    this.carouselContainer.addEventListener('mousemove', (e) => this.handleDragMove(e));
    this.carouselContainer.addEventListener('touchmove', (e) => this.handleDragMove(e));

    this.carouselContainer.addEventListener('mouseup', () => this.handleDragEnd());
    this.carouselContainer.addEventListener('touchend', () => this.handleDragEnd());
  }

  public init(): void {
    this.updateGallery();
    this.renderBullets();
    this.setBulletControls();
    this.setSkeletonLoader();
    this.updateBullet();
    this.addDragListeners();
    this.automate();
    this.showCarousel();
  }
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');
const carousel = new Carousel(galleryContainer!, galleryItems as unknown as HTMLElement[]);
carousel.init();
