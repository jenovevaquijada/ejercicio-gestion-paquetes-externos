const chalk = require('chalk');
const dayjs = require('dayjs');

const ahora = dayjs().format('DD-MM-YYYY HH:mm:ss');

console.log(chalk.green('¡Bienvenida al sistema, Jenoveva!'));

console.log(chalk.yellow(`Hoy es: ${ahora}`));

console.log(chalk.blue.bold.underline('\nConstruyendo experiencias con empatía y creatividad.\n'));