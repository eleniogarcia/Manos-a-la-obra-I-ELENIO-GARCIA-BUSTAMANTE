// Importa la biblioteca React, que es esencial para crear componentes en React.
import React from 'react';
import './App.css';

// Define el componente principal de la aplicación llamado "App".
function App() {
  // El componente App devuelve una estructura de JSX que define la interfaz de usuario.
  return (
    // Contenedor principal de la aplicación, que tiene una clase CSS "todo-app".
    <div className="todo-app">
      {/* Encabezado principal de la aplicación con el título de la lista de tareas. */}
      <h1>LISTA DE TAREAS DE ELENIO</h1>

      {/* Contenedor que agrupa el campo de entrada de texto y el botón de añadir tarea. */}
      <div className="input-container">
        {/* Campo de entrada de texto para que el usuario ingrese una nueva tarea. */}
        <input type="text" placeholder="Nueva tarea..." />
        {/* Botón para agregar la nueva tarea ingresada. */}
        <button >ADD</button>
      </div>

      {/* Lista no ordenada que contendrá los elementos de la lista de tareas. */}
      <ul className="task-list">
        {/* Primer elemento de tarea en la lista, con un checkbox y un botón para eliminarla. */}
        <li className="task-item">
          {/* Checkbox que permite marcar la tarea como completada. */}
          <input type="checkbox" />
          {/* Nombre de la tarea. */}
          <span>Task N</span>
          {/* Botón para eliminar la tarea, con un ícono de basura. */}
          <button className="delete-btn">🗑</button>
        </li>

        {/* Segundo elemento de tarea en la lista. */}
        <li className="task-item">
          <input type="checkbox" />
          <span>Task N-1</span>
          <button className="delete-btn">🗑</button>
        </li>

        {/* Tercer elemento de tarea que está marcado como completado. */}
        <li className="task-item completed">
          {/* Checkbox que ya está marcado y no se puede desmarcar. */}
          <input type="checkbox" checked readOnly />
          {/* Nombre de la tarea completada. */}
          <span>Completed Task N-2</span>
          <button className="delete-btn">🗑</button>
        </li>

        {/* Cuarto elemento de tarea en la lista. */}
        <li className="task-item">
          <input type="checkbox" />
          <span>Task K</span>
          <button className="delete-btn">🗑</button>
        </li>

        {/* Quinto elemento de tarea en la lista. */}
        <li className="task-item">
          <input type="checkbox" />
          <span>Task 2</span>
          <button className="delete-btn">🗑</button>
        </li>

        {/* Sexto elemento de tarea que está marcado como completado. */}
        <li className="task-item completed">
          <input type="checkbox" checked readOnly />
          <span>Completed Task 1</span>
          <button className="delete-btn">🗑</button>
        </li>
      </ul>
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos.
export default App;
