
// Global Scope

var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";
  
  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
    let respuesta1 = prompt("Estando dentro del bloque, es posible quea acceder a todas las variables? Digite si/no");

    if (respuesta1.toLowerCase() == "si") {
      alert(`Correcto desde adentro del bloque puedo acceder a las siguientes variables:  ${blockVariable}, ${functionVariable}, ${globalVariable}`)
    } else if (respuesta1.toLowerCase() === "no") {
      alert(`Debes de repasar el concepto de Scope`)
    }
    else { alert(`Digita por favor un si o no`) }
  }


  console.log("Dentro de la función:", functionVariable);
  let respuesta2 = prompt("Estando desde la funcion, es posible acceder a las variables de un bloque de la función? Digite si/no");

    if (respuesta2.toLowerCase() == "si") {
      alert(`No, recuerda que la variable al estar definida desde el bloque si no se retorna no se podrá acceder a ella`)
    } else if (respuesta2.toLowerCase() === "no") {
      
      alert(`Correcto desde la funcion sólo accederé a las siguientes variables:  ${functionVariable}, ${globalVariable} a menos de que sean retornadas desde el bloque`)
    }
    else { alert(`Digita por favor un si o no`) }

}

console.log("Fuera de la función:", globalVariable);

let respuesta2 = prompt("Estando fuera de la funcion, es posible quea acceder a las variables dentro de la función? Digite si/no");

    if (respuesta2.toLowerCase() == "si") {
      alert(`No, recuerda que las variables al estar definidas dentro de una función si no se retornan no se podrá acceder a ellas`)
    } else if (respuesta2.toLowerCase() === "no") {
      
      alert(`Correcto desde fuera de la funcion sólo accederé a las varaibales globales a menos de que sean retornadas desde el bloque`)
    }
    else { alert(`Digita por favor un si o no`) }

testScope();

