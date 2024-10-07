import React from 'react';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category={'Products'}
        company={'Cisco'}
        status={Status.Pending}
        promotion={true}
        country={'USA'}
        joinedDate={'2024.10.30'} //use format: mm/dd/yyyy или yyyy-mm-dd - является стандартным форматом, распознаваемым JavaScript Date конструктор
      />
    </CompanyTable>
  );
}
