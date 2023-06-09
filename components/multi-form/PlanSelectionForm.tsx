import { BaseFormProps, IPlanSelection } from '@/interface/multi-form';
import React, { Fragment } from 'react'

import Image from 'next/image';
import { availablePlans } from '@/mockdata/multi-form-data';

function PlanSelectionForm({ formData, handleFormChanges }: BaseFormProps) {
  return (
    <Fragment>
      <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between '>
        {availablePlans.map((plan: IPlanSelection, index) => (
          <Fragment key={plan.type}>
            <input 
              type="radio" 
              id={plan.type} 
              name="planType" 
              value={JSON.stringify(plan)}
              onChange={handleFormChanges} 
              className='hidden'
            />
            <label  
              htmlFor={plan.type}
              className={`w-full md:w-[31%] py-4 px-4 border-[1px] rounded-md flex items-start md:flex-col md:space-y-10 cursor-pointer hover:border-mf-primary-100 ${formData.planType.type === plan.type ? 'border-mf-primary-200 bg-mf-neutral-400' : 'border-mf-neutral-200'}`}
            >
              <div className='w-12 h-12 rounded-full mr-4'>
                <Image
                  alt='Plan'
                  src={plan.image}
                  sizes='100%'
                  width={0}
                  height={0}
                  className='object-contain w-full'
                />
              </div>
              <div>
                <p className='font-bold text-mf-primary-100'>
                  { plan.type[0].toUpperCase() + plan.type.slice(1) }
                </p>
                <p>
                  { formData.planOccurrence === 'monthly' ?
                    `$${plan.cost.monthly}/mo` : `$${plan.cost.yearly}/yr`
                  }
                </p>
                <p className='text-mf-primary-100 text-sm'>
                  { formData.planOccurrence === 'monthly' ?
                    plan.benefit.monthly : plan.benefit.yearly
                  }
                </p>
              </div>
            </label>
          </Fragment>
        ))}
      </div>
      
      <div className='w-full py-6 flex items-center justify-center'>
        <p className={`${formData.planOccurrence === 'yearly' ? '' : 'text-mf-primary-100'} font-bold`}>
          Monthly
        </p>
        <label 
          htmlFor='planOccurrence' 
          className='mx-4 w-14 h-7 flex items-center px-1 py-1 cursor-pointer bg-mf-primary-100 rounded-full relative'
        >
          <input 
            type='checkbox' 
            id='planOccurrence'
            name='planOccurrence' 
            checked={formData.planOccurrence === 'yearly'} 
            onChange={handleFormChanges} 
            hidden
          />
          <span 
            className={`w-5 h-5 rounded-full bg-white absolute transition delay-[40ms] ${formData.planOccurrence === 'yearly' ? 'translate-x-7': ''}`}
          />
        </label>
        <p className={`${formData.planOccurrence === 'yearly' ? 'text-mf-primary-100' : ''} font-bold`}>
          Yearly
        </p>
      </div>
    </Fragment>
  )
}

export default PlanSelectionForm;

interface PlanSelectionFormProps extends BaseFormProps {}
