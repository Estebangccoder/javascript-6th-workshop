function manejarAsincronia(callback, prom) {

    prom.then(() => {

        callback()

    }).catch((msg) => {
        console.log(msg);
    });


}

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            resolve();
        } else {
            reject('Error en la promesa');
        }

    }, 2000);
})



const done = function callback() {
    console.log('Promesa cumplida y callback ejecutado!');
}

manejarAsincronia(done, promesa)

/* 
-¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?

sí aumento el tiempo de respuesta a 5 segundos, la promesa tardará un poco más en dar
respuesta pero si la reduzco a 1 segundo, permitirá que se ejecuet más rápido.

-¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
tomará el valor que hayamos ingresado en reject y hayamos ingresado como parametro en .catch,
para este caso mostrará el siguiente mensaje 'Error en la promesa'

- ¿Puedes modificar la función para que el callback maneje diferentes tipos de 
información dependiendo del resultado de la promesa?
 Sí sólo hag que el callback sea un Console.log() simplemente edito en .then y .catch  los mensajes que quiera mostrar.

así:

callback((mensaje)=>{
    console.log(mensaje);
})

promise.then((msg)=>{
    callback(msj);
}).catch((error)=>{
   callback(error); 
})


*/


