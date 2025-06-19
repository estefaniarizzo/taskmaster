import React from 'react';

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200"
      onClick={() => onSelectProject(project.id)}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
      <p className="text-gray-600 text-sm">{project.description}</p>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>Tareas: {project.tasksCount}</span>
        <span>Progreso: {project.progress}%</span>
      </div>
    </div>
  );
};

export default ProjectCard;