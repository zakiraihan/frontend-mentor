import React, { PropsWithChildren } from 'react'

function FormHeader(props: PropsWithChildren<FormHeaderProps>) {
  const { header, subHeader, children } = props;

  return (
    <div className='flex flex-col'>
      <p className='text-mf-primary-100 font-bold text-2xl md:text-3xl'>{ header }</p>
      <p className='my-4 md:mb-8'>{ subHeader }</p>
      <div className='space-y-3'>
        { children }
      </div>
    </div>
  )
}

export default FormHeader;

interface FormHeaderProps {
  header: string;
  subHeader: string;
}