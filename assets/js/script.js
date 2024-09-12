const modal = document.querySelector(".modal");
const singup = document.querySelector("#btn-modal");
const singupClsoe = document.querySelector("#btn-close");
const joinSingup = document.querySelector("#joinSingup");
const joinSingupMobile = document.querySelector("#joinSingupMobile");

singupClsoe.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});
singup.addEventListener("click", () => {
  modal.classList.add("modal-active");
});
joinSingup.addEventListener("click", () => {
  modal.classList.add("modal-active");
});
joinSingupMobile.addEventListener("click", () => {
  modal.classList.add("modal-active");
});
