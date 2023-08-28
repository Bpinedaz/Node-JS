tasksModule.createTask('Completar ejercicio')
  .then(() => tasksModule.deleteTask('Hacer la cama'))
  .then(() => tasksModule.completeTask('Leer libro'))
  .then(() => {
    console.log('Todas las operaciones completadas');
  })
  .catch(error => {
    console.error('Error:', error);
  })