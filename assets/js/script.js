const modal = document.querySelector(".modal");
const singup = document.querySelector("#btn-modal");
const singupClsoe = document.querySelector("#btn-close");

singupClsoe.addEventListener("click", () => {
    modal.classList.remove("modal-active");
  });
singup.addEventListener("click", () => {
  modal.classList.add("modal-active");
});


document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('#btn-open');
    if (button) {
        button.addEventListener('click', function() {
            console.log('Button clicked!');
        });
    }
});

