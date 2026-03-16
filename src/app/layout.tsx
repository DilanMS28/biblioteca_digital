import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";


export const metadata: Metadata = {
  title: "Biblioteca Digital",
  description: "Biblioteca Digital del Colegio Técnico Profesional de Corredores",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />
      </head>
      <body>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
