function crearSumador(n){
    let total= n

    return function(a){
        total+= a
        console.log(total)
    }
};

let sumarCinco= crearSumador(5);
sumarCinco(3)
let sumarDiez = crearSumador(10);
sumarDiez(8)
let sumarVeinte= crearSumador(20);
sumarVeinte(2)


//- ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
// Las mantienen al declararlas en una variable y dejar los parametros estáticos por lo cual se puede decir que queda como una especie de constante.

//- ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
// considero que permitirá definir una especie de funciones con valores constantes los cuales permitirán reducir el código para una misma funcionalidad.

