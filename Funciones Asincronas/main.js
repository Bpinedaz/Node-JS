const tasksModule = require('./tasks.js');

async function main() {
  try {
    await tasksModule.createTask('Completar ejercicio');
    await tasksModule.deleteTask('Hacer la cama');
    await tasksModule.completeTask('Leer libro');

    console.log('Todas las operaciones completadas');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();