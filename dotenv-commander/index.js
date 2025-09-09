import dotenv from "dotenv"
import { Command } from 'commander';
const program = new Command()
program
  .option('-m, --mode <mode>', 'set the mode (development or production)', 'development')
  .parse(process.argv);

const options = program.opts();
const mode = options.mode;

console.log("MODE: ", mode)
console.log("dotenv process: ", dotenv.config({
    path: mode == "development"? "./.env.development" : "./.env.production"
}))


const config = {
    MODE: mode,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET
}



if(config.MODE === 'development'){
    console.log('Iniciando en modo desarrollo...');
}else{
    console.log('Iniciando en modo producción...');
}

console.log(`Puerto configurado: ${config.PORT}`);