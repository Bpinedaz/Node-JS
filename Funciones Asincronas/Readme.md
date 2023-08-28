¿Qué sucedió al usar async y await?
Al usar async y await, el flujo del programa se vuelve más sincrónico. Cuando utilizas await antes de una función que devuelve una promesa, el programa espera hasta que esa promesa se resuelva antes de continuar con la siguiente línea de código. Esto significa que las tareas como crear, eliminar y completar tareas se ejecutarán secuencialmente, esperando la resolución de cada una antes de pasar a la siguiente.

¿Qué sucedió al usar el método then()?
Cuando utilizas el método then(), estás encadenando las promesas de manera explícita. Cada llamada a then() espera a que la promesa anterior se resuelva y luego ejecuta la siguiente función. Esto también permite controlar de manera más detallada cómo se manejan las resoluciones o rechazos de las promesas.
Diferencias entre async, await y el método then():

async/await:

Hace que el código asincrónico parezca más síncrono y legible.
Permite pausar la ejecución usando await hasta que la promesa se resuelva.
El bloque try/catch se usa para manejar errores.
Método then():

Encadena promesas explícitamente, especificando qué debe hacerse después de que una promesa se resuelva.
Permite manejar resoluciones y rechazos de manera separada con then() y catch().