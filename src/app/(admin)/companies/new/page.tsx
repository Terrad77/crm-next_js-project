'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';

export interface Props {}

export default function ({}: Props) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
