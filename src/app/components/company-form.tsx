'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import Button from '@/app/components/button';
import InputField from '@/app/components/input-field';
import LogoUploader from '@/app/components/logo-uploader';
// Імпорт кастомного елемента безпосередньо, без імпорту як React-компонент
import  '@/app/components/custom-date-picker-shadow-dom';

// тип значень форми
export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};
// початкове значення форми
const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Status" name="status" />
            <InputField label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Name" name="name" />
            <InputField
              label="Category"
              placeholder="Category"
              name="category"
            />
            {/*var.1 календар не визначений явно у компоненті, він є частиною стандартної поведінки HTML для полів введення з типом date*/}
            <InputField label="Joined date" type="date" name="date"  />

            {/* var.2 інтегруємо в React-код кастомний компонент календаря */}
            {/*<div className="flex flex-col" >*/}
            {/*  <label className="mb-2"  htmlFor="date">Joined date</label>*/}
            {/*  <custom-date-picker />*/}
            {/*</div>*/}

            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
