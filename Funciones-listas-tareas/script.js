const listas = [];

function agregartarea(detalle) {
    listas.push({
      detalle,
      completed: false,
      estado: "Sin completar"
    });
    console.log(`Tarea "${detalle}" agregada.`);
  }

agregartarea("hacer una compra");
agregartarea("llamar policia");

const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('addTaskButton');

function mostrarTareas() {
    taskList.innerHTML = '';
    listas.forEach((tarea, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${tarea.detalle}</td>
        <td>${tarea.estado}</td>
        <td> <!-- Acciones -->
          <input type="text" class="updateInput" data-index="${index}" style="display:none" />
          <button class="completeButton" data-index="${index}" ${tarea.completed ? "disabled" : ""}>Tarea Completada</button>
          <button class="modifyButton" data-index="${index}" ${tarea.completed ? "disabled" : ""}>Modificar</button>
          <button class="updateButton" data-index="${index}" style="display:none" ${tarea.completed ? "disabled" : ""}>Actualizar</button>
          <button class="deleteButton" data-index="${index}" ${tarea.completed ? "disabled" : ""}>Eliminar</button>
        </td>
      `;
      if (tarea.completed) {
        row.style.textDecoration = "line-through";
      }
      taskList.appendChild(row);
    });
  

  const completeButtons = document.querySelectorAll('.completeButton');
  const modifyButtons = document.querySelectorAll('.modifyButton');
  const updateButtons = document.querySelectorAll('.updateButton');
  const deleteButtons = document.querySelectorAll('.deleteButton');
  const updateInputs = document.querySelectorAll('.updateInput');

  completeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      console.log(`Tarea en posición ${index} completada.`);
      listas[index].completed = true;
      listas[index].estado = "Completada";
      mostrarTareas();
    });
  });

  modifyButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      console.log(`Modificando tarea en posición ${index}`);
      const task = listas[index];
      const newTask = prompt('Modificar tarea:', task.detalle);
      if (newTask !== null) {
        task.detalle = newTask;
        mostrarTareas();
      }
    });
  });

  updateButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      console.log(`Actualizando tarea en posición ${index}`);
      const task = listas[index];
      const updatedTask = updateInputs[index].value;
      task.detalle = updatedTask;
      mostrarTareas();
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');
      const task = listas[index];
      const confirmDelete = confirm(`¿Está seguro de eliminar la tarea "${task.detalle}"?`);
      if (confirmDelete) {
        console.log(`Tarea "${task.detalle}" eliminada.`);
        listas.splice(index, 1);
        mostrarTareas();
      }
    });
  });
}

addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask !== '') {
    agregartarea(newTask);
    mostrarTareas();
    newTaskInput.value = '';
  }
});

mostrarTareas();