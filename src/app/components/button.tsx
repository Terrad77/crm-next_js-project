'use client';

import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ disabled, className, ...rest }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded', // Базовые стили
        !disabled && 'hover:bg-gray-800 active:bg-gray-950', // Стили для активного состояния
        disabled && 'text-zinc-100', // Стили для активного состояния
        className, // Добавляем переданный className, чтобы он применялся
      )}
    />
  );
}
