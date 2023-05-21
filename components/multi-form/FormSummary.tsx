import { BaseFormProps, IFormDataAddOns } from '@/interface/multi-form';
import React, { Fragment, useMemo } from 'react'

function FormSummary({ formData, handleFormChanges, onClickChangePlan }: FormSummaryProps) {
  
  const totalCost = useMemo(() => {
    let cost = formData.planType.cost[formData.planOccurrence]
    
    formData.addOns.forEach((addOn: IFormDataAddOns) => 
      addOn.isChecked && (cost += addOn.cost[formData.planOccurrence])
    );

    return cost;

  }, [formData.planOccurrence, formData.planType, formData.addOns])

  return (
    <Fragment>
      <div className='w-full bg-mf-neutral-400 rounded-md px-4 py-4 text-sm space-y-4 md:space-y-6'>
        <div className='w-full flex items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-mf-primary-100 font-bold text-sm'>
              Arcade ({formData.planOccurrence[0].toUpperCase() + formData.planOccurrence.slice(1)})
            </p>
            <p 
              className='underline hover:text-mf-primary-200 cursor-pointer'
              onClick={() => onClickChangePlan(2)}
            >
              Change
            </p>
          </div>
          <p className='font-bold text-mf-primary-100'>
            {formData.planOccurrence === 'monthly' ? 
              `+$${formData.planType.cost.monthly}/mo` : `+$${formData.planType.cost.yearly}/yr`
            }
          </p>
        </div>

        <hr/>

        <div></div>
        {formData.addOns.map((addOn: IFormDataAddOns, index) => (
          addOn.isChecked &&
            <div 
              key={'SummaryAddOns: ' + index}
              className='flex items-center justify-between'
            >
              <p>{ addOn.header }</p>
              <p className=' text-mf-primary-100'>
                {formData.planOccurrence === 'monthly' ? 
                  `+$${addOn.cost.monthly}/mo` : `+$${addOn.cost.yearly}/yr`
                }
              </p>
            </div>
        ))}
      </div>
      
      <div className='w-full flex items-center justify-between text-sm px-4 pt-4 md:pt-6'>
        <p>Total (per { formData.planOccurrence.slice(0, -2) })</p>
        <p className=' text-mf-primary-200 text-lg font-bold'>
          {formData.planOccurrence === 'monthly' ? 
            `+$${totalCost}/mo` : `+$${totalCost}/yr`
          }
        </p>
      </div>
    </Fragment>
  )
}

export default FormSummary;

interface FormSummaryProps extends BaseFormProps {
  onClickChangePlan: (step: number) => void;
};