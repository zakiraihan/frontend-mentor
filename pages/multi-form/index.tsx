import React, { useMemo, useState } from 'react'

import Image from 'next/image'
import { BaseFormProps, IFormData, IFormDataAddOns, IFormStep } from '@/interface/multi-form';
import PersonalInfoForm from '@/components/multi-form/PersonalInfoForm';
import FormHeader from '@/components/multi-form/FormHeader';

function MultiFormPage() {
  const [currentActiveStep, setCurrentActiveStep] = useState<number>(1);
  const [formData, setFormData] = useState<IFormData>({
    name: {
      value: '',
      isValid: true
    },
    email: {
      value: '',
      isValid: true
    },
    phone: {
      value: '',
      isValid: true
    },
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

  function handleFormChanges(event: React.ChangeEvent<HTMLInputElement>) {
     const {name, value, type, checked, validity} = event.target;
     setFormData((prevFormData) => {
        let newFormData: IFormData = { ...prevFormData }
        console.log(validity)
        if (type === 'text' || type === 'email' || type === 'tel'){
          newFormData = {
            ...newFormData,
            [name]: {
              value: value,
              isValid: validity.valid && value !== '',
              errorMessage: 
                value === '' ? "This field is required" :
                validity.typeMismatch || validity.patternMismatch ? 
                  `Invalid ${'' + name[0].toUpperCase() + name.slice(1)}` : ''
            }
          };
        }
        else {
          
        }
        return newFormData;
     })
  }

  const form = useMemo(() => {
    switch (currentActiveStep) {
      case (1): {
        return (
          <PersonalInfoForm 
            formStep={formSteps[currentActiveStep - 1]} 
            formData={formData}
            handleFormChanges={handleFormChanges}
          />
        )
      }
      default: {
        return null;
      }
    }
  }, [currentActiveStep, formData])

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
              <div key={"itemStep: " + index} className={`w-9 h-9 rounded-full flex items-center justify-center ${currentActiveStep === item.step || (currentActiveStep === 5 && currentActiveStep === item.step + 1) ? activeStepStyle : stepStyle}`}>
                { item.step }
              </div>
          ))}
        </div>
      </nav>
      <div className='z-10 w-11/12 h-auto md:w-8/12 md:min-h-[calc(100vh*3/4)] md:h-0 mt-[6.2rem] md:mt-0 md:px-4 md:py-4 rounded-lg shadow-custom-black-1/2 flex bg-white'>
        <nav className='hidden md:flex md:w-[10%] lg:w-[28.6%] h-full relative '>
          <Image
            alt='bg'
            src='/assets/multi-form/images/bg-sidebar-desktop.svg'
            priority
            sizes='100%'
            width={0}
            height={0}
            className='object-contain w-full absolute'
          />
          <div className='z-10 w-full mx-5 my-9 flex flex-col justify-start space-y-8'>
            {formSteps.map((item: IFormStep, index) => (
              item.step > 4 || item.step < 0 ? 
                null :
                <div key={"itemStep: " + index} className='w-full flex'>
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
        <div className='md:w-[calc(100%-28.6%)] h-auto md:min-h-full md:px-2 md:pl-4 text-mf-neutral-100 overflow-hidden'>
            <div className='w-full min-h-full px-5 py-8 md:px-24 md:py-0 md:pt-9 md:pb-20 relative'>
              <FormHeader 
                header={formSteps[currentActiveStep-1].header} 
                subHeader={formSteps[currentActiveStep-1].subHeader}
              >
                { form }
              </FormHeader>
              <div className='fixed md:absolute bottom-0 left-0 right-0 md:left-0 md:right-0 h-16 md:h-20 px-5 md:px-24 flex items-center justify-between bg-white'>
                <div className='h-10 flex items-center cursor-pointer hover:text-mf-primary-100'>
                  Go Back
                </div>
                <div className='h-10 px-5 flex items-center cursor-pointer text-white bg-mf-primary-100 rounded-md '>
                  Next Step
                </div>
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