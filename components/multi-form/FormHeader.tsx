import React, { PropsWithChildren } from 'react'

import { IFormStep } from '@/interface/multi-form';
import Image from 'next/image';

function FormHeader({ formSteps, children }: PropsWithChildren<FormHeaderProps>) {
  const { step, header, subHeader } = formSteps;

  return (
    <div className={`flex flex-col ${step > 4 && 'items-center justify-center text-center py-10 md:h-full'}`}>
      {step === 5 &&
        <div className='w-14 md:w-20 mb-8'>
          <Image
            alt='formDone'
            src='/assets/multi-form/images/icon-thank-you.svg'
            sizes='100%'
            width={0}
            height={0}
            className='object-scale-down w-full'
          />
        </div>
      }
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
  formSteps: IFormStep
}