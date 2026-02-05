// js/gallery.js
document.addEventListener("DOMContentLoaded", () => {

  // Soporta múltiples galerías sin que se crucen
  document.querySelectorAll(".gallery-wrapper").forEach(gallery => {

    const mainImg = gallery.querySelector(".main-product-image");
    const thumbs = gallery.querySelectorAll(".thumbs img");
    const btnLeft = gallery.querySelector(".arrow.left");
    const btnRight = gallery.querySelector(".arrow.right");

    if (!mainImg || !thumbs.length) return;

    let currentIndex = 0;
    const images = Array.from(thumbs).map(img => img.src);

    function updateImage(index) {
      currentIndex = index;
      mainImg.src = images[currentIndex];

      thumbs.forEach((img, i) => {
        img.classList.toggle("active", i === currentIndex);
      });
    }

    // Click en thumbnails
    thumbs.forEach((img, index) => {
      img.addEventListener("click", () => updateImage(index));
    });

    // Flecha izquierda
    if (btnLeft) {
      btnLeft.addEventListener("click", () => {
        const next = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        updateImage(next);
      });
    }

    // Flecha derecha
    if (btnRight) {
      btnRight.addEventListener("click", () => {
        const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        updateImage(next);
      });
    }

  });

});
