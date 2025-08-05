'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // En este punto, NextAuth manejará la redirección
    // Simulamos el redireccionamiento a dashboard
    const redirect = () => {
      setLoading(false);
      router.push('/dashboard');
    };

    // Simular proceso de redirección
    setTimeout(redirect, 1000);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Procesando Autenticación
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {loading ? 'Redirigiendo a tu dashboard...' : 'Autenticación completada'}
          </p>
        </div>
        
        {error && <p className="mt-4 text-xs text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
}
