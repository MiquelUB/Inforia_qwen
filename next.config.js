/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // La opción experimental.appDir: true ha sido eliminada porque es el comportamiento
  // predeterminado en Next.js 14+
  // Para alinearse con el "Manual de Marca", podemos añadir configuraciones futuras aquí.
};

module.exports = nextConfig;
