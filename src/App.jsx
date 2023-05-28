import React, { useState } from "react";
import "./styles.css";

function App() {
  const [Actividad, setActividad] = useState("");
  const [Tareas, setTareas] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleChange = (event) => {
    setActividad(event.target.value);
  };

  const handleAddTask = () => {
    if (Actividad.trim() !== "") {
      setTareas([...Tareas, Actividad]);
      setActividad("");
    }
  };

  const handleEditTask = () => {
    if (selectedTask !== null) {
      const editedTask = prompt("Modifica la Actividad", Tareas[selectedTask]);
      if (editedTask !== null) {
        const updatedTasks = [...Tareas];
        updatedTasks[selectedTask] = editedTask;
        setTareas(updatedTasks);
        setSelectedTask(null);
      }
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask !== null) {
      const updatedTasks = Tareas.filter((_, index) => index !== selectedTask);
      setTareas(updatedTasks);
      setSelectedTask(null);
    }
  };

  const handleTaskClick = (index) => {
    setSelectedTask(index);
  };

  return (
    <div className="Contenedor">
      <div className="Titulo">
        <h1>ToDo List</h1>
      </div>
      <div className="Tareas">
        <input
          placeholder="Escriba la Actividad"
          value={Actividad}
          onChange={handleChange}
        />
        <div className="acciones">
          <button className="Add" onClick={handleAddTask}>Añadir</button>
          <button className="Mod" onClick={handleEditTask}>Modificar</button>
          <button className="Del" onClick={handleDeleteTask}>Borrar</button>
          </div>
        </div>
        <ul className="ListaActividades">
          {Tareas.map((Actividad, index) => (
            <li
              key={index}
              onClick={() => handleTaskClick(index)}
              className={`cuadro ${selectedTask === index ? "selected" : ""}`}
            >
              {Actividad}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
