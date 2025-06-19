import React, { useState } from 'react';

const CommentSection = ({ comments: initialComments, onAddComment }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const [currentComments, setCurrentComments] = useState(initialComments);

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      const newCommentObj = {
        text: newCommentText.trim(),
        author: 'Usuario Actual', // Esto debería venir del contexto de autenticación
        date: new Date().toISOString().slice(0, 10),
      };
      setCurrentComments([...currentComments, newCommentObj]);
      onAddComment(newCommentObj); // Notificar al componente padre (ProjectDetail)
      setNewCommentText('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Comentarios</h3>
      <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
        {currentComments.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay comentarios aún. ¡Sé el primero en comentar!</p>
        ) : (
          currentComments.map((comment, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <p className="text-gray-800 text-sm">{comment.text}</p>
              <p className="text-gray-500 text-xs mt-1">
                <span className="font-medium">{comment.author}</span> el {comment.date}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col">
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
          rows="3"
          placeholder="Escribe un nuevo comentario..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Agregar Comentario
        </button>
      </div>
    </div>
  );
};

export default CommentSection;