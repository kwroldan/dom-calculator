const calculatorScreen = document.querySelector("#screen");
const allButtons = document.querySelectorAll("span");

function operatorChange(equation){
    let newEquation = equation
    if (equation.includes("÷")) {
        newEquation = equation.replace("÷", "/")
    }
    else if(equation.includes("x")) {
        newEquation = equation.replace("x", "*")
    }
    return newEquation
}

allButtons.forEach(button => button.addEventListener("click", function() {
    if (button.innerText !== "=") {
        calculatorScreen.innerText += button.innerText
    };
    if (button.innerText === "=") {
        calculatorScreen.innerText = eval(operatorChange(calculatorScreen.innerText))
    }
    if (button.innerText === "C") {
        calculatorScreen.innerText = ""
    };
}));