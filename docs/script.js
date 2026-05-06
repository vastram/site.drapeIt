function goBack() {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  window.location.href = "./index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const carousels = Array.from(document.querySelectorAll(".overview-carousel"));
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".overview-carousel-slide"));
    if (slides.length <= 1) return;

    let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    function renderSlides() {
      const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
      const nextIndex = (activeIndex + 1) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.remove("is-active", "is-prev", "is-next", "is-hidden");

        if (index === activeIndex) {
          slide.classList.add("is-active");
        } else if (index === prevIndex) {
          slide.classList.add("is-prev");
        } else if (index === nextIndex) {
          slide.classList.add("is-next");
        } else {
          slide.classList.add("is-hidden");
        }
      });
    }

    renderSlides();

    window.setInterval(() => {
      activeIndex = (activeIndex + 1) % slides.length;
      renderSlides();
    }, 5000);
  });
});
