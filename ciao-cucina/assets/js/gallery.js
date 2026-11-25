/* GALERIA: abre a foto ampliada num <dialog> e navega com botões ou setas do teclado. */
const box = document.getElementById("lightbox");
const items = [...document.querySelectorAll(".g-item")];
const bigImg = box.querySelector("img"), cap = box.querySelector("figcaption");
let atual = 0;
function mostrar(i){
  atual = (i + items.length) % items.length;
  const thumb = items[atual].querySelector("img");
  bigImg.src = thumb.currentSrc || thumb.src;
  bigImg.alt = thumb.alt;
  cap.textContent = items[atual].dataset.caption;
}
items.forEach((b, i) => b.addEventListener("click", () => { mostrar(i); box.showModal(); }));
box.querySelector(".lb-close").addEventListener("click", () => box.close());
box.querySelector(".lb-prev").addEventListener("click", () => mostrar(atual - 1));
box.querySelector(".lb-next").addEventListener("click", () => mostrar(atual + 1));
box.addEventListener("click", e => { if (e.target === box) box.close(); });
box.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") mostrar(atual - 1);
  if (e.key === "ArrowRight") mostrar(atual + 1);
});
