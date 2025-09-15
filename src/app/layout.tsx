import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Jurídico Prado - Acevedo y Asociados | Abogados en Corrientes",
  description: "Estudio jurídico independiente en Corrientes Capital especializado en Derecho Administrativo, Tributario, RRHH y Previsional. Más de 25 años de experiencia.",
  keywords: "abogados corrientes, derecho administrativo, derecho tributario, derecho laboral, derecho previsional, estudio juridico corrientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
