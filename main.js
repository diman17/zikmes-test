const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const button = document.querySelector(".form__button");

input.addEventListener("focus", () => {
    form.classList.remove("error");
});

button.addEventListener("click", (event) => {
    event.preventDefault();

    if (!input.value) {
        form.classList.add("error");
    }
});
