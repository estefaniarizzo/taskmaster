import React, { useState } from 'react';
import TaskItem from './TaskItem';
import CommentSection from './CommentSection';

const ProjectDetail = ({ project, onBackToList, onAddTask, onEditTask, onToggleComplete, onDeleteTask }) => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'por hacer',
    assignee: '',
  });

  // Estado local para los comentarios del proyecto
  const [projectComments, setProjectComments] = useState(project.comments || []);

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate && newTask.assignee) {
      onAddTask(project.id, newTask);
      setNewTask({ title: '', description: '', dueDate: '', status: 'por hacer', assignee: '' });
      setShowAddTaskForm(false);
    } else {
      alert('Por favor, completa todos los campos obligatorios de la tarea.');
    }
  };

  const handleAddCommentToProject = (commentObj) => {
    // En una aplicación real, aquí enviarías el comentario al backend
    // y luego actualizarías el estado del proyecto con la respuesta del backend.
    // Por ahora, solo actualizamos el estado local.
    setProjectComments((prevComments) => [...prevComments, commentObj]);
    console.log('Comentario agregado al proyecto:', project.name, commentObj);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        onClick={onBackToList}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 0 010 1.414L9.414 10l3.293 3.293a1 0 01-1.414 1.414l-4-4a1 0 010-1.414l4-4a1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a Proyectos
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{project.name}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
          <span>Creado el: {project.createdAt}</span>
          <span>Progreso: {project.progress}%</span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tareas del Proyecto</h3>
        {project.tasks.length === 0 ? (
          <p className="text-gray-500 mb-4">Este proyecto no tiene tareas aún.</p>
        ) : (
          <div className="space-y-4">
            {project.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEditTask={onEditTask}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </div>
        )}

        <button
          onClick={() => setShowAddTaskForm(!showAddTaskForm)}
          className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          {showAddTaskForm ? 'Cancelar' : 'Agregar Nueva Tarea'}
        </button>

        {showAddTaskForm && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Nueva Tarea</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                  type="text"
                  id="taskTitle"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700">Descripción</label>
                <input
                  type="text"
                  id="taskDescription"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="taskDueDate" className="block text-sm font-medium text-gray-700">Fecha Límite</label>
                <input
                  type="date"
                  id="taskDueDate"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="taskAssignee" className="block text-sm font-medium text-gray-700">Responsable</label>
                <input
                  type="text"
                  id="taskAssignee"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  value={newTask.assignee}
                  onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="taskStatus" className="block text-sm font-medium text-gray-700">Estado</label>
                <select
                  id="taskStatus"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  value={newTask.status}
                  onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                >
                  <option value="por hacer">Por Hacer</option>
                  <option value="en progreso">En Progreso</option>
                  <option value="completada">Completada</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleAddTask}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Crear Tarea
            </button>
          </div>
        )}
      </div>
      <CommentSection comments={projectComments} onAddComment={handleAddCommentToProject} />
    </div>
  );
};

export default ProjectDetail;