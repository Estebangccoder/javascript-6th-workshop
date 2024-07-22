// console.log(`
//     console.log("Inicio del script");

// setTimeout(() => {
//   console.log("Primer setTimeout");
// }, 0);

// setTimeout(() => {
//   console.log("Segundo setTimeout");
// }, 0);

// Promise.resolve("Promesa resuelta").then(console.log);

// console.log("Fin del script");
// `)

// alert(`Según el script anterior, predice el orden en que se mostraran los mensajes del 1 al 5: así,
    
//     1."Inicio del script"
//     2."Primer setTimeout"
//     3."Segundo setTimeout"
//     4."Promesa resuelta"
//     5."Fin del script"
// `);

// let respuesta1 = parseInt(prompt("Ingresa el primer mensaje que se mostrará"));
// let respuesta2 = parseInt(prompt("Ingresa el segundo mensaje que se mostrará"));
// let respuesta3 = parseInt(prompt("Ingresa el tercero mensaje que se mostrará"));
// let respuesta4 = parseInt(prompt("Ingresa el cuarto mensaje que se mostrará"));
// let respuesta5 = parseInt(prompt("Ingresa el quinto mensaje que se mostrará"));

let correcta=[1,5,4,2,3];

let mensajes=["Inicio del script, debido a que es una tarea se ejecutará directamente y antes de las mini tareas y las macro tareas", 
    "Fin del script, debido a que es una tarea se ejecutará directamente y antes de las mini tareas y las macro tareas",
    "Promesa resuelta, debido a que es una mini tarea se ejecutará después de las tareas y antes de las macro tareas respectivamente",
    "Primer setTimeout, debido a que es una macro tarea se ejecutará después de las tareas y las mini tareas respectivamente", 
    "Segundo setTimeout, debido a que es una macro tarea se ejecutará después de las tareas y las mini tareas respectivamente"]

// let respuesta=[respuesta1,respuesta2,respuesta3,respuesta4,respuesta5];

let respuesta=[1,5,2,4,3];
let contador=0
let errores =[]
for (i=0; i<correcta.length; i++){
    if (correcta[i]==respuesta[i]){
        contador ++
    }else(
        console.log(`Error en la respuesta ${i+1} la respuesta correcta es ${correcta[i]} ${mensajes[i]}`)
    )

        
}


