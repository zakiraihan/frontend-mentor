import React, { Fragment } from 'react'

import { BaseFormProps } from '@/interface/multi-form';

function PersonalInfoForm({ formData, handleFormChanges }: PersonalInfoFormProps) {
  return (
    <Fragment>
      <PersonalInforFormInput
        type='text'
        label='name'
        title='Name'
        placeholder='e.g. Stephen King'
        value={formData.name.value}
        isValid={formData.name.isValid}
        errorMessage='This field is required'
        onChange={handleFormChanges}
      />
      <PersonalInforFormInput
        type='email'
        label='email'
        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
        title='Email'
        placeholder='e.g. stephenking@lorem.com'
        value={formData.email.value}
        isValid={formData.email.isValid}
        errorMessage={formData.email.errorMessage}
        onChange={handleFormChanges}
      />
      <PersonalInforFormInput
        type='tel'
        label='phone'
        pattern='\+[0-9]{1,2} [0-9]{10,12}'
        title='Phone Number'
        placeholder='e.g. +1 2345678901'
        value={formData.phone.value}
        isValid={formData.phone.isValid}
        errorMessage={formData.phone.errorMessage}
        onChange={handleFormChanges}
      />
    </Fragment>
  )
}

export default PersonalInfoForm;

interface PersonalInfoFormProps extends BaseFormProps {};

function PersonalInforFormInput({
  type,
  label,
  pattern,
  title,
  placeholder,
  value,
  isValid,
  errorMessage,
  onChange
}: PersonalInfoFormInputProps) {
  let inputBorderStyle = 'border-mf-neutral-200';
  if (isValid !== true) inputBorderStyle = 'border-mf-primary-500';

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between font-medium text-xs md:text-sm mb-2'>
        <label htmlFor={label} className='text-mf-primary-100'>
          { title }
        </label>
        {isValid !== true ?
          <p className='text-mf-primary-500'>{ errorMessage || 'This field is required' }</p> : null
        }
      </div>
      <input 
        type={type}
        name={label}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-[1px] rounded-md px-5 py-2 md:py-3 placeholder:font-bold placeholder:text-sm font-bold text-sm md:text-base text-mf-primary-100 focus:!outline-none active:border-mf-primary-100 focus:border-mf-primary-100 ${inputBorderStyle}`}
      />
    </div>
  );
}

interface PersonalInfoFormInputProps {
  type: 'text' | 'email' | 'tel';
  label: string;
  pattern?: string;
  title: string;
  placeholder: string;
  value: string;
  isValid?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}