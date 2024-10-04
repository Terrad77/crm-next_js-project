'use client';

import React from 'react';
import Button from "@/app/components/button";

export interface ErrorComponentProps {
  error: Error;
  //add function "reset" for ability NextJS rerender components what was limited by interceptor errors
  reset: () => void;
}

export default function Error({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong! Error.message: ${error.message}`}</p>
        <Button onClick={()=> reset()}>Try again</Button>
    </div>
  );
}
