function initCarousel() {
  const carouselArrowButtonRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowButtonLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlides = document.querySelectorAll('.carousel__slide');
  const carouselSlideFirst = 0;
  const carouselSlideLast = carouselSlides.length - 1;
  let carouselSlideCurrent = carouselSlideFirst;
  let carouselInnerTranslate = 0;

  carouselArrowButtonLeft.style.display = 'none';

  carouselInner.style.transform = `translateX(${carouselInnerTranslate}px)`;

  carouselArrowButtonRight.addEventListener('click', () => {
    carouselInnerTranslate -= carouselInner.offsetWidth;
    carouselInner.style.transform = `translateX(${carouselInnerTranslate}px)`;
    carouselSlideCurrent++;
    
    if (carouselSlideCurrent === carouselSlideLast) {
      carouselArrowButtonRight.style.display = 'none';
    } else {
      carouselArrowButtonLeft.style.display = '';
    }
  });

  carouselArrowButtonLeft.addEventListener('click', () => {
    carouselInnerTranslate += carouselInner.offsetWidth;
    carouselInner.style.transform = `translateX(${carouselInnerTranslate}px)`;
    carouselSlideCurrent--;
    carouselArrowButtonRight.style.display = '';
    
    if (carouselSlideCurrent === carouselSlideFirst) {
      carouselArrowButtonLeft.style.display = 'none';
    } else {
      carouselArrowButtonLeft.style.display = '';
    }
  });

}
