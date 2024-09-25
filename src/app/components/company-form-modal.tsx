'use client';

import React from 'react';
import CompanyForm, { CompanyFormProps } from '@/src/app/components/company-form';
import Modal, { ModalProps } from '@/src/app/components/modal';
export interface CompanyFormModalProps extends ModalProps {
    onSubmit: CompanyFormProps['onSubmit'];
}
export default function CompanyFormModal({
                                             onSubmit,
                                             ...rest
                                         }: CompanyFormModalProps) {
    return (
        <Modal {...rest}>
            <CompanyForm onSubmit={onSubmit} />
        </Modal>
    );
}