const colors = [
    { name: "Vermelho", value: "red" },
    { name: "Azul", value: "blue" },
    { name: "Verde", value: "green" },
    { name: "Amarelo", value: "yellow" },
    { name: "Roxo", value: "purple" }
];

const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor.value;
    button.textContent = `Você é ${randomColor.name}!`;
});

const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("quizResult");

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;

    const favColor = quizForm.querySelector("input[name='favColor']:checked");
    if (!favColor) {
        resultDiv.textContent = "Por favor, responda a pergunta 1.";
        return;
    }
    score += parseInt(favColor.value);

    const emotions = quizForm.querySelectorAll("input[name='emotion']:checked");
    if (emotions.length === 0) {
        resultDiv.textContent = "Por favor, responda a pergunta 2.";
        return;
    }

    emotions.forEach(e => score += parseInt(e.value));

    if (score >= 3) {
        resultDiv.textContent = "Excelente! Você combina muito com as cores!";
        resultDiv.style.color = "green";
    } else if (score >= 1) {
        resultDiv.textContent = "Bom! Você gosta de cores equilibradas.";
        resultDiv.style.color = "blue";
    } else {
        resultDiv.textContent = "Hmmm... acho que você e as cores não são tão próximos assim!";
        resultDiv.style.color = "red";
    }
});
