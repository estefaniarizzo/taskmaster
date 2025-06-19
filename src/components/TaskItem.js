import React from 'react';

const TaskItem = ({ task, onEditTask, onToggleComplete, onDeleteTask }) => {
  const getStatusClasses = (status) => {
    switch (status) {
      case 'por hacer':
        return 'bg-red-100 text-red-800';
      case 'en progreso':
        return 'bg-yellow-100 text-yellow-800';
      case 'completada':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex-1 mb-3 md:mb-0">
        <h4 className="text-lg font-medium text-gray-900">{task.title}</h4>
        <p className="text-gray-600 text-sm mt-1">{task.description}</p>
        <div className="flex items-center text-xs text-gray-500 mt-2 space-x-3">
          <span>Responsable: {task.assignee}</span>
          <span>Fecha Límite: {task.dueDate}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(task.status)}`}>
            {task.status}
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEditTask(task.id)}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
        >
          Editar
        </button>
        <button
          onClick={() => onToggleComplete(task.id, task.status)}
          className={`px-3 py-1 rounded-lg transition-colors text-sm ${
            task.status === 'completada'
              ? 'bg-yellow-500 text-white hover:bg-yellow-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {task.status === 'completada' ? 'Restablecer' : 'Completar'}
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;