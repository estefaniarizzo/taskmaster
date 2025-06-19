import React from 'react';

const LayoutHeader = ({ currentPage, onNavigate, onLogout }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">TaskMaster Pro</h1>
      <nav className="flex space-x-4">
        <button
          onClick={() => onNavigate('projects')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'projects'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Proyectos
        </button>
        <button
          onClick={() => onNavigate('tasks')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'tasks'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Tareas
        </button>
        <button
          onClick={() => onNavigate('profile')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'profile'
              ? 'bg-black text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Mi Perfil
        </button>
        <button
          onClick={onLogout}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default LayoutHeader;