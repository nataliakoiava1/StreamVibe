
///navbar
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
      placeholder.innerHTML = data;
      initNavbar?.();
    }
  });




// Carousel Functionality
const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (gallery && prevBtn && nextBtn) {
  let index = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function updateCarousel() {
    const cell = document.querySelector(".gallery-cell");
    if (!cell) return;

    const cellWidth = cell.offsetWidth + 20;
    gallery.style.transform = `translateX(-${index * cellWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    const visible = getVisibleCount();
    const maxIndex = gallery.children.length - visible;
    index = Math.min(index + visible, maxIndex);
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    const visible = getVisibleCount();
    index = Math.max(index - visible, 0);
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
}




///questions
const items = document.querySelectorAll(".faq-item");

if (items.length) {
  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    if (!question || !icon) return;

    question.addEventListener("click", () => {
      items.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".icon").textContent = "+";
        }
      });

      item.classList.toggle("active");
      icon.textContent = item.classList.contains("active") ? "−" : "+";
    });
  });
}





