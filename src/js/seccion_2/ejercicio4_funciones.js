    // console.log(
    //   "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
    // );
    // try {
    //   console.log(funcionDeclarada());
    // } catch (error) {
    //   console.log("Error:", error.message);
    // }

    // console.log(
    //   "Intentando llamar a 'funcionExpresada' antes de su declaración:"
    // );
    // try {
    //   console.log(funcionExpresada());
    // } catch (error) {
    //   console.log("Error:", error.message);
    // }

    // Declaración de una función declarada
    function funcionDeclarada() {
      return "Función declarada ha sido llamada.";
    }

    // Declaración de una función expresada
    const funcionExpresada = function () {
      return "Función expresada ha sido llamada.";
    };

    // console.log("Llamando a 'funcionDeclarada' después de su declaración:");
    // console.log(funcionDeclarada());

    console.log("Llamando a 'funcionExpresada' después de su declaración:");
    console.log(funcionExpresada());

```
    - **4.3: Reflexión:** Después de ejecutar el código, responde los siguientes puntos:
    - ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
    
    En la función declarada nos ejecuta la funcionDeclarada antes de ser declarada
    
    En la función expresada nos arroja un error indicando que la funcionExpresada no está definida
    
    - ¿Cómo difieren los resultados entre la función declarada y la función expresada?
    
    La funcion declarada puede ser ejecutada en cualquier punto del código en cambio las funciones 
    expresadas deben de ser primero declaradas para que al llamarlas se puedan ejecutar.
    
    - ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
    Indica que las funciones declaradas pueden ser llamadas en cualquier punto del código a diferencia de 
    las funciones expresadas, las cuales deben ser declaradas antes de ser llamadas.
```