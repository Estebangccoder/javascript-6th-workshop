// vars call
console.log("Valor de a:", a);
let question = prompt("Ingresa el valor de a:")

if (question.toLowerCase() === "undefined") {
    console.log("Correcto, si la variable no está definida antes de ser llamada  y es var se retornará el valor de undefined");
} else {
    console.log("Incorrecto, recuerda que si la variable no está definida antes de ser llamada  y es var se retornará el valor de undefined");
}

console.log("Valor de b:", b);
let question1 = prompt("Digita el valor de b: undefined / broke the code / 0");

if (question1.toLowerCase() === "broke the code") {
    console.log("Correcto, si la variable no está definida antes de ser llamada  y es var se retornará el valor de undefined");
} else {
    console.log("Incorrecto, recuerda que si la variable no está definida antes de ser llamada  y es var se retornará el valor de undefined");
}

console.log("Valor de c:", c);

let question2 = prompt("Ingresa el valor de c:")
if (question2.toLowerCase() === "error") {
    console.log("Correcto, si la constante no está definida antes de ser llamada  y se retornará el valor de error");
} else {
    console.log("Incorrecto, recuerda que si la constante no está definida antes de ser llamada  y se retornará el valor de error");
}

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());


let question3 = prompt("Si llamo la función ante de ser declarada, ésta se ejecutará?: si/no")
if (question3.toLowerCase() === "si") {
    console.log("Correcto, si la función no está definida antes de ser llamada está igual se ejecutará");
} else {
    console.log("Incorrecto, recuerda que si la función no está definida antes de ser llamada está igual se ejecutará");
}


console.log("Resultado de funcionExpresada:", funcionExpresada());

let question4 = prompt("Si llamo la función ante de ser declarada, ésta se ejecutará? si está declarada dentro de una constante: si/no")
if (question4.toLowerCase() === "no") {
    console.log("Correcto, si la función no está definida antes de ser llamada y está declarada dentro de una constante está no se ejecutará y dirá error");
} else {
    console.log("Incorrecto, recuerda que si la función no está definida antes de ser llamada y está declarada dentro de una constante está no se ejecutará y dirá error");
}


// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};