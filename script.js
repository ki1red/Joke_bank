let sliderImages = document.querySelectorAll(".slider img");
let currentImage = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.opacity = 0;
  }
}

function startSlide() {
  reset();
  sliderImages[currentImage].style.opacity = 1;
  currentImage++;
  if (currentImage == sliderImages.length) {
    currentImage = 0;
  }
  setTimeout(startSlide, 2000);
}

window.onload = startSlide;
