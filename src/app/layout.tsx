import React from 'react';
import './globals.css'; // імпортуємо глобальни стилі
import { Plus_Jakarta_Sans } from 'next/font/google'; // імпорт шрифту

// инициализация шрифта с использованием латинского подмножества, для отрисовки латинских символов.
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/*body элементу присвоен class "font.className", что применит импортированные стили шрифта ко всему содержимому.*/}
    <body className={font.className}>{children}</body>
    </html>
  );
}
