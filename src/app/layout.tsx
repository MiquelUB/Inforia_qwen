import './globals.css';
import type { Metadata } from 'next';
import { Lora, Nunito_Sans } from 'next/font/google';

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
  return (
    <html lang="es">
      <body className={${lora.variable}  font-sans}>
        {children}
      </body>
    </html>
  );
}
