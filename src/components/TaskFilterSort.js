import React from 'react';

const TaskFilterSort = ({ searchTerm, onSearchChange, filterStatus, onFilterStatusChange, filterAssignee, onFilterAssigneeChange, sortOrder, onSortOrderChange, uniqueAssignees }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Filtros y Ordenamiento de Tareas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Búsqueda */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
          <input
            type="text"
            id="search"
            placeholder="Título, descripción, responsable..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filtro por Estado */}
        <div>
          <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
          <select
            id="filterStatus"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            value={filterStatus}
            onChange={(e) => onFilterStatusChange(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="por hacer">Por Hacer</option>
            <option value="en progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>

        {/* Filtro por Responsable */}
        <div>
          <label htmlFor="filterAssignee" className="block text-sm font-medium text-gray-700 mb-1">Responsable</label>
          <select
            id="filterAssignee"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            value={filterAssignee}
            onChange={(e) => onFilterAssigneeChange(e.target.value)}
          >
            <option value="">Todos</option>
            {uniqueAssignees.map((assignee) => (
              <option key={assignee} value={assignee}>{assignee}</option>
            ))}
          </select>
        </div>

        {/* Ordenamiento */}
        <div className="md:col-span-3">
          <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-1">Ordenar por Fecha Límite</label>
          <select
            id="sortOrder"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
          >
            <option value="">Sin Orden</option>
            <option value="asc">Más Antiguas Primero</option>
            <option value="desc">Más Recientes Primero</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskFilterSort;