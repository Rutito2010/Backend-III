
import dotenv from 'dotenv';
console.log("Antes de configurar dotenv:");
console.log("Mode: ", process.env.MODE, "PORT: ", process.env.PORT);
// dotenv.config() lee el archivo .env y carga las variables de entorno en process.env
console.log(dotenv.config());

console.log("Después de configurar dotenv:");
console.log("Mode: ", process.env.MODE, "PORT: ", process.env.PORT);

//Esta configuración puede ir en un archivo separado config.js
let config = {
    MODE: process.env.MODE || 'development',
    PORT: process.env.PORT || 8080
}


// Exportar la configuración para usarla en otros archivos

//Nos permite en base a las .env configurar el comportamiento de la app
if(config.MODE === 'development'){
    console.log('Iniciando en modo desarrollo...');
}else{
    console.log('Iniciando en modo producción...');
}

console.log(`Puerto configurado: ${config.PORT}`);
