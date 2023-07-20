class Carousel {
  private carouselContainer: Element;
  private carouselArray: HTMLElement[];

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

  public init(): void {
    this.updateGallery();
    this.renderBullets();
    this.setBulletControls();
    this.setSkeletonLoader();
    this.updateBullet();
    this.automate();
    this.showCarousel();
  }
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');
const carousel = new Carousel(galleryContainer!, galleryItems as unknown as HTMLElement[]);
carousel.init();
