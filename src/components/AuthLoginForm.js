import React, { useState } from 'react';

const AuthLoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Aquí iría la llamada a tu API de NestJS para autenticación
    // Por ahora, simulamos una autenticación exitosa
    if (username === 'user' && password === 'password') {
      // En una aplicación real, recibirías un token JWT del backend
      // y lo guardarías en localStorage o en un contexto de React
      const mockToken = 'mock_jwt_token_12345';
      localStorage.setItem('jwt_token', mockToken);
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos. Intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthLoginForm;