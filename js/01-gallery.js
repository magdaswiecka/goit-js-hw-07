import { galleryItems } from "./gallery-items.js";


const myGallery = document.querySelector(".gallery");

for(const galleryItem of galleryItems) {
  const myDiv = document.createElement("div");
  const myA = document.createElement("a")
  const myImg = document.createElement("img")

  myDiv.className = "gallery__item";
  myA.className = "gallery__link"
  myA.href = galleryItem.original
  myImg.className = "gallery__image"
  myImg.src = galleryItem.preview
  myImg.dataset.source = galleryItem.original
  myImg.alt = galleryItem.description

  myGallery.append(myDiv)
  myDiv.append(myA)
  myA.append(myImg)
}

myGallery.addEventListener("click", (event) => {
  event.preventDefault();
  
  const clickedImg = event.target;

  const instance = basicLightbox.create(`
    <img src="${clickedImg.dataset.source}">
  `);

  instance.show();
});