'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulación de login
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login simulado');
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Bienvenido a iNFORiA
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Accede a tu asistente clínico para empezar a optimizar tu trabajo.
          </p>
        </div>

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full px-4 py-2 font-medium text-white bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {isLoading ? "Redirigiendo..." : "Acceder con Google"}
        </button>
      </div>
    </div>
  );
}
