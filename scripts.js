let numberOneElt = document.getElementById("numberOne")
let choiseElementElt = document.getElementById("choiseElement")
let numberTwoElt = document.getElementById("numberTwo")
let resultElt = document.getElementById("result")
let focus = numberOneElt
let point = false

function displayNumber(number) {
    focus.value += number
    console.log(number);
}

function displayOperator(operator) {
    choiseElementElt.value = operator
    console.log(operator);
    if (numberOneElt.value.length >= 1) {
        focus = document.getElementById("numberTwo")
    }
    point = false
}

function reset() {
    numberOneElt.value = ""
    choiseElementElt.value = ""
    numberTwoElt.value = ""
    resultElt.value = ""
    focus = document.getElementById("numberOne")
}

function displayPoint() {
    // Si point est différent de faux on ajoute un point
    if (!point) {
        numberOneElt.value += "."
    }
    // On passe point en vrai pour le désactiver
    point = true
}

function displayResult() {

    if (numberOneElt.value != "" && choiseElementElt.value != "" && numberTwoElt.value != "") {

        switch (choiseElementElt.value) {
            case '/':
                resultElt.value = Number(numberOneElt.value) / Number(numberTwoElt.value)
                break
            case '+':
                resultElt.value = Number(numberOneElt.value) + Number(numberTwoElt.value)
                break
            case '-':
                resultElt.value = Number(numberOneElt.value) - Number(numberTwoElt.value)
                break
            case '*':
                resultElt.value = Number(numberOneElt.value) * Number(numberTwoElt.value)
                break
        }
    }
}