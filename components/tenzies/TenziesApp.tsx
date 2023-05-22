import { IDice, IGameStatistics } from '@/interface/tenzies'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

function TenziesApp() {
  const [diceNumbers, setDiceNumbers] = useState<Array<IDice>>([]);
  const [gameStatistics, setGameStatistics] = useState<IGameStatistics>({
    isGameCompleted: false,
    countSame: 0,
    selectedVal: -1,
    buttonText: 'Roll'
  });

  useEffect(() => {
    setDiceNumbers(generateNewDiceSet());
  }, [])

  useEffect(() => {
    if (gameStatistics.countSame === 10) {
      setGameStatistics(prevState => ({
        ...prevState,
        isGameCompleted: true,
        buttonText: 'Reset'
      }));
    }
  }, [gameStatistics.countSame])

  useEffect(() => {
    if (gameStatistics.isGameCompleted) 
      alert("Congratulations!!! You have completed the game!!!");
  }, [gameStatistics.isGameCompleted])

  function rollDice() {
    if (gameStatistics.isGameCompleted) {
      setDiceNumbers(generateNewDiceSet());
      setGameStatistics(prevState => ({
        ...prevState,
        isGameCompleted: false,
        selectedVal: -1,
        countSame: 0,
        buttonText: 'Roll'
      }));
    } else {
      setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(dice => (
        dice.isActive ? dice :
        { ...dice, value: Math.floor(Math.random()*6)+1 }
      )))
    }
  }

  function handleDiceClick(clickedDice: IDice) {
    if (gameStatistics.isGameCompleted) return;

    if (gameStatistics.selectedVal === -1) {
      setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(dice => (
        dice.id !== clickedDice.id ? dice :
        {...dice, isActive: true}
      )));
      setGameStatistics(prevState => ({
        ...prevState,
        countSame: prevState.countSame + 1,
        selectedVal: clickedDice.value
      }))
    } else if (clickedDice.value === gameStatistics.selectedVal) {
      if (!clickedDice.isActive) {
        setGameStatistics(prevState => ({
          ...prevState,
          countSame: prevState.countSame + 1,
        }))
      } else {
        if (gameStatistics.countSame - 1 === 0) {
          setGameStatistics(prevState => ({
            ...prevState,
            selectedVal: -1
          }))
        };
        setGameStatistics(prevState => ({
          ...prevState,
          countSame: prevState.countSame - 1,
        }))
      }
      
      setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(dice => (
        dice.id !== clickedDice.id ? dice :
        {...dice, isActive: !dice.isActive}
      )));
    }
  }

  return (
    <div className='w-full min-h-screen h-0 bg-tenzies-dark-blue font-karla text-tenzies-light-gray flex md:items-center justify-center'>
      <div className='w-80 h-80 md:w-80 md:h-80 my-5 p-7 bg-tenzies-cream-white rounded-lg flex flex-col items-center'>
        <p className='font-bold text-2xl text-tenzies-dark-blue'>
          Tenzies
        </p>
        <p className='text-center text-sm'>
          Roll until all dice are the same. Click each die to freeze it at it&#39;s current value between rolls.
        </p>
        <div className='w-full my-5 grid grid-cols-5 justify-items-center gap-2'>
          {diceNumbers?.map((dice: IDice, index) => (
            <button 
              key={'DiceId: ' + dice.id}
              className={`w-10 h-10 flex items-center justify-center rounded-md shadow-custom-tenzies-black ${dice.isActive ? 'bg-tenzies-lime-green' : 'bg-white'} active:scale-90`}
              onClick={() => handleDiceClick(dice)}
              type='button'
            >
              <p className='text-tenzies-dark-blue font-bold text-xl'>
                {dice.value}
              </p>
            </button>
          ))}
        </div>
        <button 
          type='button'
          className='px-8 py-2 rounded-md bg-tenzies-primary-blue text-white shadow-custom-tenzies-black hover:bg-opacity-80 active:scale-90'
          onClick={rollDice}
        >
          {gameStatistics.buttonText}
        </button>
      </div>
    </div>
  )
}

const generateNewDiceSet = () => {
  return Array.from({length: 10}, () => Math.floor(
    Math.random() * 6) + 1
  ).map((value, index) => ({
    id: index,
    value: value,
    isActive: false
  } satisfies IDice))
}

export default TenziesApp;