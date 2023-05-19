import React, { useMemo, useState } from 'react'

import Image from 'next/image'
import { BaseFormProps, IFormData, IFormDataAddOns, IFormStep } from '@/interface/multi-form';
import PersonalInfo from '@/components/multi-form/PersonalInfo';

function MultiFormPage() {
  const [currentActiveStep, setCurrentActiveStep] = useState<number>(1);
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    phone: '',
    plan: {
      type: 'arcade',
      occurance: 'monthly'
    },
    addOns: [] satisfies Array<IFormDataAddOns>
  });

  let stepStyle = 'bg-transparent text-white border-2 border-mf-neutral-100';
  let activeStepStyle = 'bg-mf-neutral-200 text-mf-primary-100 font-bold';

  function goToNextStep() {
    if (currentActiveStep < 5)
      setCurrentActiveStep(prevState => prevState + 1);
  }

  function goToPrevStep() {
    if (currentActiveStep > 0)
      setCurrentActiveStep(prevState => prevState - 1);
  }

  function onSubmitPersonalInfo(data: IFormData) {
    setFormData(data);
  }

  const form = useMemo(() => {
    switch (currentActiveStep) {
      case (1): {
        return (
          <PersonalInfo 
            formStep={formSteps[currentActiveStep]} 
            formData={formData}
            onSubmitForm={onSubmitPersonalInfo}
          />
        )
      }
      default: {
        return null;
      }
    }
  }, [currentActiveStep])

  return (
    <div className='w-full min-h-screen h-auto bg-mf-neutral-500 flex items-start md:items-center justify-center relative'>
      <nav className='fixed md:hidden w-full'>
        <Image
          alt='bg'
          src='/assets/multi-form/images/bg-sidebar-mobile.svg'
          sizes='100%'
          width={0}
          height={0}
          className='object-contain w-full absolute'
        />
        <div className='z-10 w-full h-[2.7rem] mt-7 relative flex items-center justify-center space-x-3'>
          {formSteps.map((item: IFormStep, index) => (
            item.step > 4 || item.step < 0 ? 
              null :
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${currentActiveStep === item.step || (currentActiveStep === 5 && currentActiveStep === item.step + 1) ? activeStepStyle : stepStyle}`}>
                { item.step }
              </div>
          ))}
        </div>
      </nav>
      <div className='z-10 w-11/12 h-auto md:w-8/12 md:min-h-[calc(100vh*3/4)] md:h-0 mt-[6.2rem] md:mt-0 md:px-4 md:py-4 rounded-lg shadow-custom-black-1/2 flex bg-white'>
        <nav className='hidden md:flex w-[28.6%] h-full relative bg-red-500'>
          <Image
            alt='bg'
            src='/assets/multi-form/images/bg-sidebar-desktop.svg'
            sizes='100%'
            width={0}
            height={0}
            className='object-contain w-full absolute'
          />
          <div className='z-10 w-full mx-5 my-9 flex flex-col justify-start space-y-5'>
            {formSteps.map((item: IFormStep, index) => (
              item.step > 4 || item.step < 0 ? 
                null :
                <div className='w-full flex'>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${currentActiveStep === item.step || (currentActiveStep === 5 && currentActiveStep === item.step + 1) ? activeStepStyle : stepStyle}`}>
                    { item.step }
                  </div>
                  <div className='flex flex-col justify-between ml-4'>
                    <p className='text-sm text-mf-neutral-200 leading-none tracking-widest'>STEP { item.step }</p>
                    <p className='text-sm font-bold leading-none tracking-widest'>{ item.title }</p>
                  </div>
                </div>
            ))}
          </div>
        </nav>
        <div className='md:w-[calc(100%-28.6%)] h-auto md:h-full md:px-2 md:pl-4 text-mf-neutral-100 overflow-hidden'>
            <div className='w-full h-full px-5 py-6 md:px-24 md:py-0 md:pt-9 '>
              <div className='w-full h-full bg-red-500'>
                { form }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MultiFormPage;

const formSteps = [
  {
    step: 1,
    title: 'YOUR INFO',
    header: 'Personal Info',
    subHeader: 'Please provide your name, email address, and phone number.'
  },
  {
    step: 2,
    title: 'SELECT PLAN',
    header: 'Select Your Plan',
    subHeader: 'You have the option of monthly or yearly billing.'
  },
  {
    step: 3,
    title: 'ADD-ONS',
    header: 'Pick add-ons',
    subHeader: 'Add-ons help enhance your gaming experience.'
  },
  {
    step: 4,
    title: 'SUMMARY',
    header: 'Finishing up',
    subHeader: 'Double-check everything looks OK before confirming.'
  },
  {
    step: 5,
    title: 'FINISH',
    header: 'Thank you!',
    subHeader: 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
  },
] satisfies Array<IFormStep>