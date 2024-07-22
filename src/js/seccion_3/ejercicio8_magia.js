function funcionContador() {
    let total = 0 // contador de los incrementos
    return function incrementar() { // En esta función haremos los incrementos
        total++
        return total
    }
}
function usuario() {
    let contador = funcionContador()
    let numero
    let continuar = true

    while (continuar) {
        let respuesta = prompt(`
            -----CONTADOR-------
            Selecciona una opción:
            1. Aumentar
            2. Valor Actual del contador
            3. Salir`)

        if (respuesta == "1") {
            numero = contador()

        }
        else if (respuesta == "2") {
            alert(numero)

        }
        else if (respuesta == "3") {
            alert(numero)
            alert('Adiós')
            continuar = false
        } else {
            alert("Ingresa un valor valido")

        }

    }  
}
usuario()
