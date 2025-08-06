import './globals.css';
import type { Metadata } from 'next';
import { Lora, Nunito_Sans } from 'next/font/google';

// Configuració de fonts segons el Manual de Marca INFORIA v1
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'iNFORiA - Asistente Clínico y de Negocio para Psicólogos',
  description: 'Recupera tu vocación. Nosotros nos encargamos del papeleo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // *************************************************************************
  // CORRECCIÓ: Usar un Template Literal (``) per concatenar strings i variables.
  // *************************************************************************
  const bodyClasses = `${lora.variable} ${nunitoSans.variable} font-sans`;

  return (
    <html lang="es">
      <body className={bodyClasses}>
        {children}
      </body>
    </html>
  );
}