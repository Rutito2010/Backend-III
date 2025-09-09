/* Process es un objeto global que proporciona información y control sobre el proceso Node.js actual.
* No es necesario importarlo explícitamente.
* Proporciona métodos y propiedades útiles para interactuar con el entorno de ejecución.
*/

/*console.log("Directorio actual:", process.cwd());
console.log("ID del proceso:", process.pid);
console.log("Uso de memoria:", process.memoryUsage());
console.log("Variables de entorno:", process.env);
console.log("Argumentos de la línea de comandos:", process.argv);
*/

/* Process es un EventEmitter, lo que significa que puede emitir y escuchar eventos.
* Algunos eventos comunes incluyen:
* - exit: Se emite cuando el proceso está a punto de finalizar.
* - uncaughtException: Se emite cuando una excepción no capturada ocurre.
*/

/*
process.on("exit", (code) => {
  console.log(`El proceso ${process.pid} está terminando con código: ${code}`);
});
process.on("saludo", (mensaje) => {
  console.log(mensaje);
});


process.on("exit",(code)=>{
    if(code === -4) return console.log("Proceso Finalizado por argumentacion invalida en una funcion");
    console.log(`El proceso ${process.pid} está terminando con código: ${code}`);
})

function listNumber(...numbers){
    const types = numbers.map(n => typeof n);
    const allTypesNumbers = numbers.every(n => typeof n === 'number');
    if(!allTypesNumbers){
        console.error("Invalid Parameters",types)
        process.exit(-4)
    }
}

listNumber(1,2,3,4,5,6,7,8,9,10)

listNumber(1,2,3,4,"a", "b", [], {})

process.emit("saludo", "Hola Alumnos de CoderHouse");

console.log("Fin del proceso");
*/

/* Process.argv
* Proporciona acceso a los argumentos de la línea de comandos.
* process.argv es un array que contiene los argumentos.
* El primer elemento es la ruta del ejecutable de Node.js.
* El segundo elemento es la ruta del script que se está ejecutando.
* Los elementos restantes son los argumentos pasados al script.
*/
console.log(process.argv);

// Ejemplo de uso de process.argv
const args = process.argv.slice(2); // Ignorar los dos primeros elementos
const options = {};

// Recorrer cada argumento
for (let i = 0; i < args.length; i++) {
  const arg = args[i];

  if (arg.startsWith('--')) {
    // Caso --key=value o --key value
    const [key, value] = arg.includes('=') ? arg.slice(2).split('=') : [arg.slice(2), args[i + 1]];
    options[key] = value === args[i + 1] ? args[i + 1] : true;
    if (value === args[i + 1]) i++;
  }
}


console.log('Options recibidas:');
console.log(`Mode: ${options.mode}`);
console.log(`Port: ${options.port}`);

if (options.mode === 'production') {
  console.log('Iniciando en modo producción...');
} else {
  console.log('Iniciando en modo desarrollo...');
}

console.log(`Puerto configurado: ${options.port}`);

