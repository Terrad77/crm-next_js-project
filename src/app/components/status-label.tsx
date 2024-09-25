import React from 'react';
import clsx from 'clsx'

// add all status as enum
export enum Status {
  Active = 'active',
  NotActive ='notActive',
  Pending ='pending',
  Suspended ='suspended'
}
export interface StatusLabelProps {

  children: React.ReactNode;
  status: Status; // add status props
  disabled?: boolean; // add state props
}

// console.log(styles); // { label: 'active-label_label__foaeT', __checksum: '82e2988f4876' }

export default function StatusLabel({ children, status, disabled }: StatusLabelProps) {
    console.log("SECRET_KEY", process.env.CRM_SECRET_KEY)
  return(
      <div
          // conditional styles -умовні стилі, застосовано взалежності від status
          className={clsx(
              'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
              status === Status.Active && 'text-green-700 bg-green-100',
              status === Status.NotActive && 'text-red-700 bg-red-100',
              status === Status.Pending && 'text-orange-700 bg-orange-100',
              status === Status.Suspended && 'text-blue-700 bg-blue-100',
              {
                ['opacity-75 cursor-not-allowed']: disabled,
              },
          )}
      >
        <div className="w-1 h-1 mr-2 rounded-full bg-current" />
        {children}
      </div>
  );
}