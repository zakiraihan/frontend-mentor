import { SummaryItem } from '@/pages/result-summary'
import React from 'react'
import Button from './Button';

function SummarySection(props: SummarySectionProps) {
  return (
    <section className='w-full h-auto md:w-1/2 md:h-full bg-white pt-6 pb-10 md:pb-6 md:py-10 px-10'>
      <p className='text-rs-dark-grey-blue font-bold text-xl'>Summary</p>
      <ul className='mt-5 space-y-5'>
        {props.items.map((item: SummaryItem, index: number) => (
          <li key={'item: ' + index}>
            <SummaryItem item={item} />
          </li>
        ))}
      </ul>
      <Button text={"Continue"} className='mt-9' onClick={() => alert('Ahoy')}/>
    </section> 
  )
}

function SummaryItem({ item }: SummaryItemProps) {
  let textColor = `text-rs-light-red`;
  let bgColor = `bg-rs-light-red`;

  switch (item.category) {
    case ('Memory'): {
      textColor = `text-rs-orange-yellow`;
      bgColor = `bg-rs-orange-yellow`;
      break;
    }
    case ('Verbal'): {
      textColor = `text-rs-green-teal`;
      bgColor = `bg-rs-green-teal`;
      break;
    }
    case ('Visual'): {
      textColor = `text-rs-cobalt-blue`;
      bgColor = `bg-rs-cobalt-blue`;
      break;
    }
    default: {
      break;
    }
  }

  return(
    <div className={`${bgColor} font-bold bg-opacity-5 flex items-center justify-between px-4 py-4 rounded-lg`}>
      <div className='flex'>
        <img
          className='mr-2'
          src={item.icon}
          alt={item.category}
        />
        <p className={`${textColor} text-opacity-80`}>
          {item.category}
        </p>
      </div>
      <p className='text-gray-400 opacity-80 self-end'>
        <span className='text-gray-800 opacity-95'>{item.score}</span> / 100
      </p>
    </div>
  )
}

export default SummarySection

interface SummarySectionProps {
  items: Array<SummaryItem>;
}

interface SummaryItemProps {
  item: SummaryItem;
}

