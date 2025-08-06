'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Según el "Documento de Trazabilidad del Proyecto SaaS INFORIA":
    // Redirigir al login si el usuario no está autenticado
    // En una implementación completa, aquí se verificaría el estado de autenticación
    // Por ahora, simulamos la redirección al login
    const isAuthenticated = false; // Placeholder para la lógica real de autenticación
    
    if (isAuthenticated) {
      // Si está autenticado, ir al dashboard
      router.push('/dashboard');
    } else {
      // Si no está autenticado, ir a la página de login
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a iNFORiA</h1>
        <p className="text-lg text-gray-600">
          Tu asistente clínico para optimizar tu trabajo.
        </p>
        <p className="text-md text-gray-500 mt-4">
          Redirigiendo...
        </p>
      </div>
    </div>
  );
}
