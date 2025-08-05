    <button
      onClick={onClick}
      disabled={isLoading}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
    >
      {/* Puedes usar un icono de lucide-react aquí si lo deseas */}
      {/* <Chrome className="mr-2 h-4 w-4" /> */}
      {isLoading ? "Redirigiendo..." : "Acceder con Google"}
    </button>
  );
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulación de login
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login simulado');
    } catch (err) {
      console.error("Error en signIn:", err);
      setError(err instanceof Error ? err.message : "Un error desconocido ha ocurrido.");
    } finally {
      setIsLoading(false);
    }
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

        <GoogleAuthButton onClick={handleSignIn} isLoading={isLoading} />

        {error && <p className="mt-4 text-xs text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
}
