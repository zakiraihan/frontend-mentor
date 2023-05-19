import { BaseFormProps, IFormDataPersonal } from '@/interface/multi-form';
import React, { useState } from 'react'

function PersonalInfo(props: PersonalInfoProps) {
  const { formStep, formData, onSubmitForm } = props;
  const [personalData, setPersonalData] = useState<IFormDataPersonal>({
    name: formData.name,
    email: formData.email,
    phone: formData.phone
  })
  
  return (
    <div className='flex flex-col'>
      <p>{ formStep.header }</p>
    </div>
  )
}

export default PersonalInfo;

export interface PersonalInfoProps extends BaseFormProps {};