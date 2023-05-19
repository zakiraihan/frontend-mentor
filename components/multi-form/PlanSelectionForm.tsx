import { BaseFormProps, IPlanSelection } from '@/interface/multi-form';
import Image from 'next/image';
import React, { Fragment } from 'react'

function PlanSelectionForm({ formStep, formData, handleFormChanges }: BaseFormProps) {
  return (
    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between '>
      {planList.map((plan: IPlanSelection, index) => (
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
            className={`w-full md:w-[31%] py-4 px-4 border-[1px] rounded-md flex items-start md:flex-col md:space-y-10 ${formData.planType.type === plan.type ? 'border-mf-primary-100' : 'border-mf-neutral-200'}`}
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
                { formData.planOccurance === 'monthly' ?
                  plan.cost.monthly : plan.cost.yearly
                }
              </p>
              <p className='text-mf-primary-100 text-sm'>
                { formData.planOccurance === 'monthly' ?
                  plan.benefit.monthly : plan.benefit.yearly
                }
              </p>
            </div>
          </label>
        </Fragment>
      ))}
    </div>
  )
}

export default PlanSelectionForm;

interface PlanSelectionFormProps extends BaseFormProps {}

const planList = [
  {
    type: 'arcade',
    cost: {
      monthly: '$9/mo',
      yearly: '$90/yr',
    },
    benefit: {
      monthly: '',
      yearly: '2 months free',
    },
    image: '/assets/multi-form/images/icon-arcade.svg'
  },
  {
    type: 'advanced',
    cost: {
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    benefit: {
      monthly: '',
      yearly: '2 months free',
    },
    image: '/assets/multi-form/images/icon-advanced.svg'
  },
  {
    type: 'pro',
    cost: {
      monthly: '$15/mo',
      yearly: '$150/yr',
    },
    benefit: {
      monthly: '',
      yearly: '2 months free',
    },
    image: '/assets/multi-form/images/icon-pro.svg'
  },
] satisfies Array<IPlanSelection>