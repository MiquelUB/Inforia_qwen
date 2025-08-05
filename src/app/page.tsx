'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Lógica de redirección básica
    // En una implementación real, verificarías el estado de autenticación aquí
    // Por ejemplo, usando NextAuth o un contexto de autenticación personalizado
    const isAuthenticated = false; // Placeholder

    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p>Redirigiendo...</p>
    </div>
  );
}
