function slider() {
    const slides = document.querySelectorAll('.slider__item');
    const activeClass = 'slider__item--active';
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove(activeClass);
      currentSlide++;
      if (currentSlide === slides.length) {
        currentSlide = 0;
      }
      slides[currentSlide].classList.add(activeClass);
    }, 5000);
  }
  
  slider();  