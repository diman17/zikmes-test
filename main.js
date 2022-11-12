const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const button = document.querySelector(".form__button");

const SERVER_URL = "https://run.mocky.io/v3/b9efe923-cf39-4362-be17-5ad54502fd46";

const validateForm = (value, formElement, cb) => {
    if (!value) {
        formElement.classList.add("error");
    } else {
        cb(value);
    }
};

const sendValue = async (value) => {
    const response = await fetch(SERVER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            value,
        }),
    });

    if (response.ok) alert("Запрос успешно отправлен");
    else alert("Что-то пошло не так");
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm(input.value, form, sendValue);
});

input.addEventListener("input", () => {
    form.classList.remove("error");
});
