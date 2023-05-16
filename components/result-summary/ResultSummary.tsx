import { data } from '@/mockdata/result-summary-data';
import { SummaryItem } from '@/pages/result-summary';
import React, { useEffect, useState } from 'react'
import ResultSection from './ResultSection'
import SummarySection from './SummarySection'

function ResultSummary() {
  const [summary, setSummary] = useState<Array<SummaryItem>>([]);

  useEffect(() => {
    setSummary(data satisfies Array<SummaryItem>)
  }, [])

  return (
    <div className='w-full h-auto md:w-[730px] md:h-[510px] md:rounded-[30px] shadow-blue flex flex-col md:flex-row overflow-hidden'>
      <ResultSection /> 
      <SummarySection items={summary}/>
    </div>
  )
}

export default ResultSummary