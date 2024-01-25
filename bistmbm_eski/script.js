let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
};

const updateSlider = () => {
  const newTransformValue = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
};

document.getElementById('left-arrow').addEventListener('click', prevSlide);
document.getElementById('right-arrow').addEventListener('click', nextSlide);


let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Yukarı kaydırılıyorsa
    navbar.style.top = '0';
  } else {
    // Aşağı kaydırılıyorsa
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
};
