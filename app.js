const calculatorScreen = document.querySelector("#screen");
const allButtons = document.querySelectorAll("span");

// Operator Variables
const divisionOperator = document.querySelector(".operator:nth-child(2)");
divisionOperator.innerText = "/"
const multiplicationOperator = document.querySelector(".operator:nth-child(3)");
multiplicationOperator.innerText = "*"

allButtons.forEach(button => button.addEventListener("click", function() {
    if (button.innerText !== "=") {
        calculatorScreen.innerText += button.innerText
    };
    if (button.innerText === "=") {
        calculatorScreen.innerText = eval(calculatorScreen.innerText)
    }
    if (button.innerText === "C") {
        calculatorScreen.innerText = ""
    };
}));
