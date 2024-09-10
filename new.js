const slides = document.querySelectorAll(".slide");
var counter = 0;
var intervalId = null; // added to store the interval ID
var isPaused = false; // added to track the pause state

console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter = (counter - 1) % slides.length;
  slideImage();
};

const goNext = () => {
  counter = (counter + 1) % slides.length;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Add event listener to each slide element
document.getElementById("slider").style.opacity = "0.9";
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    if (isPaused) {
      resumeSlider();
      document.getElementById("slider").style.opacity = "0.9";
    } else {
      pauseSlider();
      document.getElementById("slider").style.opacity = "1";
    }
  });
});

const pauseSlider = () => {
  clearInterval(intervalId);
  isPaused = true;

};

const resumeSlider = () => {
  intervalId = setInterval(goNext, 2000);
  isPaused = false;
};

// Initialize the slideshow
intervalId = setInterval(goNext, 2000);