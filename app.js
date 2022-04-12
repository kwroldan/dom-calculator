const calculatorScreen = document.querySelector("#screen")

// Number Variables
const numberOne = document.querySelector(".buttons > span:nth-child(12)");
const numberTwo = document.querySelector(".buttons > span:nth-child(13)");
const numberThree = document.querySelector(".buttons > span:nth-child(14)");
const numberFour = document.querySelector(".buttons > span:nth-child(8)");
const numberFive = document.querySelector(".buttons > span:nth-child(9)");
const numberSix = document.querySelector(".buttons > span:nth-child(10)");
const numberSeven = document.querySelector(".buttons > span:nth-child(4)");
const numberEight = document.querySelector(".buttons > span:nth-child(5)");
const numberNine = document.querySelector(".buttons > span:nth-child(6)");
const numberZero = document.querySelector("#zero");
const numbersArray = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberZero]

// Operator Variables
const clearAll = document.querySelector("#clear");
const divisionOperator = document.querySelector(".operator:nth-child(2)");
const multiplicationOperator = document.querySelector(".operator:nth-child(3)");
const subtractionOperator = document.querySelector(".operator:nth-child(7)");
const additionOperator = document.querySelector(".operator:nth-child(11)");
const equalsOperator = document.querySelector(".operator:nth-child(15)");
const operatorArray = [clearAll, divisionOperator, multiplicationOperator, subtractionOperator, additionOperator, equalsOperator]

multiplicationOperator.innerText = "*"
divisionOperator.innerText = "/"

const buttonsArray = numbersArray.concat(operatorArray);

buttonsArray.map(button => button.addEventListener("click", function() {
    if (button.innerText !== "=") {
        calculatorScreen.innerText += button.innerText
    };
    if (button.innerText === "=") {
        calculatorScreen.innerText = eval 
        (calculatorScreen.innerText)
    }
    if (button.innerText === "C") {
        calculatorScreen.innerText = ""
    };
}));
