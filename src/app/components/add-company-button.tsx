'use client';

import React, {useState} from "react";
import Button from "@/src/app/components/button";
// import CompanyFormModal from "@/src/app/components/company-form-modal";
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
    ssr: false,
});

export default function AddCompanyButton() {
    const [show, setShow] = useState(false);
    return(
        <>
            <Button onClick={()=> setShow(false)}>Add company</Button>
            <CompanyFormModal
                onSubmit={console.log}
                show={show}
                onClose={()=> setShow(false)}
            />
        </>

    );
}