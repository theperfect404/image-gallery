const gallery = document.querySelector("#gallery");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

let currentImage;
gallery.addEventListener("click", () => {
  const target = event.target;
  if (target.tagName === "IMG") {
    currentImage = target;
    modalImage.src = target.src;
    overlay.style.display = "block";
    modal.style.display = "block";
  }
});

modalImage.addEventListener("load", () => {
  if (currentImage.previousElementSibling === null) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (currentImage.nextElementSibling === null) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
});

prevButton.addEventListener("click", () => {
  modalImage.src = currentImage.previousElementSibling.src;
  currentImage = currentImage.previousElementSibling;
});

nextButton.addEventListener("click", () => {
  modalImage.src = currentImage.nextElementSibling.src;
  currentImage = currentImage.nextElementSibling;
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  modal.style.display = "none";
});

closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
  modal.style.display = "none";
});
