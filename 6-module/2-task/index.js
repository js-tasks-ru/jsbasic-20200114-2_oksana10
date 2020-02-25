'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;

    let main = document.createElement('div');
    main.id = 'mainCarousel';
    main.classList.add("main-carousel");
    main.classList.add("carousel");
    main.classList.add("slide");

    let ol = document.createElement('ol');
    ol.classList.add('carousel-indicators');
    main.appendChild(ol);

    for (let i = 0; i < 3; i++) {
      let li = document.createElement('li');
      li.setAttribute('data-target', '#mainCarousel');
      li.setAttribute('data-slide-to', i);
      li.classList.add('carousel-indicator');
      ol.appendChild(li);
    }

    this.inner = document.createElement('div');
    main.appendChild(this.inner);
    this.inner.classList.add('carousel-inner');

    this.setPrev = () => {
      let slide = this.currentSlide;
      let prev = (parseInt(slide) - 1);
      this.setSlide(prev > 0 ? prev : 2);
    };

    let prevBtn = document.createElement('button');
    main.appendChild(prevBtn);
    prevBtn.classList.add("carousel-control-prev");
    prevBtn.setAttribute('href', "#mainCarousel");
    prevBtn.setAttribute('data-slide', "prev");
    prevBtn.onclick = this.setPrev;

    let prevIcon = document.createElement('span');
    prevBtn.appendChild(prevIcon);
    prevIcon.classList.add("carousel-control-prev-icon");
    prevIcon.setAttribute("aria-hidden", "true");

    let prevText = document.createElement('span');
    prevBtn.appendChild(prevText);
    prevText.classList.add('sr-only');
    prevText.innerText = 'Previous';


    this.setNext = () => {
      let slide = this.currentSlide;
      this.setSlide((parseInt(slide) + 1) % 3);
    };

    let nextBtn = document.createElement('button');
    main.appendChild(nextBtn);
    nextBtn.classList.add("carousel-control-next");
    nextBtn.setAttribute('href', "#mainCarousel");
    nextBtn.setAttribute('data-slide', "next");
    nextBtn.onclick = this.setNext;

    let nextIcon = document.createElement('span');
    nextBtn.appendChild(nextIcon);
    nextIcon.classList.add("carousel-control-next-icon");
    nextIcon.setAttribute("aria-hidden", "true");

    let nextText = document.createElement('span');
    nextBtn.appendChild(nextText);
    nextText.classList.add('sr-only');
    nextText.innerText = 'Next';

    this.el.appendChild(main);

    this.setSlide = number => {
      number = parseInt(number);

      let el = this.inner.getElementsByTagName('div')[0];
      if (el) { this.inner.removeChild(el); }

      let item = document.createElement('div');
      item.classList.add('carousel-item');
      item.classList.add('active');
      item.setAttribute("data-slide", number);
      this.inner.appendChild(item);

      let logo = document.createElement('img');
      item.appendChild(logo);
      logo.src = this.slides[number].img;
      logo.alt = 'Activelide';

      let container = document.createElement('div');
      container.classList.add('container');
      item.appendChild(container);

      let caption = document.createElement('div');
      caption.classList.add('carousel-caption');
      container.appendChild(caption);

      let h3 = document.createElement('h3');
      h3.classList.add('h1');
      h3.innerText = this.slides[number].title;
      caption.appendChild(h3);

      let nextActiveIndicator = this.el.querySelector(`*[data-slide-to="${this.currentSlide}"]`);
      if (nextActiveIndicator) {nextActiveIndicator.classList.remove("active");}

      this.currentSlide = number;
      nextActiveIndicator = this.el.querySelector(`*[data-slide-to="${this.currentSlide}"]`);
      nextActiveIndicator.classList.add("active");
    };

    document.addEventListener('click', event => {
      let slide = event.target.dataset.slideTo;
      if (slide) {
        this.setSlide(slide);
      }
    });

    this.setSlide(0);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
