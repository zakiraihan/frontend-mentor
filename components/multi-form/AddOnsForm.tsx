import { BaseFormProps, IFormDataAddOns } from '@/interface/multi-form';
import React, { Fragment } from 'react'

import Image from 'next/image';

function AddOnsForm({ formData, handleFormChanges }: BaseFormProps) {
  return (
    <div className='w-full space-y-5'>
      {formData.addOns.map((addOn: IFormDataAddOns, index) => (
        <div
          key={'Addons: ' + index} 
          className={`w-full border-[1px] rounded-md flex overflow-hidden ${addOn.isChecked ? 'border-mf-primary-100' : 'border-mf-neutral-200'}`}
        >
          <input
            type={'checkbox'}
            id={addOn.header}
            name={addOn.header}
            checked={addOn.isChecked}
            onChange={handleFormChanges}
            hidden
          />
          <label 
            htmlFor={addOn.header}
            className={'w-full px-4 py-4 flex items-center '}
          >
            <div className={`w-5 h-5 border-[1px] border-mf-neutral-200 rounded-[4px] flex items-center justify-center ${addOn.isChecked ? 'bg-mf-primary-200' : ''}`}>
              <Image 
                  alt='checkmark'
                  src='/assets/multi-form/images/icon-checkmark.svg'
                  sizes='100%'
                  width={0}
                  height={0}
                  className='object-scale-down w-full'
                  hidden={!addOn.isChecked}
              />
            </div>
            <div className='w-full h-full flex items-center'>
              <div className='w-full pl-4'>
                <p className='text-mf-primary-100 text-sm font-bold'>
                  { addOn.header }
                </p>
                <p className='text-xs'>
                  { addOn.subHeader }
                </p>
              </div>
              <p className='text-sm text-mf-primary-200'>
                {formData.planOccurrence === 'monthly' ? addOn.cost.monthly : addOn.cost.yearly}
              </p>
            </div>
          </label>
        </div>
      ))}
    </div>
  )
}

export default AddOnsForm;

interface AddOnsFormProps extends BaseFormProps {}