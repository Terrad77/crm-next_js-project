import React from 'react';
import './globals.css'; // імпортуємо глобальни стилі

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
