import React from 'react'
import ResultSummary from '@/components/result-summary/ResultSummary'

function ResultSummaryPage() {
  return (
    <div className='min-w-full min-h-screen h-auto bg-white flex items-center justify-center font-hanken-grotesk'>
      <ResultSummary />
    </div>
  )
}

export default ResultSummaryPage

export interface SummaryItem {
  category: string;
  score: number;
  baseColor: string;
  icon: string;
}