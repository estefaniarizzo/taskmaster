import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import TaskItem from './components/TaskItem';
import AuthLoginForm from './components/AuthLoginForm';
import TaskFilterSort from './components/TaskFilterSort'; // Importar el nuevo componente
import { mockProjects } from './mock/projects';

const App = () => {
  const [currentPage, setCurrentPage] = useState('projects');
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Estados para filtros y ordenamiento
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterAssignee, setFilterAssignee] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // 'asc' para ascendente, 'desc' para descendente

  // Simula la carga de datos y verifica la autenticación al inicio
  useEffect(() => {
    setProjects(mockProjects);
    const token = localStorage.getItem('jwt_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('projects'); // Redirigir a proyectos después del login
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    setIsAuthenticated(false);
    setCurrentPage('login'); // Redirigir a la página de login
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedProject(null); // Deseleccionar proyecto al cambiar de página
    // Limpiar filtros y búsqueda al cambiar de página
    setSearchTerm('');
    setFilterStatus('');
    setFilterAssignee('');
    setSortOrder('');
  };

  const handleSelectProject = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
    setCurrentPage('projectDetail');
  };

  const handleBackToList = () => {
    setSelectedProject(null);
    setCurrentPage('projects');
  };

  const handleAddTask = (projectId, newTask) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [...project.tasks, { id: `task-${Date.now()}`, ...newTask }],
              tasksCount: project.tasksCount + 1,
            }
          : project
      )
    );
    // Actualizar el proyecto seleccionado para que se refleje el cambio inmediatamente
    setSelectedProject((prevSelected) =>
      prevSelected && prevSelected.id === projectId
        ? {
            ...prevSelected,
            tasks: [...prevSelected.tasks, { id: `task-${Date.now()}`, ...newTask }],
            tasksCount: prevSelected.tasksCount + 1,
          }
        : prevSelected
    );
  };

  const handleEditTask = (taskId, updatedTask) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => ({
        ...project,
        tasks: project.tasks.map((task) =>
          task.id === taskId ? { ...task, ...updatedTask } : task
        ),
      }))
    );
    setSelectedProject((prevSelected) =>
      prevSelected
        ? {
            ...prevSelected,
            tasks: prevSelected.tasks.map((task) =>
              task.id === taskId ? { ...task, ...updatedTask } : task
            ),
          }
        : prevSelected
    );
  };

  const handleToggleComplete = (taskId, currentStatus) => {
    const newStatus = currentStatus === 'completada' ? 'por hacer' : 'completada';
    setProjects((prevProjects) =>
      prevProjects.map((project) => ({
        ...project,
        tasks: project.tasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        ),
      }))
    );
    setSelectedProject((prevSelected) =>
      prevSelected
        ? {
            ...prevSelected,
            tasks: prevSelected.tasks.map((task) =>
              task.id === taskId ? { ...task, status: newStatus } : task
            ),
          }
        : prevSelected
    );
  };

  const handleDeleteTask = (taskId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => ({
        ...project,
        tasks: project.tasks.filter((task) => task.id !== taskId),
        tasksCount: project.tasks.filter((task) => task.id !== taskId).length,
      }))
    );
    setSelectedProject((prevSelected) =>
      prevSelected
        ? {
            ...prevSelected,
            tasks: prevSelected.tasks.filter((task) => task.id !== taskId),
            tasksCount: prevSelected.tasks.filter((task) => task.id !== taskId).length,
          }
        : prevSelected
    );
  };

  // Lógica de filtrado y ordenamiento
  const allTasks = projects.flatMap(project => project.tasks);

  const uniqueAssignees = [...new Set(allTasks.map(task => task.assignee))];

  let filteredAndSortedTasks = allTasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === '' || task.status === filterStatus;
    const matchesAssignee = filterAssignee === '' || task.assignee === filterAssignee;

    return matchesSearch && matchesStatus && matchesAssignee;
  });

  if (sortOrder === 'asc') {
    filteredAndSortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (sortOrder === 'desc') {
    filteredAndSortedTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  }

  if (!isAuthenticated) {
    return <AuthLoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader currentPage={currentPage} onNavigate={handleNavigate} onLogout={handleLogout} />

      <main className="p-6">
        {currentPage === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelectProject={handleSelectProject} />
            ))}
          </div>
        )}

        {currentPage === 'projectDetail' && selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onBackToList={handleBackToList}
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        )}

        {currentPage === 'tasks' && (
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Todas las Tareas</h2>
            
            <TaskFilterSort
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filterStatus={filterStatus}
              onFilterStatusChange={setFilterStatus}
              filterAssignee={filterAssignee}
              onFilterAssigneeChange={setFilterAssignee}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
              uniqueAssignees={uniqueAssignees}
            />

            {filteredAndSortedTasks.length === 0 ? (
              <p className="text-gray-500">No se encontraron tareas que coincidan con tu búsqueda o filtros.</p>
            ) : (
              <div className="space-y-4">
                {filteredAndSortedTasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onEditTask={handleEditTask}
                    onToggleComplete={handleToggleComplete}
                    onDeleteTask={handleDeleteTask}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {currentPage === 'profile' && (
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mi Perfil</h2>
            <p className="text-gray-700">Aquí iría la información del perfil del usuario y la gestión de roles.</p>
            <p className="text-gray-500 mt-2">
              (Esta sección es un placeholder. Se necesitaría implementar la autenticación y autorización para mostrar datos reales.)
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;


// DONE