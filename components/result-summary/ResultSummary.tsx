import React from 'react'
import ResultSection from './ResultSection'
import SummarySection from './SummarySection'

function ResultSummary() {
  return (
    <div className='w-full h-full md:w-[730px] md:h-[510px] md:rounded-[30px] shadow-blue flex flex-col md:flex-row overflow-hidden'>
        <ResultSection /> 
        <SummarySection />
      </div>
  )
}

export default ResultSummary