const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const button = document.querySelector(".form__button");

const SERVER_URL = "https://run.mocky.io/v3/b9efe923-cf39-4362-be17-5ad54502fd46";

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

input.addEventListener("focus", () => {
    form.classList.remove("error");
});

button.addEventListener("click", (event) => {
    event.preventDefault();

    if (!input.value) {
        form.classList.add("error");
    } else {
        sendValue(input.value);
    }
});
