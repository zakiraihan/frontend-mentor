import Head from 'next/head';
import React from 'react'
import ResultSummary from '@/components/result-summary/ResultSummary'

function ResultSummaryPage() {
  return (
    <>
      <Head>
        <title>Result Summary</title>
        <meta name='description' content='Challenge from Frontend mentor to create result summary component' />
        <link rel='icon' href='/assets/result-summary/images/favicon-32x32.png'/>
      </Head>
      <div className='min-w-full min-h-screen h-auto bg-white flex items-center justify-center font-hanken-grotesk'>
        <ResultSummary />
      </div>
    </>
  )
}

export default ResultSummaryPage

export interface SummaryItem {
  category: string;
  score: number;
  baseColor: string;
  icon: string;
}