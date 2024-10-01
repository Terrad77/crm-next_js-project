import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
    params: { id: string[] }; // додавання ідентифікатора в типи
}

// ф-ція завантажує ресурси і повертає масив об'єктів = параметрів для динамічного сегменту
// export  function generateStaticParams() {
//     return [{id:'1'}, {id:'2'}, {id:'3'}];
// }

// для динамічного роутінгу сторінки компанії, передамо params в пропс рендерингу
export default function Page({params}: PageProps) {
  return (
    <>
      <Header>Companies № {String(params.id)}</Header>
        <p>This text about Company&nbsp;№ {String(params.id)}
            {/*{new Date().toTimeString()}*/}
        </p>
    </>
  );
}
