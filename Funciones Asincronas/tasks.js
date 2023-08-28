const tasks = [];

const createTask = taskName => new Promise(resolve => {
  tasks.push(taskName);
  resolve('Tarea creada exitosamente');
});

const deleteTask = taskName => new Promise((resolve, reject) => {
  const index = tasks.indexOf(taskName);
  if (index !== -1) {
    tasks.splice(index, 1);
    resolve('Tarea eliminada exitosamente');
  } else {
    reject('Tarea no encontrada');
  }
});

const completeTask = taskName => new Promise((resolve, reject) => {
  const index = tasks.indexOf(taskName);
  if (index !== -1) {
    tasks.splice(index, 1);
    resolve('Tarea completada exitosamente');
  } else {
    reject('Tarea no encontrada');
  }
});

module.exports = {
  createTask,
  deleteTask,
  completeTask,
};