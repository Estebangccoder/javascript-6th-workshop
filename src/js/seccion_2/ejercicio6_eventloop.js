console.log('Mensaje 1: Inmediatamente')

setTimeout(()=>{
    console.log('Mensaje 2: Con timeout de 0 segundos')
},0);

setTimeout(()=>{
    console.log('Mensaje 3: Con timeout de 1 segundos')
},1000)

/*
- ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente 
después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 

Es debido al orden de ejecución de JS, ya que ejecutará primero las tareas directas, luego
las promesas, y luego los setTimeout.
- ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, 
y la forma en que JavaScript maneja las operaciones asíncronas?

El event loop es el ciclo de vida principal de JavaScript que se encarga de manejar 
las tareas asíncronas, las cuales ejecutara en primer orden las tareas directas, luego
las tareas micro y luego las macro.
*/   