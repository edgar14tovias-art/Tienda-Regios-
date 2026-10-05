export const metadata = {
  title: 'Mi Tienda Digital',
  description: 'Entrega instantánea 24/7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#070b08' }}>
        {children}
      </body>
    </html>
  );
}
