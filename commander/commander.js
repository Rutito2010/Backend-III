import { Command } from 'commander';
const program = new Command();

console.log(process.argv);

// Definir opciones con commander.js
program
  .option('--mode <mode>', 'set the mode (development or production)', 'development')
  .option('--port <port>', 'set the port number', '3000');

program.parse(process.argv);

const options = program.opts();

console.log('Options recibidas:');
console.log(`Mode: ${options.mode}`);
console.log(`Port: ${options.port}`);

if (options.mode === 'production') {
  console.log('Iniciando en modo producción...');
} else {
  console.log('Iniciando en modo desarrollo...');
}

console.log(`Puerto configurado: ${options.port}`);