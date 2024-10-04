'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string }; // додавання ідентифікатора в типи
}

// ф-ція завантажує ресурси і повертає масив об'єктів = параметрів для динамічного сегменту
// export  function generateStaticParams() {
//     return [{id:'1'}, {id:'2'}, {id:'3'}];
// }

// для динамічного роутингу сторінки компанії, передамо params в Props рендерингу
export default function Page({ params }: PageProps) {
  // додано useEffect для обробки запитів з id що не є integer
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies № {params.id}</Header>
      <p>
        This text about Company&nbsp;№ {String(params.id)}
        {/*{new Date().toTimeString()}*/}
      </p>
    </>
  );
}
